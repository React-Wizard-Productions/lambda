import React, {ChangeEvent, Component, FormEvent} from 'react';
import {Typography} from "@material-ui/core";
import {Student} from "../store/students/studentTypes";
import {addStudent} from "../store/students/studentActions";
import {connect} from "react-redux";

interface AppProps {
    addStudent: (student: Partial<Student>) => void
}

interface AppState {
    values: Partial<Student>
}

export class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            values: {
                firstName: '',
                lastName: '',
                github: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {target: {name, value}} = e;
        this.setState({...this.state, values: {...this.state.values, [name]: value}})
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.addStudent(this.state.values);
    }

    render() {
        return (
            <>
                <Typography variant='h1'>Group Dashboard</Typography>
                <form onSubmit={this.handleSubmit}>
                    <input name='firstName' onChange={this.handleChange} value={this.state.values.firstName} />
                    <input name='lastName' onChange={this.handleChange} value={this.state.values.lastName} />
                    <input name='github' onChange={this.handleChange} value={this.state.values.github} />
                    <button type='submit'>Add Student</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    addStudent
}

export default connect(null, mapDispatchToProps)(App);
