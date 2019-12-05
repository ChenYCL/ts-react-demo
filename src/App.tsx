import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BASE_NAME from './config/history';

import './App.scss';
import { Provider } from 'react-redux';
import prodStore from './store/configureStore.prod'; // 生成环境
import devStore from './store/configureStore.dev'; // 开发环境
import Loading from './components/Loading';

// 主路由 home , login
const Home = lazy(() => import(/* webpackChunkName:"Home" */ './pages/Home'));
const Login = lazy(() => import(/* webpackChunkName:"Login" */ './pages/Login'));

const store = process.env.NODE_ENV === 'production' ? prodStore() : devStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router basename={BASE_NAME}>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/home" component={(props: any) => <Home {...props} />} />
                        <Route path="/login" exact component={(props: any) => <Login {...props} />} />
                        {/*  有权限跳转,不满足则/login */}
                        <Redirect to="/home" />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default App;
