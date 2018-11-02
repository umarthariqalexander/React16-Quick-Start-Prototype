import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/logo.svg';
import './styles/index.css';
import Header from './components/header';
import Body from './components/body';
import ErrorBoundary from './ErrorBoundary';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderList: [{name: 'LG', price:'12300'}, {name: 'LG', price:'12300'},{name: 'LG', price:'12300'},{name: 'LG', price:'12300'}],
            orderObject:{}
        }
    }
    render(){
        return(
        <div className=""> 
            <Header headerMessage="Welcome to React 16"/>
            <ErrorBoundary>
                <Body orderList={this.state.orderObject}/>
            </ErrorBoundary>
        </div>);
    }
}


ReactDOM.render(<Welcome/>, document.getElementById('app'));