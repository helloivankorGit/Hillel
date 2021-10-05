import { RED, GREEN, BLUE } from "../constants"

const initiaState = {
  color: '',
}
export const colorReducer = (state = { initiaState }, action) => {
  switch (action.type) {
    case RED:
      return { color: RED }
    case GREEN:
      return { color: GREEN }
    case BLUE:
      return { color: BLUE }
    default:
      return state;
  }
}