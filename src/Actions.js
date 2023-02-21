export const Theme = 'THEME'
export const Submit ='SUBMIT'
export const Reset ='RESET'

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
    console.log("Action")
    return{
        type:Reset
    }
}