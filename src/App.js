import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AccountComponent from './components/user/AccountComponent';


class App extends Component {
    render() {
        return (
            <React.Fragment>
			<body>
				<Header/>
				<main>
					<AccountComponent/>
				</main>
				<Footer/>
			</body>
            </React.Fragment>
        )
    }
}

export default App;

