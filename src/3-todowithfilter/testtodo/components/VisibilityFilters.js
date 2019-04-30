import React from 'react';
import { connect } from 'react-redux';

class VisibilityFilters extends React.Component {
    render(){
        const {activeFilter, dispatch} = this.props;
        return(
            <div className="filters">
                <button 
                    className={activeFilter === 'FILTER_ALL'?'active':''}
                    onClick={()=>dispatch({type:'FILTER_ALL'})}>All</button>
                <button 
                    className={activeFilter === 'FILTER_ACTIVE'?'active':''}
                    onClick={()=>dispatch({type:'FILTER_ACTIVE'})}>Active</button>
                <button 
                    className={activeFilter === 'FILTER_COMPLETED'?'active':''}
                    onClick={()=>dispatch({type:'FILTER_COMPLETED'})}>Completed</button>
            </div>
        )
    }
}

const mapStateToProps = ({visibilityFilters}) => {
    return{
        activeFilter:visibilityFilters.activeFilter
    }
}

export default connect(mapStateToProps)(VisibilityFilters);