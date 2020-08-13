import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import store from "../../store";

export const ReduxProvider = ({children}: PropsWithChildren<any>) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider
