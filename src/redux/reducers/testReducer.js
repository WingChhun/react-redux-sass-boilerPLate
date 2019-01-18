import React from 'react';

const initialState = {
    message: " TEST REDUCER"
};

export default function testReducer(state = initialState, action) {
    switch (action.type) {

        case '__TEST':

            return state;

        default:
            return state;
    }
}