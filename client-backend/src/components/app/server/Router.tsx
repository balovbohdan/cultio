import * as React from 'react';
import {Route, Switch, StaticRouter} from 'react-router';

import {routes} from '@routes';

type Props = {
    location:string;
    context:{[key:string]:any};
};

export const Router = ({location, context}:Props) =>
    <StaticRouter location={location} context={context}>
        <Switch>
            {routes.map(route => <Route key={route.name} {...route.meta}/>)}
        </Switch>
    </StaticRouter>;