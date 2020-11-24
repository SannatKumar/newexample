import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// More Complex state handling

const App = () => {
  const [left, setleft] = useState(0)
  const [right, setRight] = useState(0)

  return(
    <div>
      {left}
      <button onClick = {() => setleft(left + 1)}>
        Increase Left
      </button> 
      <br />
      {right}
      <button onClick = {() => setRight(right + 1)}>
        Increase Right
      </button>
      <button onClick = {() => setleft(0)}> OK Left</button>
      <button onClick = {() => setRight(0)}> OK Right</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



/*
//Using React State Hooks

const App = () => {
  const [counter, setCounter] = useState(0)
    return(
      <>
      <div>{counter}</div>
      <button onClick= {() => setCounter(counter+1)}>Plus</button>
      <button onClick= {() =>setCounter(0)}>Reset Counter</button>
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

*/

/**
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return(
    <div>
      <p>
        Hello {name}, You are {age} years old.
      </p>
      <p>So You were probably born in Year {bornYear()}</p>
    </div>
  )
}

const App = () =>{
  const name = 'Peter'
  const age = 10
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Maya' age = {26 + 10} />
      <Hello name = {name} age = {age} />

    </div>
  )
}*/
/* //Displaying the changing data using set Interval
const App = (props) => {
  const {counter} = props
  return(
    <>
    {counter}
    </>
  )
}

let counter = 1
const refresh = () => {
  ReactDOM.render(<App counter = {counter} />, document.getElementById('root'));
}

setInterval(() =>{
refresh()
counter+= 1
}, 1000)
refresh()
counter+=1
refresh()

*/






