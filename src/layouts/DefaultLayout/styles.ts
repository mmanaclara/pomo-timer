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

    div {
        display: flex;
        align-items: center;
        gap: 2rem; 

        h2 {
            font-size: 2.4rem;
        }
    }

    nav {
        display: flex;
        gap: 1.5rem;

        a {
            width: 4rem;
            height: 4rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme['gray-100']};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;


            &:hover {
                border-bottom: 3px solid ${(props) => props.theme['green-500']};
            }

            &.active {
                color: ${(props) => props.theme['green-500']};
            }
        }
    }
`