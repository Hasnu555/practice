import React from 'react';
import DealForm from './components/DealForm';
import DealsList from './components/DealsList';

function App() {
    return (
        <div className="App">
            <h1>Restaurant Deals</h1>
            <DealForm />
            <DealsList />
        </div>
    );
}

export default App;
