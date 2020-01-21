import { createStore } from 'redux'

const initialState = { contador: 0, strings: [] }

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_MORE':
            return { ...state, contador: state.contador + 1 }

        case 'REDUCE_IT':
            if (state.contador > 0) {
                return { ...state, contador: state.contador - 1 }
            } else {
                return state
            }
        case 'SUBMIT_FORM':
            return { ...state, strings: state.strings.concat(action.values) }
        case 'REMOVE_COMMENT':
            return { ...state, strings: state.strings.filter((aux, key) => action.values !== key) }
        default:
            return state
    }
}

export default createStore(reducer)