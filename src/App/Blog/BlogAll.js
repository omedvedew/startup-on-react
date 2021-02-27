import React from 'react';

import BlogItem from './BlogItem';
import blogItems from './blogItems';

const BlogAll = () => {
    return (
        <>
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
        </>
    )
}

export default BlogAll;