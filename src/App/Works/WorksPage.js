import React from 'react';
import worksItems, { getWorksObj } from './worksItems';

const WorksPage = ({
    match,
    worksObj = getWorksObj(worksItems),
}) => {
    const id = match.params.id;
    return (
        <>
            <div className="works-page">
                <div className={`works-page-image ${id}`}></div>
                <div className="works-page-content">
                    <div className="wpc-title">{worksObj[id].title}</div>
                    <div className="wpc-category">{worksObj[id].category}</div>
                    <div className="wpc-description">{worksObj[id].description}</div>
                </div>
            </div>
        </>
    )
}

export default WorksPage;