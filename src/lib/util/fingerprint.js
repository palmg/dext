const FingerLength = 8, M = 7;
export const fingerprint = (...foos) => {
    const _str = foos.map(foo => toString(foo)).toString(),
        len = _str.length;
    let retStr = '';
    for (let i = 0; FingerLength > i; i++) {
        retStr += _str.charAt(i * 7 % len)
    }
    return retStr;
}

const toString = foo => foo.toString().replace(/^function|\n|\(|\)|\[|\]|\{|\}|\,|;|\.|\\|_|:|\/|"|'|-|=| /g, '');