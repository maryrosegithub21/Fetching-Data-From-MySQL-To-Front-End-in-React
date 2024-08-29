import React from 'react';
import VehiclesTable from './components/VehiclesTable';
import '../src/App.css';

function App() {
 

  return (
    <>
       <div className="App">
            <header className="App-header">
                <h1> List of vehicles</h1>
                <VehiclesTable />
            </header>
        </div>
    </>
  )
}

export default App
