import { createMuiTheme } from '@material-ui/core/styles';

const cream = "#faf3f3";
const lightBlue = "#e1e5ea";
const darkBlue = "#a7bbc7";
const themePink = "#da7f8f";

export default createMuiTheme({
    palette: {
        common: {
            cream: cream,
            lightBlue: lightBlue,
            darkBlue: darkBlue,
            themePink: themePink
        },
        primary: {
            main: themePink
        },
        secondary: {
            main: cream
        }
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                width: '2em',
                height: '2em',
                marginLeft: '10px'
            }
        },
    },
    typography: {
        h2: {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: '2.5rem',
            color: cream,
            lineHeight: '1.5'
        },
        h3: {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: '2rem',
            color: cream,
            lineHeight: '0.5'
        },
    }
});