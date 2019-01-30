import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/logo.svg';
import Header from './components/header';
import AuthContext from './contexts/AuthContext';
import './styles/index.css';


class Welcome extends React.Component{
    render(){
        return(
        <div className="App"> 
            <AuthContext.Provider value={{isUserLoggedIn: true}}>
                <Header/>
            </AuthContext.Provider>
        </div>);
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));