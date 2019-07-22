import * as React from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import {routes} from '@routes';

export const RouterSwitch = () =>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/another">Another page</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            {routes.map(route => <Route key={route.name} {...route.meta} />)}
        </Switch>
    </div>;