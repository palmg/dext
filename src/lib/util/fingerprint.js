const FingerLength = 8;
export const fingerprint = (...foos) => {
    const _str = foos.map(foo => toString(foo)).toString(),
        strLen = _str.length;

    let step = Math.round(strLen / FingerLength), retStr = '';
    step < 7 && (step = 7);
    for (let i = 0; FingerLength > i; i++) {
        retStr += _str.charAt(i * step % len)
    }
    return retStr;
}

const toString = foo => foo.toString().replace(/^function|\n|\(|\)|\[|\]|\{|\}|\,|;|\.|\\|_|:|\/|"|'|-|=|\*|!| /g, '');