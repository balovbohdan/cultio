export const fetchHtml = async () => {
    const url = createUrl();
    const params = createParams();
    const res = await fetch(url, params);

    return await res.json();
};

const createUrl = () => {
    const url = `/actions/create-html`;
    const query = `location=${window.location.pathname}`;

    return url + '?' + query;
};

const createParams = () => ({
    method: 'GET',
    headers: {
        'Content-Type': 'x-www-form-urlencoded;charset=urf-8'
    }
});