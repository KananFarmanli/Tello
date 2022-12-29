import React from 'react';

const Button = ({children, className}) => {


    let classFull=className + " rounded-lg flex items-center justify-center "
    return (
        <div className={classFull}>
            {children}
        </div>
    );
};

export default Button;