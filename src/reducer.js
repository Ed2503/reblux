function data(state, action) {
  switch (action.type) {
    case 'CLOSER_MODAL': {
      // action.payload.query
      const newState = {
        ...state
      }
      newState.app.modal.state = false
      return newState
    }
    case 'OPEN_MODAL': {
      const newState = {
        ...state
      }
      newState.app.modal.props.title  = action.title
      newState.app.modal.props.src = action.src
      newState.app.modal.state = true
      return newState
    }
    default:
      return state
  }
}

export default data;