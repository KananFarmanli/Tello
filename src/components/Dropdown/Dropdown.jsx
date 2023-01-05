import React from 'react';

function Dropdown({text, count, dropdownValue, children, onClick}) {
    return (
        <div className="flex flex-col">
        <div className="flex justify-between items-center border-b broder-b-muted-dark py-2 pl-3 w-[280px] transition-all">
            <p className="font-medium text-sm text-primary">{text} <span className="text-xs text-muted-dark">{`(${count})`}</span></p>
            <div onClick={onClick} className="w-6 h-6 flex  justify-center items-center relative transition-all">
                <div className="w-4 h-[2px] bg-primary rounded-lg "></div>
                <div  className={`w-4 h-[2px] bg-primary rounded-lg absolute transition-all ${dropdownValue && "rotate-90"}`}></div>
            </div>
        </div>
       <form className={`py-8 px-3 space-y-3 ${!dropdownValue && "hidden" }`}>
        {children}
        </form>


    </div>


    );
}

export default Dropdown;