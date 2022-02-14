import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props);
  return(
<div>
  <button onClick={()=> props.history.push('/pants')}>pants</button>
<h1> HATS PAGE</h1>
<a href='/pants'>link</a>

</div>
)
  }
const PantsPage = () => (
<div>
<h1> Pants PAGE</h1>

</div>
)

const PantID = (props) =>{
return(
    <div>
      <h1>pant number: {props.match.params.pantID}</h1>
    </div>
)
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/pants' component={PantsPage} />
        <Route path='/pants/:pantID' component={PantID} />
        </Switch>
      </div>
    
    );
  }
}

export default App;