import {CHANGE_IMAGE} from './actions'





const initialState = {
  image: null
}

export const getImage = (state=initialState, action={}) => {

  switch(action.type) {
    case CHANGE_IMAGE:
      return {...state, image: action.payload}
    default:
      return state;
  }

}
