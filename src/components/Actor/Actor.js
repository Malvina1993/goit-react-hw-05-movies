import React from 'react';

import css from './Actor.module.css'

const Actor = ({ portret, name, character }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x350'
    return (
        <div className={css.artistCard}>
            <img className={ css.artistPoster} src={portret?`https://image.tmdb.org/t/p/w500/${portret}`:defaultImg} alt={name} />
            <div>
                <b>{name}</b>
                <p>Caracter: { character}</p>
            </div>
        </div>
    )
}

export default Actor;