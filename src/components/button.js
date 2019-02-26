import React from 'react';
import AuthContext from '../contexts/AuthContext';

const Button = React.memo((props)=>{
    console.log('Render Button');
    return(
        <button>{props.isUserLoggedIn ? 'Logout':'Login'}</button>
    );  
});

export default Button;