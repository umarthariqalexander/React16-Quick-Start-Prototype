import React from 'react';

const Header = function(props){
    return(
        <header>
            <h1 className="header">{props.headerMessage}</h1>
        </header>
    );
}

export default Header;