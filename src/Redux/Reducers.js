export default function contents(state = {}, action) {
    switch (action.type) {
        case "ADD_CONTENT":
            return { ...state, contents: action.contents}
        default:
            return state;
    }
}