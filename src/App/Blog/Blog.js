import React from 'react';

import BlogItem from './BlogItem';
import blogItems from './blogItems';

const Blog = () => {
    return (
        <div className="blog-container" id="blog-a">
            <div className="container-title">RECENT BLOG POSTS</div>
            <div className="container-dashes"></div>
            <p className="container-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>


            <div className="blog-items-container">

                {
                    blogItems.map(({
                        id,
                        image,
                        alt,
                        day,
                        month,
                        title,
                        author,
                        category,
                        text
                    }) => (
                        <div key={id}>
                            <BlogItem
                                image={image}
                                alt={alt}
                                day={day}
                                month={month}
                                title={title}
                                author={author}
                                category={category}
                                text={text}
                            />
                        </div>
                    ))
                }

            </div>
        
        </div>
    )
}

export default Blog;