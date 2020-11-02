import React from 'react';
import LoginForm from './LoginForm';
import './App.scss';

function App() {
    return (
        <div className="app">
            <header className="app-header">Welcome, please login</header>
            <section>
                <LoginForm />
            </section>
        </div>
    );
}

export default App;
