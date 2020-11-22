import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return(
    <div>
      <p>
        Hello {props.name}, You are {props.age} years old.
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
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


