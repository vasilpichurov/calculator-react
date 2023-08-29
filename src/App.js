import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
]

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Wrapper>
          <Screen></Screen>
          <ButtonBox>
            {btnValues.flat().map((btn, i) => {
              return <Button value={btn} key={i}/>
            })}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
