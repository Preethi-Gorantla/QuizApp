
import { AppContainer, Head1, Heading, ResetBtn } from './App.styles';
import {FiSun ,FiMoon} from 'react-icons/fi';
import { data } from './components/data';
import Question from './components/Question';
import { Button } from './App.styles';
import { changeTheme, onBack, onReset, onSubmit } from './Actions';
import {connect} from 'react-redux'

function App(props) {
  const {
    isTheme,
    submit,
    reset,
    backtoQuiz
  } = props

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
        {!(submit || reset) ?
         <Heading>
            <ResetBtn onClick={props.handleReset}>Reset</ResetBtn>
            <Button onClick={props.handleSubmit}>Submit</Button>
        </Heading> 
        : <Button onClick={props.handleBacktoQuiz}>Back to Quiz</Button>}
        {/* {submit && <Button onClick={props.handleBacktoQuiz}>Back to Quiz</Button>} */}
    </AppContainer>
  );
}

const mapStatetoProps = (state) => {
  return{
    isTheme : state.isTheme,
    submit:state.submit,
    reset:state.reset,
    backtoQuiz:state.backtoQuiz
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    handleTheme : () => dispatch(changeTheme()),
    handleSubmit: () => dispatch(onSubmit()),
    handleReset:()=> dispatch(onReset()),
    handleBacktoQuiz: () => dispatch(onBack())
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
