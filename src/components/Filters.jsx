import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import thumbnail from '../assets/img/img1.jpg'

import '../styles/instagram.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FiltersStyles = styled.div`
    width: 80%;
    margin: auto;
    .filter-item {
        cursor: pointer;
        width: 140px;
        margin: auto;
        padding: 10px;
        border-radius: 6px;
    }
    .filter-item__img {
        width: 120px;
        height: 120px;
        margin: auto;
        img {
            margin-top: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
    }
    .filter-item__name {
        p {
            font-size: 1.125rem;
            text-align: center;
            padding: 0.2rem;
            margin-top: 0.4rem
        }
    }
    .filter-item--selected {
        background-color: #181B22;
    }
    .slick-prev:before{
        color: #4CC9F0;
    } 
    .slick-next:before {
        color: #4CC9F0;
    }
`

const Filters = ({ filterClass, setFilterClass }) => {

    const filters = [
        {
            name: 'Normal',
            class: 'filter-normal'
        },
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
                    filters.map(filter => {
                        return (
                            <div>
                                <div
                                    className={`filter-item ${filterClass == filter.class ? 'filter-item--selected' : ''}`}
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
