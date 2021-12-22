import React from 'react'
import styled from 'styled-components'

import CustomFilterOptions from './CustomFilterOptions';

import myImg from '../assets/img/img1.jpg'

const ImgWrapperStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .img-container {
        width: fit-content;
        max-width: 80%;
        height: 360px;
        margin: auto;
        margin-bottom: 4rem;
        box-shadow: 0 8px 15px var(--deep-dark);
        border: 1px solid var(--deep-dark);
        border-radius: 6px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 6px;
        }
    }
`

const ImgWrapper = ({ filterClass, openCustom, imgRef }) => {

    return (
        <ImgWrapperStyles>
            <figure className='img-container'>
                <img
                    className={filterClass}
                    ref={imgRef}
                    src={myImg}
                    alt=''
                />
            </figure>
            {openCustom &&
                <CustomFilterOptions imgRef={imgRef}/>
            }
        </ImgWrapperStyles>
    )
}

export default ImgWrapper
