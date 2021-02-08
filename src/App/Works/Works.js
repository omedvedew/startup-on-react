import React from 'react';

import worksItems from './worksItems';
import WorksItem from './WorksItem';

const Works = () => {
    return (
        <div className="works-container" id="works-a">
            <div className="container-title">LATEST WORKS</div>
            <div className="container-dashes"></div>
            <div className="container-text">
                <p className="works-category-active">All</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Development</p>
                <p>Strategy</p>
            </div>
            <div className="works-items-container">
                
                {
                    worksItems.map(({
                        id,
                        image,
                        title,
                        category,
                    }) => (
                            <div key={id}>
                                <WorksItem
                                    title={title}
                                    image={image}
                                    category={category}
                                />
                            </div>
                        )
                    )
                }

            </div>

        </div>
    )
}

export default Works;