/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 2.4rem;
        color: ${(props) => props.theme['gray-100']};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto; //Se o tamanho da tabela for maior que o container disponível, gera uma barra de rolagem
    margin-top: 2.8rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${(props) => props.theme['gray-600']};
            padding: 1.4rem;
            text-align: left;
            color: ${(props) => props.theme['gray-100']};
            font-size: 1.5rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 2.2rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 2.2rem;
            }
        }

        td {
            background-color: ${(props) => props.theme['gray-700']};
            border-top: 4px solid ${(props) => props.theme['gray-800']};
            padding: 1.4rem;
            font-size: 1.4rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                padding-left: 2.2rem;
            }

            &:last-child {
                padding-right: 2.2rem;
            }
        }
    }

`

