// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creators from bankReducer.js
import {
    depositOneActionCreator,
    depositFiveActionCreator,
    depositTenActionCreator,
    depositTwentyActionCreator,
    withdrawOneActionCreator,
    withdrawFiveActionCreator,
    withdrawTenActionCreator,
    withdrawTwentyActionCreator,
} from '../Store/Reducers/bankReducer';

// Atm written as a class component in case we need local state in the future
class Atm extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <h1>Hello from Atm</h1>
        );
    }
}

// Container to handle reading (mapState) and writing (mapDispatch) in regards to the redux store;
// I want to be able to react with that reducer function
// Loads the state

const mapStateToProps = state => {
    console.log('state in mapStateToProps: ', state);

    return {
        balance: state.bank.balance,
    };
};

const mapDispatchToProps = dispatch => {
    console.log('dispatch in mapDispatchToProps: ', dispatch);

    return {
        depositOneAction() {
            dispatch(depositOneActionCreator());
        },
        depositFiveAction() {
            dispatch(depositFiveActionCreator());
        },
        depositTenAction() {
            dispatch(depositTenActionCreator());
        },
        depositTwentyAction() {
            dispatch(depositTwentyActionCreator());
        },
        withdrawOneAction() {
            dispatch(withdrawOneActionCreator());
        },
        withdrawFiveAction() {
            dispatch(withdrawFiveActionCreator());
        },
        withdrawTenAction() {
            dispatch(withdrawTenActionCreator());
        },
        withdrawTwentyAction() {
            dispatch(withdrawTwentyActionCreator());
        },
    };
};

// Connection to Redux store from this Atm component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Atm);