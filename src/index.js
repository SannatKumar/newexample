import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//Using React State Hooks

const App = () => {
  const [counter, setCounter] = useState(0)
  
  setTimeout(() => setCounter(counter+1),
    1000
    )
    return(
      <div>{counter}</div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

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






