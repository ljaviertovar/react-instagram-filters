import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
    h1 {
        margin: auto;
        text-align: center;
        padding: 2rem;
        color: white;
        color: #fff;
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* Green glow */
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
    }
`

const Title = () => {
    return (
        <TitleStyles>
            <h1 className='title'>Insta-Filters</h1>
        </TitleStyles>
    )
}

export default Title
