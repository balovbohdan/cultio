export const fetchHtml = async () => {
    const res = await fetch('/actions/create-html');

    return await res.json();
};