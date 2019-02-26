import React from 'react';
import Button from './button';

const Header = React.memo((props)=>{
    console.log('Header Renders');
    return(
        <Button {...props}/>
    );
});

export default Header;
