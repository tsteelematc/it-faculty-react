import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <>
            <div
                className='card mb-3'
            >
                <h5
                className='card-header'
                >
                    {props.title}
                </h5>
                <div
                className='card-body'
                >
                    {props.items.map(x => <p>{x}</p>)}
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired
    , items: PropTypes.array.isRequired
};

export default Card;