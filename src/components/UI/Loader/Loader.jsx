import React from 'react';
import cl from './Loader.module.css';

const Loader = (marginTop="50") => {
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:`${marginTop}px`}}>
            <div className={cl.loader}></div>
        </div>
    );
};

export default Loader;