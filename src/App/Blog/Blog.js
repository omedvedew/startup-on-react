import React from 'react';
import { Route } from 'react-router-dom';
import BlogAll from './BlogAll';

const Blog = () => {
    return (
        <div className="blog-container" id="blog-a">
            <div className="container-title">RECENT BLOG POSTS</div>
            <div className="container-dashes"></div>
            <p className="container-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>


            <div className="blog-items-container">

                <BlogAll/>

            </div>
        
        </div>
    )
}

export default Blog;