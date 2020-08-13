import React, {PropsWithChildren} from 'react';
import ThemeProvider from "./theme/themeprovider.component";
import ReduxProvider from "./redux/reduxprovider.component";

export const Provider = ({children}: PropsWithChildren<any>) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;
