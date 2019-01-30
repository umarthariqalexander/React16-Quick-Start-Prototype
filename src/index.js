import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/logo.svg';
import './styles/index.css';
import ComponentOne from './components/componentOne';
import ComponentTwo from './components/componentTwo';

const InitialComponent = React.lazy(()=>import('./components/componentOne')); 
const SecondaryComponent = React.lazy(()=>import('./components/componentTwo'));

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Welcome to React Self Customized Prototype',
            change: true
        }
    }
    render(){
        return(
        <div className="App">
        <button onClick={()=>this.setState({change: !this.state.change})}>click here!!</button> 
            <React.Suspense fallback={<div>Loading...</div>}>
            {this.state.change && <InitialComponent/>}
            {!this.state.change && <SecondaryComponent/>}
            </React.Suspense>
        </div>);
    }
}


ReactDOM.render(<Welcome/>, document.getElementById('app'));