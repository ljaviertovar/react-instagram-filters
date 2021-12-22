import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import ImgWrapper from '../components/ImgWrapper'
import Filters from '../components/Filters'

import NormalFilter from '../components/NormalFilter'
import CustomFilter from '../components/CustomFilter'

const HomeStyles = styled.div`
    background-color: #2B2F38;
    color: #F1D8C4;
    width: 100%;
    height: 100vh;
    .filters-container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
`

const Home = () => {

    const [filterClass, setFilterClass] = useState('filter-normal')
    const [openCustom, setOpenCustom] = useState(false)

    const imgRef = useRef(null)

    return (
        <HomeStyles>
            <Title />
            <ImgWrapper
                filterClass={filterClass}
                openCustom={openCustom}
                imgRef={imgRef}
            />
            <div className='filters-container'>
                <NormalFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                />
                <Filters
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    imgRef={imgRef}
                />
                <CustomFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    setOpenCustom={setOpenCustom}
                />
            </div>
        </HomeStyles>
    )
}

export default Home
