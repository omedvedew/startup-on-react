import React from 'react';
import { Link, Route } from 'react-router-dom';

import PropTypes from 'prop-types';
import worksItems from './worksItems';
import WorksPage from './WorksPage';

const WorksItem = (
    {
        image,
        title,
        category,
        id,
    }
) => {
    return (
        <div className={image}>
            <div className="works-item-overlay">
                <h3 className="works-item-title">{title}</h3>
                <p className="works-item-category-text">{category}</p>
                <Link to={`/work/${id}`} className="works-item-btn">VIEW</Link>
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