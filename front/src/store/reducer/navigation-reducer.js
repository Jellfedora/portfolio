const initialState = {
    selectedPage: null,
    blinkPage: null,
    showLabels: false,
    deviceIsLarge: false
}

function navigationReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'CHANGE_PAGE':
            nextState = {
                ...state,
                selectedPage: action.value
            }
            return nextState || state
        case 'BLINK_PAGE':
            nextState = {
                ...state,
                blinkPage: action.value
            }
            return nextState || state
        case 'SHOW_LABELS':
            nextState = {
                ...state,
                showLabels: action.value
            }
            return nextState || state
        case 'DEVICE_WIDTH':
            nextState = {
                ...state,
                deviceIsLarge: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default navigationReducer