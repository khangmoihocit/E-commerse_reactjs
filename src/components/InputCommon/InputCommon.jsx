import React, { useState } from 'react';
import styles from './styles.module.scss';
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi';

//isRequired = true : thêm dấu '*' trước label
const InputCommon = ({ label, type, isRequired = false, ...props }) => {
    const { container, labelInput, boxInput, boxIcon, errorMessage } = styles;
    const [showPassword, setShowPassword] = useState(false);
    const { formik, id } = props;

    const isPassword = type === 'password';
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const isError = formik.touched[id] && formik.errors[id];
    const messageError = formik.errors[id];

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </div>
                )}
                {isError && <div className={errorMessage}>{messageError}</div>}
            </div>
        </div>
    );
};

export default InputCommon;
