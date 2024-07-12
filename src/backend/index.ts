import saveUser from "./user/saveUser"
import getAll from "./user/getAll"
import deleteUser from "./user/deleteUser"

//Standard Facade
export default class Backend {
  static readonly users = {
    saveUser: saveUser,
    getAll: getAll,
    delete: deleteUser,
  }
}