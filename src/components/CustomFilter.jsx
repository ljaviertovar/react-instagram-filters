import React, { useEffect } from 'react'

import thumbnail from '../assets/img/img1.jpg'

const CustomFilter = ({ filterClass, setFilterClass, setOpenCustom }) => {

    const handleCustomFilter = () => {
        setOpenCustom(true);
        setFilterClass('filter-custom')
    }

    useEffect(() => {
        if (filterClass !== 'filter-custom') {
            setOpenCustom(false)
        }

    }, [filterClass, setOpenCustom])

    return (
        <div>
            <div
                className={`filter-item ${filterClass === 'filter-custom' ? 'filter-item--selected' : ''}`}
                onClick={() => handleCustomFilter()}
            >
                <div className='filter-item__img'>
                    <img
                        src={thumbnail}
                        alt='custom'
                    />
                </div>
                <div className='filter-item__name'>
                    <p><strong>Custom</strong></p>
                </div>
            </div>
        </div>
    )
}

export default CustomFilter
