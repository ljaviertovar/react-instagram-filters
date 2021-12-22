import React, { useState } from 'react'
import Slider, { SliderTooltip } from 'rc-slider';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';

const CustomFilterOptionsStyles = styled.div`
    .customFilters-container {
        width: 400px;
        margin-right: 100px;
    }
    .customFilters-item {
        margin: 3rem 0; 
        display: flex;
        gap: 1rem;
        align-content: center;
        p {
            width: 160px;
        }
    }
`

const CustomFilterOptions = ({ imgRef }) => {

    const [contrast, setContrast] = useState(100)
    const [brightness, setBrightness] = useState(100)
    const [saturate, setSaturate] = useState(100)
    const [sepia, setSepia] = useState(0)
    const [gray, setGray] = useState(0)

    const { Handle } = Slider;

    const handle = props => {
        const { value, dragging, index, ...restProps } = props

        return (
            <SliderTooltip
                prefixCls="rc-slider-tooltip"
                overlay={`${value} %`}
                visible={true}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </SliderTooltip>
        )
    }

    const onChangeContrast = value => {
        setContrast(value)
        setCustomFilterClass()
    }

    const onChangeBrightness = value => {
        setBrightness(value)
        setCustomFilterClass()
    }

    const onChangeSaturate = value => {
        setSaturate(value)
        setCustomFilterClass()
    }
    const onChangeSepia = value => {
        setSepia(value)
        setCustomFilterClass()
    }
    const onChangeGray = value => {
        setGray(value)
        setCustomFilterClass()
    }

    const setCustomFilterClass = () => {
        const style = `contrast(${contrast}%) brightness(${brightness}%) saturate(${saturate}%) sepia(${sepia}%) grayScale(${gray}%)`

        const divImg = imgRef.current
        divImg.style.filter = style
    }

    return (
        <CustomFilterOptionsStyles>
            <div className='customFilters-container'>
                <div className='customFilters-item'>
                    <p>Contrast</p>
                    <Slider
                        step={1}
                        min={0}
                        max={200}
                        defaultValue={contrast}
                        handle={handle}
                        onChange={onChangeContrast}
                    />
                </div>
                <div className='customFilters-item'>
                    <p>Brightness</p>
                    <Slider
                        step={1}
                        min={0}
                        max={200}
                        defaultValue={brightness}
                        handle={handle}
                        onChange={onChangeBrightness}
                    />
                </div>
                <div className='customFilters-item'>
                    <p>Saturation</p>
                    <Slider
                        step={1}
                        min={0}
                        max={200}
                        defaultValue={saturate}
                        handle={handle}
                        onChange={onChangeSaturate}
                    />
                </div>
                <div className='customFilters-item'>
                    <p>Sepia</p>
                    <Slider
                        step={1}
                        min={0}
                        max={100}
                        defaultValue={sepia}
                        handle={handle}
                        onChange={onChangeSepia}
                    />
                </div>
                <div className='customFilters-item'>
                    <p>Gray Scale</p>
                    <Slider
                        step={1}
                        min={0}
                        max={100}
                        defaultValue={gray}
                        handle={handle}
                        onChange={onChangeGray}
                    />
                </div>
            </div>
        </CustomFilterOptionsStyles>
    )
}

export default CustomFilterOptions
