import React from 'react';
import Layout from '../../components/Layout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Routes from '../../routes';

export interface IProps extends RouteComponentProps {
    [key: string]: any;
}

// 视图区域显示  index->app(跨区域/home , /login)->layout->  路由控制区域（权限区域跳转路由）
class Home extends React.Component<IProps> {
    render() {
        return <Layout>{Routes(true)}</Layout>;
    }
}

export default withRouter(Home); // 注入history等
