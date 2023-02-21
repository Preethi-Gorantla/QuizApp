import { Fragment,useState } from "react"
import { OptionContainer, OptionField, Radio, Value } from "../App.styles"
import {connect} from 'react-redux'
import { takeResponse } from "../Actions"
const Options = (props) => {
    //console.log("option",props.option)
    const answers_arr=[]
    const {submit,answers} = props

    console.log("answers",answers)
    const handleValue = (index,value) => {
        console.log("index",index,value,props.answer)
        var selected = ``
        var correct = ``
        var wrong=''
        var notSelected=''
        if(value === props.answer){
            console.log("if",value)
            correct = 'you have selected crct answer'
            wrong=''
            notSelected=''
            selected=''
        }
        else if(props.option.includes(value)){
            console.log("else if",value)
            wrong = 'The answer you have selected is incorrect.'
            correct = `The Correct answer is ${props.answer}`
            selected = `Selected answer is ${value}`
            notSelected=''
        }
        else{
            console.log("else",value)
            notSelected = 'User Did not attempted.'
            wrong=''
            correct=''
            selected=''
        }
        const response = {selected,correct,wrong,notSelected} 
        console.log("vals",{selected,correct,wrong,notSelected})
        props.onAdd(response)
        answers_arr.push(response)
        console.log(answers_arr)
    }
    //setArray(answers_arr)
    return(
        <Fragment>
            <OptionContainer>
                {!submit && props.option.map((item,index) => 
                    <OptionField>
                        <Radio type={'radio'} value={item} name="option" onClick={() => handleValue(index,item)}/>
                        <Value>{item}</Value>
                    </OptionField>
                )}
                {/* {submit && {answers.selected!=='' && <h1>}} */}
            </OptionContainer>
        </Fragment>
    )

}
const mapStatetoProps = (state) => {
    return{
        submit:state.submit,
        reset:state.reset,
        answers:state.answers
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        onAdd: (item) => dispatch(takeResponse(item))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Options)