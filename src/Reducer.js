import { Back, Reset, Response, Submit, Theme } from "./Actions"

const initialState = {
    answers:[],
    isTheme:false,
    correct:false,
    wrong:false,
    reset:false,
    submit:false,
    backtoQuiz:false
}

export const Reducer = (state={initialState},action) => {
    const {type,payload} = action
    console.log("state",state)
    switch(type){
        case Theme : {
            return {
                ...state,
                isTheme:!state.isTheme
            }
        }
        case Submit:{
           return{
            ...state,
            submit:true
           }
        }
        case Reset:{
            return{
             ...state,
             reset:true
            }
         }
         case Back:{
            return{
                ...state,
                backtoQuiz:true,
                submit:false,
                reset:false
            }
         }
         case Response:{
            // return[...state,
            //     {...payload}]
            const newArray={...payload}
            return [...state,newArray]
         }
        default :{
            return state
        }
    }
}