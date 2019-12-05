import React from 'react';
import useForm from 'react-hook-form';
import './index.scss';

type FormData = {
    username: string | number;
    password: string | number;
};

export default function App() {
    const { register, setValue, handleSubmit, watch, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ username, password }) => {
        console.log(username, password);
    });

    // console.log(watch('username'));

    return (
        <div className="loginForm">
            <form onSubmit={onSubmit}>
                <label>账号</label>
                <input name="username" ref={register({ required: true })} />
                {errors.username && <p>请输入账号</p>}
                <label>密码</label>
                <input type="password" name="password" ref={register({ required: true })} />
                {errors.password && <p>请输入密码</p>}
                <button type="submit">登录</button>
            </form>
        </div>
    );
}
