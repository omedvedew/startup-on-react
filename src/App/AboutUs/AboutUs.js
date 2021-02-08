import React from 'react';

import SliderItem from './SliderItem/SliderItem';
import sliderItems from './SliderItem/sliderItems.js';

const AboutUs = () => {
    return (
        <div className="about-us-container" id="about-a">
            <div className="container-title">ABOUT US</div>
            <div className="container-dashes"></div>
            <p className="container-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <div className="container-additional-text">
                <p className="container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.</p>
                <p className="container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.</p>
            </div>

            
            <div className="about-us-slider-container">

                {
                    sliderItems.map(({
                        id,
                        name,
                        image,
                        position,
                    }) => (
                            <div key={id}>
                                <SliderItem
                                    name={name}
                                    image={image}
                                    position={position}
                                />
                            </div>
                        )
                    )
                }

            </div>

        </div>
    )
}

export default AboutUs;