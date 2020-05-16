import Axios from "axios"
const baseUrl = 'http://localhost:3000'

class TodoService {
  static getAll () {
    return Axios.get(`${baseUrl}/todos`)
      .then(res => res.data)
  }

  static updateById (id, change) {
    return Axios.put(`${baseUrl}/todos/${id}`, change)
  }

  static addNew (task) {
    return Axios.post(`${baseUrl}/todos/`, task)
      .then(res => res.data)
  }

  static removeById (id) {
    return Axios.delete(`${baseUrl}/todos/${id}`)
  }
}

export default TodoService