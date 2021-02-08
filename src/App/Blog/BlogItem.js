import React from 'react';

const BlogItem = (
    {
        image,
        alt,
        day,
        month,
        title,
        author,
        category,
        text,
    }
) => {
    return (
        <div className="blog-item">
            <div className="blog-item-img">
                <img src={image} alt={alt}></img>
            </div>
            <div className="blog-item-description">
                <div className="blog-item-title-row">
                    <div className="blog-item-date">
                        <div className="blog-item-day">{day}</div>
                        <div className="blog-item-month">{month}</div>
                    </div>
                    <div className="blog-item-title-container">
                        <div className="blog-item-title">{title}</div>
                        <div className="blog-item-title-description">
                            By 
                            <span className="blog-item-author"> {author} </span>
                            in <span className="blog-item-category">{category}</span>
                        </div>
                    </div>
                </div>
                <div className="blog-item-text">{text}</div>
                <div className="blog-item-btn">READ MORE</div>
            </div>
        </div>
    )
}

export default BlogItem;