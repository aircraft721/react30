import React from 'react';

const Content = (props) => {
    const propsContent = props.content;
    return (
        <div className='content'>
        {propsContent.map((content,index)=>{
            return(
                <div className='item' key={content.user.name}>
                    <div className='avatar'>
                        <img alt={content.text} src={content.user.avatar} />
                        {content.user.name}
                    </div>
                    <div className='time-wrapper'>
                        <span className='time'>
                        {content.timestamp}
                        </span>
                        <p>{content.text}</p>
                    </div>
                    
                    <div className='commentCount'>
                        {content.comments.length}
                    </div>
                </div>
            );
        })}
            
        </div>
    );
}




export default Content;