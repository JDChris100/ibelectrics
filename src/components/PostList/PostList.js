import React, {useState, useEffect} from 'react';
import {DataStore} from '@aws-amplify/datastore';
import {Posts} from '../../models';
import Post from "../Post/Post";

import './PostList.css';

export default function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await DataStore.query(Posts);
        }

        fetchData().then(data => {
            setPosts(data);
            console.log(data);
        });
    }, []);

    return (
        <div className="PostList">
            {
                posts.map(post => <Post post={post}/>)
            }
        </div>
    );
}