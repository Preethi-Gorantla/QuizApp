import { Fragment } from "react"
import { Button, OptionContainer, OptionField, Radio, Value } from "../App.styles"
const Options = (props) => {
    //console.log("option",props.option)
    const answers_arr=[]
    const handleValue = (index,value) => {
        console.log("index",index,value)
        answers_arr.push({index,value})
    }
    return(
        <Fragment>
            <OptionContainer>
                {props.option.map((item,index) => 
                    <OptionField>
                        <Radio type={'radio'} value={item} onClick={() => handleValue(index,item)}/>
                        <Value>{item}</Value>
                    </OptionField>
                )}
            </OptionContainer>
        </Fragment>
    )

}
export default Options