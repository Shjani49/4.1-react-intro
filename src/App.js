import React from 'react';
import Hello from './Hello'; // Make sure to import your component if you're going to use it in any file...
import HelloYourName from './HelloYourName';
import HelloStudent from './HelloStudent';


function App() {
  return (
    <div className="App">
      <Hello /> 
      <HelloYourName name = "Shivani" favFood = "Pizza"/>
      <HelloYourName name = "Jia" favFood = "Panipuri"/>
      <HelloStudent />
    </div>
  );
}

export default App;
