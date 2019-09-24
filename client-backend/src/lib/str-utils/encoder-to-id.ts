export const encodeToId = (str:string):string =>
    str
        ? str.replace(/[^a-z0-9]/ig, '_').substr(0, 80)
        : '';

export default encodeToId;