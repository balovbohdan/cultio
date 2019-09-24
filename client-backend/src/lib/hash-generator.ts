export const genHash = (len:number = 5):string => {
    let res = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    for (let i = 0; i < len; i++)
        res += chars.charAt(Math.floor(Math.random() * charsLength));

    return res;
};