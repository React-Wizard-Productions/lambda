import React, {createContext, PropsWithChildren, useEffect} from 'react';
import {connect} from 'react-redux';
import {AppState} from "../../store/reducer";
import {loadStudents} from "../../store/students/studentActions";
import {Student} from "../../store/students/studentTypes";

interface DataProviderProps  {
    loadStudents: () => void
    state: AppState
}

export const DataProviderContext = createContext({})

export const DataProvider = (props: PropsWithChildren<DataProviderProps>) => {
    const {state, loadStudents, children} = props;

    useEffect(() => {
        loadStudents();
    }, [loadStudents])

    return (
        <DataProviderContext.Provider value={{...state}}>
            {children}
        </DataProviderContext.Provider>
    )
}

const mapStateToProps = (state: AppState) => ({ state })

const mapDispatchToProps = {
    loadStudents
}

export default connect(mapStateToProps, mapDispatchToProps)(DataProvider)
