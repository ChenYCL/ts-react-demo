import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BASE_NAME from './config/history';
import './App.scss';
import TestPage from './pages/TestPage';

const App: React.FC = () => {
    return (
        <Router basename={BASE_NAME}>
            <Switch>
                <Route path="/" exact={true} component={TestPage}></Route>
                <Route path="/a" render={() => <div>22</div>}></Route>
                <Route path="/b" render={() => <div>33</div>}></Route>
                <Route render={() => <div>未找到</div>}></Route>
            </Switch>
        </Router>
    );
};

export default App;
