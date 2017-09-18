import React from 'react';

class ContentItem extends React.Component {
    render(){
        const content1 = this.props.content;
        return(
            <div className='item' key={content1.user.name}>
                <div className='avatar'>
                    <img alt={content1.text} src={content1.user.avatar} />
                    {content1.user.name}
                </div>
                <div className='time-wrapper'>
                    <span className='time'>
                    {content1.timestamp}
                    </span>
                    <p>{content1.text}</p>
                </div>
                
                <div className='commentCount'>
                    {content1.comments.length}
                </div>
            </div>
        );
    }
}

export default ContentItem;