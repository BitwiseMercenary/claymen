export class TableConfigInterface {
    constructor() {
        if (!this.tableName) {
            throw new Error("Must provide table name");
        }

        if (!this.field) {
            throw new Error("Must provide field config")
        }

        if (!this.field.name) {
            throw new Error("Must provide a name for field")
        }
    }
}
