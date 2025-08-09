import React from 'react';

const Button = ({ children, handler }) => {
    return (
        <div>
            <button onClick={handler}>{children}</button>
        </div>
    );
};

export default Button;