import './App.css';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material';
import { themeOptions } from './Themes/Themes'
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import PersonPage from "./Pages/PersonPage";
import {Authors} from "./Components/Authors";

const theme = createTheme(themeOptions);

function App() {
   return(
           <ThemeProvider theme={theme}>
               <div
                   style={{
                       minHeight: '100vh',
                       display: 'flex',
                       flexDirection: 'column',
                       backgroundColor: theme.palette.background.default
                   }}
               >
                   <Box
                       flex={0}
                   >
                       <Header/>
                       <PersonPage />
                   </Box>

               </div>

           </ThemeProvider>
   )
}

export default App;
