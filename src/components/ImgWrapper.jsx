import React from 'react'
import styled from 'styled-components'
import myImg from '../assets/img/img1.jpg'

const ImgWrapperStyles = styled.div`
    width: fit-content;
    height: 360px;
    margin: auto;
    margin-bottom: 4rem;
    box-shadow: 0 8px 15px rgb(0 0 0 / 0.8);
    border: 1px solid rgb(0 0 0 / 0.8);
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 6px;
    }

`

const ImgWrapper = ({ filterClass }) => {
    return (
        <ImgWrapperStyles>
            <img
                className={filterClass}
                src={myImg}
                alt='My image edited'
            />
        </ImgWrapperStyles>
    )
}

export default ImgWrapper
