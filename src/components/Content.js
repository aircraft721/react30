import React, {Component} from 'react';
import ActivityItem from './ActivityItem';

export default class Content extends Component {
    render(){
        const {activities} = this.props;
        return(
            <div className='content'>
                {activities.map((activity,index)=>{
                    return(
                        <ActivityItem key={index} activity={activity}/>
                    );
                })}
            </div>
        );
    }
}

