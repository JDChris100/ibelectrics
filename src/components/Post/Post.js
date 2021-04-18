import React from 'react';

import './Post.css';

export default function Post(props) {
    const {post} = props;
    let images = [...post.images];
    const primary = images.shift();
    console.log(images);
    return (
        <div className="Post">
            <div className="Post-Images">
                <div className="Post-Images-primary">
                    <img src={primary} alt=""/>
                </div>
                <div className="Post-Images-secondary">
                    {images.map(image => <img src={image} alt=""/>)}
                </div>
            </div>
            <div className="Content">
                <p>{post.text}</p>
            </div>
        </div>
    );
}