import React, { useState } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import ImgWrapper from '../components/ImgWrapper'
import Filters from '../components/Filters'

import '../styles/App.css';

const HomeStyles = styled.div`
    background-color: #262626;
    color: #f5f3f4;
    width: 100%;
    height: 100vh
`

const Home = () => {

    const [filterClass, setFilterClass] = useState('filter-normal')

    return (
        <HomeStyles>
            <Title />
            <ImgWrapper filterClass={filterClass}/>
            <Filters filterClass={filterClass} setFilterClass={setFilterClass}/>
        </HomeStyles>
    )
}

export default Home
