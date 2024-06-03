"use client";

import expandIcon from "../assets/Expand_down.svg";
import { useState } from "react";

const Dropdown = ({ label, options }) => {
    const [ open, setOpen ] = useState(false);
    
    return(
        <div className="relative">
            <div 
                className={`inline-flex flex-wrap gap-[10px] px-6 py-3 cursor-pointer ${ open ? 'border-t border-l border-r rounded-t-xl' : 'border rounded-xl' } border-card-stroke`}
                onClick={ () => setOpen(prev => !prev) }
            >
                <p className="text-white-font text-sm font-bold">{ label }</p>
                <img 
                    src={ expandIcon.src }
                    width={ 24 }
                    height={ 24 }
                />
            </div>
            <div 
                className={ open ? 
                        'absolute left-0 z-10  w-full bg-super-gray rounded-b-xl border-b border-l border-r border-card-stroke' : 
                        'hidden' 
                    }
            >
                {
                    options.map(option => (
                        <p 
                            key={ option.id }
                            className="text-white-font font-medium px-6 py-2"
                        >
                            { option.label }
                        </p>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Dropdown;