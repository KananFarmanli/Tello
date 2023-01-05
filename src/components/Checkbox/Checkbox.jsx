import React from 'react';

const Checkbox = ({text, id, placeholder, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center">
        <input  className="checkbox appearance-none" id={`check${id}`} type="checkbox" placeholder={placeholder} />
        <label className="checkbox__label flex text-primary text-sm" htmlFor={`check${id}`} >
            <div className="checkbox__square block"></div>{text}
        </label>
    </div>
    );
};

export default Checkbox;