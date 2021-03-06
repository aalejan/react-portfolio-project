import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    background-size: auto 100%;
    background-position: center;
    height: 15vh;
    border-radius: 50%;
    width: 12vw;
    margin-top: 30px;
`

const Image = ({source}) => {
    return (
        <div>
            <Img src={source}/>
        </div>
    )
}

export default Image