import InputCommon from '@components/InputCommon/InputCommon';
import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const Login = () => {
    const {container, title, boxRememberMe, lostPw, boxButton} = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Email' type='text' isRequired={true}/>
            <InputCommon label='Password' type='password' isRequired={true}/>

            <div className={boxRememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>

            <div className={boxButton}>
                <Button content={'LOGIN'}/>
            </div>

            <div className={lostPw}>Lost your password?</div>
        </div>
    );
};

export default Login;