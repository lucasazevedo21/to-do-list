import styled from 'styled-components'

export const Titles = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        color: #4361EE;
        font-size: 2.7rem;
        margin: 2rem;
    }
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    input {
        border: 1px solid #bfb7b6;
        border-radius: 5px;
        width: 300px;
        padding: 5px;
        margin-right: 5px;
        outline: none;
        font-size: 0.9rem;
    }

    button {
        border: 1px solid #04E762;
        border-radius: 5px;
        padding: 5px;
        background: #04E762;
        color: #FFF;
        font-size: 1rem;
        cursor: pointer;

        :hover {
            opacity: 0.8;
            transition: 0.3s;
        }
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 700px;
        text-decoration: underline;
        font-size: 1.8rem;
        color: #4361EE;
    }
`

export const Status = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    div {
        font-size: 1.2rem;
    }

    button {
        border: 1px solid #E9190F;
        border-radius: 5px;
        padding: 5px;
        color: #FFF;
        background: #E9190F;
        font-size: 1rem;
        cursor: pointer;

        :hover {
            opacity: 0.8;
            transition: 0.3s;
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    p {
        color: #4361EE;
        font-size: 1.2rem;
    }
`

export const SingleTodo = styled.ul`
    border: 1px solid #bfb7b6;
    border-radius: 5px;
    width: 700px;
    margin: 0 auto;
    padding: 12px;
    margin-bottom: 0.7rem;
    font-size: 1.2rem;

    :hover {
        border: 1px solid #4361EE;
        transition: 0.2s;
    }

    input {
        cursor: pointer;
        margin-right: 10px;
    }
`