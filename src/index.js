import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/logo.svg';
import Header from './components/header';
import AuthContext from './contexts/AuthContext';
import './styles/index.css';


class Welcome extends React.Component{
    constructor(){
        super();
        this.state={
            clickMe: false
        };
    }
    render(){
        console.log('Parent Renders');
        return(
        <div className="App"> 
            <button onClick={()=>{this.setState({clickMe: !this.state.clickMe})}}>Parent Button</button>
            <Header isUserLoggedIn={true}/>
        </div>);
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));