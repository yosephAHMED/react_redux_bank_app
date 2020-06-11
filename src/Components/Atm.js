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
            <div className="atm">
                <h1>ATM</h1>

                <div className="balance_section">
                    <h2 className="balance">$ {this.props.balance}</h2>
                </div>

                <div className="button_section">

                    {/** Deposit Buttons*/}
                    <button type="button" onClick={console.log("Deposit $1")}>
                        Deposit $ 1
                    </button>

                    <button type="button" onClick={console.log("Deposit $5")}>
                        Deposit $ 5
                    </button>

                    <button type="button" onClick={console.log("Deposit $10")}>
                        Deposit $ 10
                    </button>

                    <button type="button" onClick={console.log("Deposit $20")}>
                        Deposit $ 20
                    </button>

                    {/** Withdraw Buttons*/}
                    <button type="button" onClick={console.log("Withdraw $1")}>
                        Withdraw $ 1
                    </button>

                    <button type="button" onClick={console.log("Withdraw $5")}>
                        Withdraw $ 5
                    </button>

                    <button type="button" onClick={console.log("Withdraw $10")}>
                        Withdraw $ 10
                    </button>

                    <button type="button" onClick={console.log("Withdraw $20")}>
                        Withdraw $ 20
                    </button>

                </div>

            </div>
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