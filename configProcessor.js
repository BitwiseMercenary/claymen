import * as cw from "csv-writer";
import { fieldFakerMap } from "./fieldFaker.js";

let depRegistryUnused = {};
let depRegistryUsed = {};

const writeToCsv = (path, header, records) => {
    const csvWriter = cw.createObjectCsvWriter({
        path,
        header
    });

    console.log(`writing ${path}...`)
    csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log(`...${path} Done`);
        });
}

export const configProcessor = (tableConfig) => {
    const {tableName, fields, createThisMany} = tableConfig;

    const header = [];
    const records = [];

    // loop for x amount of records we need to create
    for (let amountCreated = 0; amountCreated < createThisMany; amountCreated++) {

        const record = {};
        // loop through each field config
        fields.forEach((fieldConfig) => {
            const {name, fakeDataType, foreignDependency, isForeignParent, customGenerator } = fieldConfig;

            if (amountCreated === 0) {
                // extract headers on first iteration of outer loop
                header.push({id: name, title: name.toUpperCase()});
            }

            if(customGenerator) {
                record[name] = customGenerator();
            }

            if(fakeDataType) {
                // fetch fake data for the current field
                if(!fieldFakerMap[fakeDataType]) {
                    throw new Error(fakeDataType + " is not a valid fakeDataType")
                }

                record[name] = fieldFakerMap[fakeDataType]();
            }

            // if some other table depends on this field, register it globally for reuse
            if(isForeignParent) {
                depRegistryUnused[tableName+"."+name] = depRegistryUnused[tableName+"."+name] || []
                depRegistryUnused[tableName+"."+name].push(record[name]);
            }

            if(foreignDependency) {
                // get values that can be used for a foreign key
                let unused = depRegistryUnused[foreignDependency];
                // make sure that the parent has been defined first
                if(!unused){
                    throw new Error(foreignDependency+": Chicken and egg error. Make sure tables " +
                        "with columns that are parents are processed before those that are dependants.");
                }
                // if the unused array is 0, we need to swap the used/unsed stacks
                if(unused.length === 0){
                    unused = depRegistryUnused[foreignDependency] = depRegistryUsed[foreignDependency];
                    depRegistryUsed[foreignDependency] = [];
                }
                // pop a foreign key and move it to the used stack
                record[name] = unused.pop();
                depRegistryUsed[foreignDependency] = depRegistryUsed[foreignDependency] || [];
                depRegistryUsed[foreignDependency].push(record[name]);
            }

        })
        records.push(record);
    }

    writeToCsv(`${tableName}.csv`, header, records);
}
