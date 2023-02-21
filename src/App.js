import { useState } from 'react';
import { AppContainer, Head1, Heading } from './App.styles';
import {FiSun ,FiMoon} from 'react-icons/fi';
import { data } from './components/data';
import Question from './components/Question';
import { Button } from './App.styles';
import { changeTheme, onReset, onSubmit } from './Actions';
import {connect} from 'react-redux'

function App(props) {
  const {
    isTheme,
    submit,
    reset
  } = props

  console.log("submit",submit)
  console.log("reset",reset)
  //const [theme,setTheme] = useState(false);

  const handleTheme = () => {
    //setTheme(!theme)
    props.handleTheme()
  }
  return (
    <AppContainer isTheme={isTheme}>
        <Heading>
          <Head1>Quiz</Head1>
          <Head1>
              {isTheme?<FiSun onClick={handleTheme} style={{marginTop: '10px'}}/> 
              : <FiMoon onClick={handleTheme} style={{marginTop: '10px'}}/>}
          </Head1>
        </Heading>
        {data.map((item,index) => <Question question={item} key={index} isTheme={isTheme}/>)}
        <Heading>
            <Button onClick={props.handleReset}>Reset</Button>
            <Button onClick={props.handleSubmit}>Submit</Button>
        </Heading>
    </AppContainer>
  );
}

const mapStatetoProps = (state) => {
  return{
    isTheme : state.isTheme,
    submit:state.submit,
    reset:state.reset
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    handleTheme : () => dispatch(changeTheme()),
    handleSubmit: () => dispatch(onSubmit()),
    handleReset:()=> dispatch(onReset())
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
