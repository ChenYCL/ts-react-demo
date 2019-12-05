import React from 'react';
import Layout from '../../components/Layout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Routes from '../../routes';
import { connect } from 'react-redux';

const mapStateToProps = (state: { [key: string]: any }) => ({
    Login: state.LoginReducer,
});
// 视图区域显示  index->app(跨区域/home , /login)->layout->  路由控制区域（权限区域跳转路由）
@(connect(mapStateToProps) as any)
class Home extends React.Component<IProps> {
    render() {
        const {
            Login: { Authorized },
        } = this.props;
        return <Layout>{Routes(Authorized)}</Layout>;
    }
}

export default withRouter(Home); // 注入history等
