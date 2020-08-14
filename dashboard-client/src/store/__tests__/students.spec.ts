import {Student, StudentState} from "../students/studentTypes";
import {applyMiddleware, createStore} from "redux";
import studentReducer from "../students/studentReducer";
import {loadStudents, addStudent} from "../students/studentActions";
import thunk from 'redux-thunk';

describe('Students', () => {
    describe('Load Students Action', () => {
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
    })
})
