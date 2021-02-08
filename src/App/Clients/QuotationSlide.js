import React from 'react';

const QuotationSlide = (
    {
        author,
        text
    }
) => {
    return (
        <div className="quotation-slide">
            <div className="clients-quotation">{text}</div>
            <div className="clients-quotation-author">{author}</div>
        </div>
    )
}

export default QuotationSlide;