import './App.css';
import React, {useEffect} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material';
import { themeOptions } from './Themes/Themes'
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage";
import PersonPage from "./Pages/PersonPage";
import AboutPage from "./Pages/AboutPage";
import {Route, Routes} from "react-router-dom";
import PersonListPage from "./Pages/PersonListPage";
import {I18nextProvider} from "react-i18next";
import i18next from './i18n'
import Footer from "./Components/Footer/Footer";
const theme = createTheme(themeOptions);

function App() {
    useEffect(() => {
        const RandomId = Math.floor(Math.random() * 3) + 1;
        localStorage.removeItem('randomId');
        localStorage.setItem('randomId', RandomId);
        console.log('rand');
    }, []);

   return(
       <I18nextProvider i18n={i18next}>
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
                   </Box>

                       <Routes>
                           <Route path="/" element={<MainPage />}/>
                           <Route path="/About" element={<AboutPage />} />
                           <Route path="/Personlist" element={<PersonListPage />} />
                           <Route path = "/:id" element={<PersonPage/>}/>
                       </Routes>
                   <Footer/>
               </div>
           </ThemeProvider>
       </I18nextProvider>

   )
}

export default App;
