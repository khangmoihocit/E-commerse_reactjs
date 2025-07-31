import React, { useState } from 'react';
import styles from './styles.module.scss';
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";

const InputCommon = ({label, type, isRequired = false}) => {
    const {container, labelInput, boxInput, boxIcon} = styles;

    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword);
    }

    return (
        <div className={container}>
            <div className={labelInput}>{label} {isRequired && <span>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputCommon;