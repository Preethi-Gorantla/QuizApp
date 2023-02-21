import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => props.isTheme ? 'black' :'white'};
    color:${props => props.isTheme ? 'white' :'black'} ;
    padding: 10px;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 15px;
`
export const Head1 = styled.span`
    font-weight: 600;
    font-size: 26px;
`
export const QuestionTitle = styled.span`
    font-weight: 600 bold;
    font-size: 20px;
`

export const QuestionContainer = styled.div`
    border: ${props => props.isTheme ? '1px solid white' : '1px solid black'};
    margin-bottom: 8px;
    padding: 8px;
`
export const Hr= styled.hr`
    size: 1px;
`

export const OptionContainer = styled.div`
    padding: 8px;
`
export const OptionField = styled.span`
    display: flex;
    flex-direction: row;
`

export const Radio = styled.input`
    padding: 2px;
`
export const Value = styled.span`
    padding: 5px;
`
export const Button = styled.button`
    width: 90px;
`