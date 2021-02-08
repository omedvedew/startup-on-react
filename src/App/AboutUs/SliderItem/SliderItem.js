import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = (
    {
        name,
        image,
        position,
    }
) => {

    return (
        <div className="slider-person">
            <div className={image}>
                <div className="slider-item-img-overlay">
                    <button className="slider-person-social-btn s-p-s-b-1"></button>
                    <button className="slider-person-social-btn s-p-s-b-2"></button>
                    <button className="slider-person-social-btn s-p-s-b-3"></button>
                    <button className="slider-person-social-btn s-p-s-b-4"></button>
                </div>
            </div>
            <div className="slider-person-name">{name}</div>
            <div className="slider-person-position">{position}</div>
        </div>
    )
}

SliderItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
}

SliderItem.defaultProps = {
    image: "slider-person-image s-p-i-5",
    name: "UNKNOWN DEER",
    position: "just some stranger",
};

export default SliderItem;