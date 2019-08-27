import * as React from 'react';

import data from '@root/dummyData';
import {Datasets} from '@components/datasets';
import {Header} from '@components/header/home';

import {Cover} from './cover';

export const Home = () =>
    <>
        <Header/>
        <Cover/>
        <Datasets items={data.datasets}/>
    </>;