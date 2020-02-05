import React from 'react';
import { Card } from '../card/card-list.component';

import './friend-list.styles.css';

export const FriendList = (props) => {
    return <div className='friend-list'>
        {props.friends.map(friend => (
            <Card key={friend.id} friend={friend}/>
        ))}
    </div>
}