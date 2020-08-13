import React, {PropsWithChildren} from 'react';
import ThemeProvider from "./theme/themeprovider.component";

export const Provider = ({children}: PropsWithChildren<any>) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider;
