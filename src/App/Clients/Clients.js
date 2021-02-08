import React from 'react';

import quotations from './quotations'
import QuotationSlide from './QuotationSlide';

const Clients = () => {
    return (
        <div className="clients-container" id="clients-a">
            <div className="clients-items-container">
                <div className="clients-item c-i-1"></div>
                <div className="clients-item c-i-2"></div>
                <div className="clients-item c-i-3"></div>
                <div className="clients-item c-i-4"></div>
                <div className="clients-item c-i-5"></div>
            </div>
            <div className="clients-quotations-slider">

                {
                    quotations.map(({
                        id,
                        author,
                        text
                    }) => (
                            <div key={id}>
                                <QuotationSlide
                                    author={author}
                                    text={text}
                                />
                            </div>
                        )
                    )
                }

            </div>
        </div>
    )
}

export default Clients;