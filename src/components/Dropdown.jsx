import React, { useState } from 'react'
import { BiDownArrow } from 'react-icons/bi'
import '../styles/App.css';

const Dropdown = ({ selected, setSelected }) => {

    const [isActive, setIsActive] = useState(false)

    const filters = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];

    return (
        <div className='dropdown'>
            <div className='dropdown__btn' onClick={() => setIsActive(!isActive)}>
                {selected}
                <span><BiDownArrow/></span>
            </div>
            {isActive &&
                <div className='dropdown__content'>
                    {filters &&
                        filters.map((filter, index) => {

                            return (
                                <div
                                    key={index}
                                    onClick={(e) => {
                                        setSelected(e.target.textContent)
                                        setIsActive(false)
                                    }}
                                    className='dropdown__item'
                                >
                                    {filter}
                                </div>
                            )

                        })
                    }
                </div>
            }
        </div>
    )
}

export default Dropdown
