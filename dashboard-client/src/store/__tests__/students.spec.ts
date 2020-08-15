import {Student, StudentState} from "../students/studentTypes";
import {applyMiddleware, createStore} from "redux";
import studentReducer from "../students/studentReducer";
import {loadStudents, addStudent, updateStudent, deleteStudent} from "../students/studentActions";
import thunk from 'redux-thunk';

describe('Students', () => {
    describe('Actions', () => {
        it('stores the students', async () => {
            const students: Student[] = []
            const api = {
                loadStudents: () => Promise.resolve(students)
            }
            const initialState: StudentState = {
                students: [],
                isLoading: false,
                errors: null
            }
            const store = createStore(studentReducer, initialState, applyMiddleware(thunk.withExtraArgument(api)))

            await store.dispatch(loadStudents())

            expect(store.getState().students).toEqual(students)
        })
        it('adds a new student', async () => {
            const student: Partial<Student> = {
                firstName: 'Test',
                lastName: 'User',
                github: 'agithubuser'
            }

            const returnStudent: Student = {
                firstName: 'Test',
                lastName: 'User',
                github: 'agithubuser',
                weekend: '',
                id: 'myId'
            }
            const api = {
                addStudent: (newStudent: Partial<Student>) => Promise.resolve(returnStudent)
            }
            const initialState: StudentState = {
                students: [],
                isLoading: false,
                errors: null
            }

            const store = createStore(studentReducer, initialState, applyMiddleware(thunk.withExtraArgument(api)));

            await store.dispatch(addStudent(student));

            expect(store.getState().students.length).toBe(1)
        })
        it('updates a student with the given id', async () => {
            const students: Student[] = [{
                firstName: 'Test',
                lastName: 'User',
                github: 'agithubuser',
                weekend: '',
                id: 'myId'
            }]
            const updateData: Partial<Student> = {
                firstName: 'Don'
            }
            const returnStudent: Student = {
                firstName: 'Don',
                lastName: 'User',
                github: 'agithubuser',
                weekend: '',
                id: 'myId'
            }
            const initialState: StudentState = {
                students,
                isLoading: false,
                errors: null
            }
            const api = {
                updateStudent: (id: string, update: Partial<Student>) => Promise.resolve(returnStudent)
            }

            const store = createStore(studentReducer, initialState, applyMiddleware(thunk.withExtraArgument(api)));

            await store.dispatch(updateStudent(students[0].id, updateData));

            expect(store.getState().students.length).toBe(1)
            expect(store.getState().students[0].firstName).toEqual('Don')
        })
        it('should remove the student with the given id', async () => {
            const students: Student[] = [{
                firstName: 'Test',
                lastName: 'User',
                github: 'agithubuser',
                weekend: '',
                id: 'myId'
            }]

            const initialState: StudentState = {
                students,
                isLoading: false,
                errors: null
            }
            const api = {
                deleteStudent: (id: string) => Promise.resolve(null)
            }
            const store = createStore(studentReducer, initialState, applyMiddleware(thunk.withExtraArgument(api)));
            await store.dispatch(deleteStudent(students[0].id))

            expect(store.getState().students.length).toBe(0)
        })
    })
})
