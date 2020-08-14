import React, {PropsWithChildren} from 'react';
import ThemeProvider from "./theme/themeprovider.component";
import ReduxProvider from "./redux/reduxprovider.component";
import DataProvider from "./redux/dataprovider.component";

export const Provider = ({children}: PropsWithChildren<any>) => {
    return (
        <ReduxProvider>
            <DataProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </DataProvider>
        </ReduxProvider>
    )
}

export default Provider;
