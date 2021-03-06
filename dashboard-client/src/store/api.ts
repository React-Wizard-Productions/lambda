import axios from 'axios';
import {Student} from "./students/studentTypes";

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

const api = {
   loadStudents() {
       return client.get('/students').then(res => res.data)
   },
    addStudent(student: Partial<Student>) {
       return client.post('/students', student).then(res => res.data)
    },
    updateStudent(id: string, updateData: Partial<Student>) {
       return client.put(`/students/${id}`, updateData).then(res => res.data)
    },
    deleteStudent(id: string) {
       return client.delete(`/students/${id}`).then(res => res.data)
    }
}


export default api;
