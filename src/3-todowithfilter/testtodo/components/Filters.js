import React from 'react';

const Filters = () => {
    return(
        <div className="filters">
            <a href="#" onClick={(e)=>e.preventDefault()}>All</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Active</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Completed</a>
        </div>
    )
}

export default Filters;