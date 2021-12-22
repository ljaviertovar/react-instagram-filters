import React from 'react'
import styled from 'styled-components'

import { MdFilterVintage } from 'react-icons/md'

const TitleStyles = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: fit-content;
        margin: auto;
        text-align: center;
        padding: 2rem;
        color: var(--crema-1);
        background: var(--crema-1);
        background: -webkit-linear-gradient(to left, var(--crema-1) 0%, var(--blue-1) 50%, var(--crema-1) 100%);
        background: -moz-linear-gradient(to left, var(--crema-1) 0%, var(--blue-1) 50%, var(--crema-1) 100%);
        background: linear-gradient(to left, var(--crema-1) 0%, var(--blue-1) 50%, var(--crema-1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        span {
            svg {
                width: auto;
            }
        }
    }

`

const Title = () => {
    return (
        <TitleStyles>
            <h1 className='title'><span><MdFilterVintage/></span>Insta-Filters</h1>
        </TitleStyles>
    )
}

export default Title
