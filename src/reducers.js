// Actions
export const add = (key, val) => ({type: 'ADD', key, val})
export const filter = (filter_str) => ({type: 'FILTER', filter_str})

// Initial Store State
const initial_state = {
    data: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
    },
    filter: '',
}

// Reducer
export const database = (state=initial_state, action) => {
    // console.log(action)
    switch(action.type) {
        case 'ADD': {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.key]: action.val,
                }
            }
        }
        case 'FILTER': {
            return {...state, filter: action.filter_str}
        }
        default: {
            return state
        }
    }
}
