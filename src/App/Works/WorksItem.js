import React from 'react';
import PropTypes from 'prop-types';
import worksItems from './worksItems';

const WorksItem = (
    {
        image,
        title,
        category,
    }
) => {
    return (
        <div className={image}>
            <div className="works-item-overlay">
                <h3 className="works-item-title">{title}</h3>
                <p className="works-item-category-text">{category}</p>
                <button className="works-item-btn">VIEW</button>
            </div>
        </div>
    )
}

WorksItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default WorksItem;