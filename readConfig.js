const validateConfig = (config) => {
    // do checks to validate config
    if(!Array.isArray(config)) throw Error("Config must be encapsulated in an array")
}

/*

configs must be in this format:
[
    { ...config1 },
    { ...config2 },
    { ...config3 }
]
 */
export const importAndValidateConfig = (configArray) => {
    validateConfig(configArray);

    return configArray;
}
