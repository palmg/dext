import {getDisplayName} from './componentName'

export const signatureClass = (signature, klass) => {
    klass.prototype[Symbol.toStringTag] = signature;
    klass.displayName = `signature_${signature}(${getDisplayName(klass)})`;
    return klass;
};

export const getClassSignature = klass => (klass.prototype[Symbol.toStringTag]);