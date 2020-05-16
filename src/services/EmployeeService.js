import Axios from "axios"
const baseUrl = 'http://localhost:3000'

class EmployeeService {
  static getAll () {
    return Axios.get(`${baseUrl}/todos`)
      .then(res => res.data)
  }
}

export default EmployeeService