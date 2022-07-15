/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;

    color: ${(props) => props.theme['gray-100']};
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.03rem;
`

const BaseInput = styled.input`
    background: transparent;
    height: 3.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.55rem;
    letter-spacing: 0.01rem;
    padding-inline: 0.8rem;
    color: ${props => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 5rem;
`

export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 16rem;
    line-height: 12rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1.5rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 3rem 1.5rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding-block: 3rem;
    color: ${(props) => props.theme['green-500']};

    width: 5.5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const StartCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1.4rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['gray-100']};
    gap: 0.6rem;
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    background: ${props => props.theme['green-500']};

    &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
    }
`