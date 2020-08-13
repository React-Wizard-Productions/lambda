import React, {PropsWithChildren} from 'react';
import {createMuiTheme, MuiThemeProvider, ThemeOptions, CssBaseline, responsiveFontSizes} from "@material-ui/core";

const theme: ThemeOptions = {
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
        h1: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
        h2: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
        h3: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
        h4: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
        h5: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
        h6: {
            fontFamily: ['Raleway', 'sans-serif'].join(',')
        },
    }
}

const myTheme = responsiveFontSizes(createMuiTheme(theme));

export const ThemeProvider = ({children}: PropsWithChildren<any>) => {
    return (
        <MuiThemeProvider theme={myTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider
