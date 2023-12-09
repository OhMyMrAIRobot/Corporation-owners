import React from 'react';
import "./Footer.css"
import {Box} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Footer = () => {

    const AboutLink = () => {
        return (
            <Link
                className = 'AboutLink'
                to="/About"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                {t('appAbout')}
            </Link>
        )
    }

    const PrivacyLink = () => {
        return (
            <a
                href = 'https://github.com/'
                className = 'AboutLink'
                target={"_blank"}
            >
                {t('policy')}
            </a>
        )
    }


    const { t } = useTranslation();
    return (
        <Box>
            <AppBar
                position = "static"
                sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    minHeight: '50px',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    whiteSpace: 'pre',
                }}
            >
                © 2023 {t('bsuir')} • <AboutLink /> • <PrivacyLink />
            </AppBar>
        </Box>
    );
};

export default Footer;