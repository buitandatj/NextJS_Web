import React from 'react';
import { ButtonProps } from 'react-scroll/modules/components/Button';

const Button = (props: { title: string; BtnStyles: React.FC<ButtonProps>; }) => {
    const title = props.title
    const BtnStyles = props.BtnStyles
    return (
        <BtnStyles to={''}>{title}</BtnStyles>
    );
};

export default Button;