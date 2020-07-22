export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_TASKS':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }
        default:
            return state;
    }
}