import React, { useRef } from 'react';
import {connect} from 'react-redux';
import { generateQuote } from '../QuoteActionCreators/quoteActionCreators';

const QuoteGeneratorComponent = (props) => {
    const quoteRef = useRef();
    const submitHandler = () => {
        console.log(quoteRef.current.value);
        props.setQuote(quoteRef.current.value);
    }
    return (
        <React.Fragment>
            <div data-test='component-quote'>
            <input type="text" ref={quoteRef} placeholder="Enter a Quote"/>
            <button type="button" onClick={submitHandler}>Submit</button>
            <div>
                {props.myquotes.map((quote, index) => <h1 key={index}>{quote}</h1>)}
            </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    myquotes: state.quoteReducer.quotes
});

const mapDispatchToProps = (dispatch) => ({
    setQuote: (quote) => dispatch(generateQuote(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGeneratorComponent);

