import * as fetch from 'whatwg-fetch';

type Props = {
    pathname?:string;
    fetch?:CustomFetch;
};

type PropsPrepared = {
    pathname:string;
    fetch:CustomFetch;
};

type Res = {
    html:string;
};

export type CustomFetch = (url:string, params:{[key:string]:any})=>Promise<{
    json:()=>Promise<Res>;
}>;

export const fetchHtml = async (props:Props = {}):Promise<Res> => {
    const {fetch, pathname} = prepareProps(props);

    const params = createParams();
    const url = createUrl(pathname);
    const res = await fetch(url, params);

    return await res.json();
};

const createUrl = (pathname:string):string => {
    const url = `/actions/create-html`;
    const query = `location=${pathname}`;

    return url + '?' + query;
};

const createParams = () => ({
    method: 'GET',
    headers: {
        'Content-Type': 'x-www-form-urlencoded;charset=utf-8'
    }
});

const prepareProps = (props:Props):PropsPrepared|never => {
    const def:PropsPrepared = {
        fetch,
        pathname: window.location.pathname
    };

    const res:PropsPrepared = Object.assign({}, def, props);

    if (!res.fetch)
        throw new Error(`Failed to look for the 'fetch' function.`);

    if (!res.pathname)
        throw new Error('Failed to look for page pathname.');

    return res;
};