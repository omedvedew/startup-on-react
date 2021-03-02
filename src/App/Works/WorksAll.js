import React from 'react';

import worksItems from './worksItems';
import WorksItem from './WorksItem';

const WorksAll = () => {
    return (
        <>
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
                                id={id}
                            />
                        </div>
                    )
                )
            }
        </>
    )
}

export default WorksAll;