import React from 'react';

const Button = (props: { title: string; BtnStyles: any }) => {
    const title = props.title
    const BtnStyles = props.BtnStyles
    return (
        <BtnStyles>{title}</BtnStyles>
    );
};

export default Button;