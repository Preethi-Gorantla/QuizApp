export const Theme = 'THEME'
export const Submit ='SUBMIT'
export const Reset ='RESET'
export const Back ='BACK'
export const Response='RESPONSE'

export const changeTheme = () => {
    return{
        type:Theme
    }
}

export const onSubmit = () => {
   // console.log("Action")
    return{
        type:Submit
    }
}

export const onReset = () => {
    //console.log("Action")
    return{
        type:Reset
    }
}

export const onBack = () => {
    //console.log("Action")
    return{
        type:Back
    }
}

export const takeResponse = (payload) => {
    console.log("action",payload)
    return{
        type:Response,
        payload
    }
}