import fs from "fs";
import path from "path";
import { configProcessor } from "./configProcessor.js";
import { FieldTags } from "./fieldFaker.js";

// Reduces all configs in an entire clay module into a single array;
const reduceConfigs = (clayModule) => {
    const exportObject = Object.values(clayModule);
    return [].concat(...exportObject);
}

const importClayModules = async () => {
    const __dirname = path.resolve(path.dirname(''));
    const clayPath = __dirname + "/clay";
    const clayModules = fs.readdirSync(clayPath).map(
        async (file) => {
            // import modules from file
            const clayMod = await import(clayPath + "/" + file);

            // reduce all configs in module to one array
            return reduceConfigs({ ...clayMod });
        });

    const importedClayModules = await Promise.all(clayModules);

    // flatten all modules into one big array
    return [].concat(...importedClayModules);
}


const createClaymen = async () => {
    const clayModules = await importClayModules();
    clayModules.forEach( clayMod => {
        configProcessor(clayMod);
    })
}

export {
    createClaymen,
    FieldTags,
}
