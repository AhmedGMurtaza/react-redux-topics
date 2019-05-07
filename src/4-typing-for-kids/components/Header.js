import React from 'react';

function Header(props){
    return(
        <div>
            <div className="error-bar" {...props} />
            <h1>Typing for Kids!</h1>
        </div>
    )
}

export default Header;