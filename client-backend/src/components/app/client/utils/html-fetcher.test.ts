import {fetchHtml} from './html-fetcher';

describe('App HTML fetcher', () => {
    it('Should fetch HTML from the client-backend', async () => {
        const html = 'html';
        const pathname = '/';

        const fetch = () =>
            Promise.resolve({ json: () => Promise.resolve({ html }) });

        const res = await fetchHtml({ fetch, pathname });

        expect(res.html).toMatch(html);
    });

    it('Should have correct request params', async () => {
        const html = 'html';
        const pathname = '/';

        const fetch = (url:string, params:{[key:string]:any}) => {
            const {method, headers} = params;

            expect(method).toMatch('GET');
            expect(url).toMatch(`/actions/create-html?location=${pathname}`);
            expect(headers['Content-Type']).toMatch('x-www-form-urlencoded;charset=utf-8');

            return Promise.resolve({ json: () => Promise.resolve({ html }) });
        };

        await fetchHtml({ fetch, pathname });
    });
});