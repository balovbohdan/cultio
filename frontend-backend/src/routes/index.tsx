import * as React from 'react';
import {RouteProps} from 'react-router';

const Home = () => <h1>home</h1>;
const Another = () => <h1>another</h1>;

type Item = {
    name:string;
    meta:RouteProps;
};

export const routes:Item[] = [
    {
        name: 'home',
        meta: {
            path: '/',
            exact: true,
            component: Home
        }
    },
    {
        name: 'another',
        meta: {
            path: '/another',
            component: Another
        }
    }
];

export default routes;