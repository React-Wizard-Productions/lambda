import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

const api = {
    students: {
        loadStudents: () => {
            client.get('/students').then(res => res.data)
        }
    }
}

export default api;
