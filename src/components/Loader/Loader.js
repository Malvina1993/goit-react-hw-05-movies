import { Puff } from 'react-loader-spinner';
import React from 'react';



const Loader = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#afca5a"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
};

export default Loader;