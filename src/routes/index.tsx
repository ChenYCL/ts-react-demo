import React, { lazy } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import NotFound from '../components/NotFound';

const Homepage = lazy(() => import(/* webpackChunkName:"Homepage" */ '../pages/Welcome'));
const Songs = lazy(() => import(/* webpackChunkName:"Songs" */ '../pages/Songs'));

const DemoPage: React.FC<any> = (props: { name: string }) => {
    const { name } = props;
    return <div>{name}</div>;
};
export const routes: RouteProps[] = [
    {
        path: '/home',
        exact: true,
        component: Homepage,
    },
    {
        path: '/home/songs',
        exact: true,
        component: Songs,
    },
    {
        path: '/home/playlists',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: () => <DemoPage name="playlists" />,
    },
    {
        path: '/home/pricing',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: () => <DemoPage name="pricing" />,
    },
    {
        path: '/home/work',
        exact: true,
        // eslint-disable-next-line react/display-name
        component: () => <DemoPage name="work" />,
    },
    {
        path: '*',
        component: NotFound,
    },
];

const Routes = (authorized: boolean) => (
    <Switch>
        {routes.map((r) => {
            const { path, exact, component } = r;
            const LazyCom = component;
            return (
                <Route
                    key={path + ''}
                    exact={!!exact}
                    path={path}
                    render={(props: any) =>
                        // @ts-ignore
                        authorized ? <LazyCom {...props} /> : <Redirect to="/login" />
                    }
                />
            );
        })}
    </Switch>
);

export default Routes;
