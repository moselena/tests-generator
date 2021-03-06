import React from 'react'
import styled from 'styled-components'

const BaseBackdrop = styled.div`
    z-index: 50;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

const Backdrop = ({ onClick }) => <BaseBackdrop onClick={onClick} />

export default Backdrop