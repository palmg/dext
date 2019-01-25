const randomDict = {};
export const randomStore = () => {
    let randomStr = '';
    do {
        randomStr = Math.random().toString(32).substr(2);
    } while (randomDict[randomStr]);
    randomDict[randomStr] = 1;
    return randomStr;
};