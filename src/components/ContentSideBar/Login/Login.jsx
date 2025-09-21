import InputCommon from '@components/InputCommon/InputCommon';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn, getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/StoreProvider';

const Login = () => {
    const { container, title, boxRememberMe, lostPw, boxButton } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen, handleGetListProducCart } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);

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
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: async values => {
            if (isLoading) return;
            const { email: username, password } = values;
            setIsLoading(true);

            if (isRegister) {
                await register({ username, password })
                    .then(res => {
                        console.log(res);
                        toast.success(res.data.message);
                        setIsLoading(false);
                        setIsRegister(false);
                    })
                    .catch(err => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                await signIn({ username, password })
                    .then(res => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;

                        setUserId(id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        toast.success('Sign in successfully!');
                        handleGetListProducCart(id, 'cart');
                        setIsOpen(false);
                    })
                    .catch(err => {
                        setIsLoading(false);
                        if (err.message) {
                            toast.error(
                                err?.message ||
                                    'Thông tin đăng nhập không chính xác.'
                            );
                        } else {
                            toast.error(
                                'Lỗi mạng hoặc server không phản hồi. Vui lòng thử lại!'
                            );
                        }
                    });
            }
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
                        content={
                            isLoading
                                ? 'LOADING...'
                                : isRegister
                                ? 'REGISTER'
                                : 'LOGIN'
                        }
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
