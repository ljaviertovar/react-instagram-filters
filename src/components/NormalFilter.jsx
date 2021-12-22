import React from 'react'

import thumbnail from '../assets/img/img1.jpg'

const NormalFilter = ({filterClass, setFilterClass}) => {
    return (
        <div>
            <div
                className={`filter-item ${filterClass === 'filter-normal' ? 'filter-item--selected' : ''}`}
                onClick={() => setFilterClass('filter-normal')}
            >
                <div className='filter-item__img'>
                    <img
                        src={thumbnail}
                        alt='Normal'
                    />
                </div>
                <div className='filter-item__name'>
                    <p><strong>Normal</strong></p>
                </div>
            </div>
        </div>
    )
}

export default NormalFilter
