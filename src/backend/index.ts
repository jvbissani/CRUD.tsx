import saveUser from "./user/saveUser"
import getAll from "./user/getAll"

//Standard Facade
export default class Backend {
  static readonly users = {
    saveUser: saveUser,
    getAll: getAll,
  }
}