import React from 'react';

const Actor = ({ portret, name, character }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x350'
    return (
        <div>
            <img src={portret?`https://image.tmdb.org/t/p/w500/${portret}`:defaultImg} alt={name} />
            <b>{name}</b>
            <p>{ character}</p>
        </div>
    )
}

export default Actor;