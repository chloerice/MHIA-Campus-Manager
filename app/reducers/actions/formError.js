import { SET_ALERT } from './constants'

export function setAlert(alert) {
  return {
    type: SET_ALERT,
    alert
  }
}
