import React from 'react';
import cl from './Loader.module.css';

const Loader = (marginTop="50") => {
    return (
        <div className={cl.loader}></div>
    );
};

export default Loader;