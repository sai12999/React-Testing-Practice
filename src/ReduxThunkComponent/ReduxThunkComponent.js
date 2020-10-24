import React, { useRef } from 'react';
import { connect } from 'react-redux';

import {reduxThunkAddAction} from '../ReduxThunkActionCreators/reduxThunkActionCreators';

const ReduxThunkComponent = (props) => {

    const num1ref = useRef();
    const num2ref = useRef();

    const handleAdd = () => {
        props.setAdd(+num1ref.current.value + +num2ref.current.value);
    }
    return (
        <React.Fragment>
            <div>
                <input type="text" ref={num1ref} placeholder="number1" />
                <input type="text" ref={num2ref} placeholder="number2" />
                <button onClick={handleAdd}>add</button>
                <h1>CurrentValue : {props.addVal}</h1>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    addVal: state.reduxThunkReducer.addVal
})

const mapDispatchToProps = dispatch => ({
    setAdd: (val) => dispatch(reduxThunkAddAction(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkComponent);