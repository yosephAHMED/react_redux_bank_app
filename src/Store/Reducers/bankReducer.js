// Initial State
const initialState = {
    balance: 0,
};

// Action Types - what kind of features will be implemented

/** DEPOSIT ACTIONS */
const DEPOSIT_ONE = 'DEPOSIT_ONE';
const DEPOSIT_FIVE = 'DEPOSIT_FIVE';
const DEPOSIT_TEN = 'DEPOSIT_TEN';
const DEPOSIT_TWENTY = 'DEPOSIT_TWENTY';

/** WITHDRAW ACTIONS */
const WITHDRAW_ONE = 'WITHDRAW_ONE';
const WITHDRAW_FIVE = 'WITHDRAW_FIVE';
const WITHDRAW_TEN = 'WITHDRAW_TEN';
const WITHDRAW_TWENTY = 'WITHDRAW_TWENTY';

// Action Creators - what function will occur when the type is read
// Is a payload needed?

/** DEPOSIT ACTION CREATORS */
export const depositOneActionCreator = () => ({
    type: DEPOSIT_ONE,
});

export const depositFiveActionCreator = () => ({
    type: DEPOSIT_FIVE,
});

export const depositTenActionCreator = () => ({
    type: DEPOSIT_TEN,
});

export const depositTwentyActionCreator = () => ({
    type: DEPOSIT_TWENTY,
});

/** WITHDRAW ACTION CREATORS */
export const withdrawOneActionCreator = () => ({
    type: WITHDRAW_ONE,
});

export const withdrawFiveActionCreator = () => ({
    type: WITHDRAW_FIVE,
});

export const withdrawTenActionCreator = () => ({
    type: WITHDRAW_TEN,
});

export const withdrawTwentyActionCreator = () => ({
    type: WITHDRAW_TWENTY,
});

// Reducer function
// when a dispatch comes in, the corresponding action type case gets run
const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        // ACTION TYPES GO HERE AS CASE STATEMENTS

        // DEPOSIT TYPES
        case DEPOSIT_ONE:
            return {
                // ...state to ensure immutability (it becomes more crucial when we have more than one state variable)
                ...state,
                balance: state.balance + 1,
            };
        case DEPOSIT_FIVE:
            return {
                ...state,
                balance: state.balance + 5,
            };
        case DEPOSIT_TEN:
            return {
                ...state,
                balance: state.balance + 10,
            };
        case DEPOSIT_TWENTY:
            return {
                ...state,
                balance: state.balance + 20,
            };

        // WITHDRAW TYPES
        case WITHDRAW_ONE:
            return {
                ...state,
                balance: state.balance - 1,
            };
        case WITHDRAW_FIVE:
            return {
                ...state,
                balance: state.balance - 5,
            };
        case WITHDRAW_TEN:
            return {
                ...state,
                balance: state.balance - 10,
            };
        case WITHDRAW_TWENTY:
            return {
                ...state,
                balance: state.balance - 20,
            };
        
        default:
            return state;

    }
};

// export -- can be used in rootReducer now
export default bankReducer;