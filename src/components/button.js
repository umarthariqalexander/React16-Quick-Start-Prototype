import React from 'react';
import AuthContext from '../contexts/AuthContext';

const Button = ()=>{
    return(
        <AuthContext.Consumer>
            {context=>(<button>{context.isUserLoggedIn}</button>)}
        </AuthContext.Consumer>
    );  
}


export default Button;