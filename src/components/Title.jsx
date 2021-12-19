import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
    h1 {
        width: fit-content;
        margin: auto;
        text-align: center;
        padding: 2rem;
        color: #F1D8C4;
        background: #F1D8C4;
        background: -webkit-linear-gradient(to left, #F1D8C4 0%, #4CC9F0 50%, #F1D8C4 100%);
        background: -moz-linear-gradient(to left, #F1D8C4 0%, #4CC9F0 50%, #F1D8C4 100%);
        background: linear-gradient(to left, #F1D8C4 0%, #4CC9F0 50%, #F1D8C4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
