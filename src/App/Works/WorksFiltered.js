import React from 'react';

import worksItems from './worksItems';
import WorksItem from './WorksItem';

const WorksFiltered = (filter) => {
    return (
        <>
            {
                worksItems.filter(byCategory => byCategory.category == filter.filter).map(({
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
        </>
    )
}

export default WorksFiltered;