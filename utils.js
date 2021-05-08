export const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomChoice = (arr) => arr[randomIntFromInterval(0, arr.length - 1)];
