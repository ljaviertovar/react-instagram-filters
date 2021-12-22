import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import thumbnail from '../assets/img/img1.jpg'

import '../styles/instagram.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FiltersStyles = styled.div`
    width: 70%;
    margin: auto;
    .slick-prev:before{
        color: var(--blue-1);
    } 
    .slick-next:before {
        color: var(--blue-1);
    }
`
const Filters = ({ filterClass, setFilterClass, imgRef }) => {

    useEffect(() => {
        const divImg = imgRef.current
        divImg.style.filter = ''
    }, [filterClass])

    const filters = [
        {
            name: 'Aden',
            class: 'filter-aden'
        },
        {
            name: 'Amaro',
            class: 'filter-amaro'
        },
        {
            name: 'Ashby',
            class: 'filter-ashby'
        },
        {
            name: 'Brannan',
            class: 'filter-brannan'
        },
        {
            name: 'Brooklyn',
            class: 'filter-brooklyn'
        },
        {
            name: 'Charmes',
            class: 'filter-charmes'
        },
        {
            name: 'Clarendon',
            class: 'filter-clarendon'
        },
        {
            name: 'Crema',
            class: 'filter-crema'
        },
        {
            name: 'Dogpatch',
            class: 'filter-dogpatch'
        },
        {
            name: 'Earlybird',
            class: 'filter-earlybird'
        },
        {
            name: 'Gingham',
            class: 'filter-gingham'
        },
        {
            name: 'Ginza',
            class: 'filter-ginza'
        },
        {
            name: 'Hafe',
            class: 'filter-hafe'
        },
        {
            name: 'Helena',
            class: 'filter-helena'
        },
        {
            name: 'Hudson',
            class: 'filter-Inkwell'
        },
        {
            name: 'Inkwell',
            class: 'filter-inkwell'
        },
        {
            name: 'Kelvin',
            class: 'filter-kelvin'
        },
        {
            name: 'Lark',
            class: 'filter-lark'
        },
        {
            name: 'Lo-fi',
            class: 'filter-lofi'
        },
        {
            name: 'Ludwing',
            class: 'filter-ludwing'
        },
        {
            name: 'Maven',
            class: 'filter-maven'
        },
        {
            name: 'Mayfair',
            class: 'filter-mayfair'
        },
        {
            name: 'Moon',
            class: 'filter-moon'
        },
        {
            name: 'Nashville',
            class: 'filter-nashvile'
        },
        {
            name: 'Perpetua',
            class: 'filter-perpetua'
        },
        {
            name: 'Poprocket',
            class: 'filter-poprocket'
        },
        {
            name: 'Reyes',
            class: 'filter-reyes'
        },
        {
            name: 'Rise',
            class: 'filter-rise'
        },
        {
            name: 'Sierra',
            class: 'filter-sierra'
        },
        {
            name: 'Skyline',
            class: 'filter-skyline'
        },
        {
            name: 'Slumber',
            class: 'filter-slumber'
        },
        {
            name: 'Stinson',
            class: 'filter-stinson'
        },
        {
            name: 'Sutro',
            class: 'filter-sutro'
        },
        {
            name: 'Toaster',
            class: 'filter-toaster'
        },
        {
            name: 'Valencia',
            class: 'filter-valencia'
        },
        {
            name: 'Vesper',
            class: 'filter-vesper'
        },
        {
            name: 'Walden',
            class: 'filter-walden'
        },
        {
            name: 'Willow',
            class: 'filter-willow'
        },
        {
            name: 'X-Pro II',
            class: 'filter-xpro-ii'
        },
    ]

    const settings = {
        dots: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    return (
        <FiltersStyles>
            <Slider {...settings}>
                {
                    filters.map((filter, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={`filter-item ${filterClass === filter.class ? 'filter-item--selected' : ''}`}
                                    onClick={() => setFilterClass(filter.class)}
                                >
                                    <div className='filter-item__img'>
                                        <img
                                            className={filter.class}
                                            src={thumbnail}
                                            alt={filter.name}
                                        />
                                    </div>
                                    <div className='filter-item__name'>
                                        <p><strong>{filter.name}</strong></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </FiltersStyles>
    )
}

export default Filters
