/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 118.4rem;
    height: calc(100vh - 14rem);
    margin: 7rem auto;
    padding: 3rem;

    background: ${props => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`