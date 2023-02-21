import { Head1, Hr, QuestionContainer, QuestionTitle } from "../App.styles"
import Options from "./Options"

const Question = (props) => {
    const {question,title,options,answer} = props.question
    //console.log("Question",question,title,options)
    return(
        <QuestionContainer isTheme={props.isTheme}>
            <Head1 style={{fontWeight:'200',fontSize:'20px'}}>{title}</Head1>
            <Hr></Hr>
            <QuestionTitle>{question}</QuestionTitle>
            <Options option={options} answer={answer}/>
        </QuestionContainer>
    )
}

export default Question