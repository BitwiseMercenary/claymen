const validateConfig = (config) => {
    // do checks to validate config
    if(!Array.isArray(config)) throw Error("Config must be encapsulated in an array")
}


export const importAndValidateConfig = (configArray) => {
    validateConfig(configArray);

    return configArray;
}
