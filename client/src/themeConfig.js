import { createTheme } from "@mui/material";

let accent1 = "#EFEFEF";
let accent2 = "#A5A5A5";


const primaryMain = "#65A4B1"; // "#100E0D" old black
const primaryHover = "rgba(0, 15, 89, 0.75)"; // "rgba(16, 14, 13, 0.75)" old black
const secondaryMain = '#D04699';
const secondaryHover = "rgba(255, 184, 6, 0.75)";
const tertiaryMain = "#0022CC";
const tertiaryHover = "rgba(1, 34, 204, 0.75";
const black = "#242021";

const theme = createTheme({
  typography: {
    fontFamily: ['serif', 'sans-serif']
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            color: black,
            fontWeight: 300,
            fontSize: "96px",
            fontFamily: 'serif'
          },
        },
        {
          props: { variant: "h2" },
          style: {
            color: "black",
            fontWeight: 400,
            fontSize: "60px",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            color: "black",
            fontWeight: 600,
            fontSize: "48px",
            
          },
        },
        {
          props: { variant: "h4" },
          style: {
            color: black,
            fontWeight: 400,
            fontSize: "34px",
            fontFamily: 'serif'
          },
        },
        {
          props: { variant: "h5" },
          style: {
            color: "black",
            fontWeight: 700,
            fontSize: "24px",
          },
        },
        {
          props: { variant: "h6" },
          style: {
            color: "black",
            fontWeight: 500,
            fontSize: "20px",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            color: "black",
            fontWeight: 400,
            fontSize: "16px",
          },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            color: "black",
            fontWeight: 500,
            fontSize: "14px",
          },
        },
        {
          props: { variant: "body" },
          style: {
            color: black,
            fontWeight: 400,
            fontSize: "16px",
            fontFamily: 'sans-serif'
          },
        },
        {
          props: { variant: "important" },
          style: {
            color: black,
            fontWeight: 400,
            fontSize: "24px",
            fontFamily: 'sans-serif'
          },
        },
        {
          props: { variant: "body3" },
          style: {
            color: "#8d8d8d",
            fontWeight: 400,
            fontSize: "14px",
          },
        },
        {
          props: { variant: "caption" },
          style: {
            fontFamily: 'sans-serif',
            color: "#8d8d8d",
            fontWeight: 400,
            fontSize: "14px",
          },
        },
        {
          props: { variant: "topic" },
          style: {
            color: "#6b6b6b",
            fontSize: "14px",
            fontFamily: 'sans-serif',
            paddingBottom: '16px',
            transition: 'ease 0.4s',
            cursor: 'pointer',
            '&:hover': {
              color: black, // Assuming 'black' is a valid color or use '#000' or another valid color value
            },
          },
        },
        {
          props: { variant: "overline" },
          style: {
            color: "black",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "24px",
            textTransform: "uppercase",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: black,
            color: "white",
            border: "1px solid",
            borderColor: black,
            borderRadius: '50px',
            fontFamily: 'sans-serif',
            textTransform: "none",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            // fontWeight: "bold",
            ":hover": {
              backgroundColor: "white",
              color: black,
            },
            ":disabled": {
              color: "white",
            },
          },
        },
        {
          props: { variant: "pinkBtn" },
          style: {
            backgroundColor: secondaryMain,
            color: primaryMain,
            borderRadius: '50px',
            color: "#fff",
            border: "1px solid",
            borderColor: secondaryMain,
            fontFamily: 'sans-serif',
            textTransform: "none",
            transition: 'ease 0.4s',
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            ":hover": {
              backgroundColor: "white",
              color: secondaryMain,
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: primaryMain,
      hover: primaryHover,
    },
    secondary: {
      main: secondaryMain,
      hover: secondaryHover,
    },
    tertiary: {
      main: tertiaryMain,
      hover: tertiaryHover,
    },
    accent1: {
      main: accent1,
    },
    accent2: {
      main: accent2,
    },
    sheets: {
      main: "#188038",
      hover: "rgba(24, 128, 56, 0.5)",
    },
    background: {
      main: "#97D0DC",
    },
    black: {
      main: black
    }
  },
});

export default theme;
