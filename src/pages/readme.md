## ts类型

```JavaScript
// func 
// v16.7起，由于hooks的加入，函数式组件也可以使用state，所以这个命名不准确。新的react声明文件里，也定义了React.FC类型^_^
const List: React.SFC<IProps> = props => null

// class 组件
class Component<P, S> {
        constructor(props: Readonly<P>);
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
            callback?: () => void
        ): void;
        forceUpdate(callBack?: () => void): void;
        render(): ReactNode;
        readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
        state: Readonly<S>;
        context: any;
        refs: {
            [key: string]: ReactInstance
        };
    }


// 实现
class App extends Component<{}, { a: number, b: number }> {
   
    readonly state = {
        a: 1,
        b: 2
    }
    
    //readonly state = {} as IState,断言全部为一个值
 
    componentDidMount() {
        this.state.a // ok: 1
 
        //正确的使用了 ts 泛型指示了 state 以后就会有正确的提示
        // error: '{ c: number }' is not assignable to parameter of type '{ a: number, b: number }'
        this.setState({
            c: 3
        })；
    }
    // ...
}


// react-router-dom 类型约束
import { RouteComponentProps } from 'react-router-dom';
 
const App = withRouter(class extends Component<RouteComponentProps> {
    // ...
});
 
// 以下调用是ok的
<App />



// 方法二

// 方法二
@withRouter
class App extends Component<{}> {
    get injected() {
        return this.props as RouteComponentProps
    }
 
    public componentDidMount() {
        this.injected.history.push('/');
    }
    // ...



```
