import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    return <div className='card-container'>
        <img 
            alt='friend' 
            src={`https://robohash.org/${props.friend.id}?set=set2&size=180x180`}
        />
        <h1>{props.friend.name}</h1>
        <p>{props.friend.email}</p>
    </div>
}