import InputCommon from '@components/InputCommon/InputCommon';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const { container, title, boxRememberMe, lostPw, boxButton } = styles;
    const [isRegister, setIsRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfmpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: value => {
            console.log(value);
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired={true}
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired={true}
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label='Confirm password'
                        type='password'
                        isRequired={true}
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <div className={boxButton}>
                    <Button
                        content={isRegister ? 'REGISTER' : 'LOGIN'}
                        type='submit'
                    />
                </div>
            </form>
            <div className={boxButton}>
                <Button
                    content={
                        isRegister
                            ? 'Already have an accounr?'
                            : "Don't have an acount"
                    }
                    type='submit'
                    isPrimary={false}
                    style={{ marginTop: '10px' }}
                    onClick={handleToggle}
                />
            </div>

            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
};

export default Login;
