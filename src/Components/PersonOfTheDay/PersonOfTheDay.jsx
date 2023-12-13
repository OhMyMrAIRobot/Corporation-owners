import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import './PersonOfTheDay.css'

const PersonOfTheDay = ({personId}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const persons = t("persons", { returnObjects: true });

    const MoreButton = (
        <Button
            className = "MoreBtn"
            variant="contained"
            onClick={() => {
                navigate(`/Corporation-owners/Persons/${personId}`)
                window.scrollTo(0, 0);
            }}
            sx={{
                transition: 'all 0.8s ease',
                marginTop: '25px',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                '&:hover': {
                    background: 'rgba(0,0,0,0)',
                    color: '#212121',
                    boxShadow: 'inset 0 0 0 3px #212121',
                    transition: 'all 0.5s ease',
                }
            }}
        >
            {t('btnMore')}
        </Button>
    )

    const TitleText = (
        <Typography
            variant='h5'
            color='text.primary'
            gutterBottom
            sx={{
                fontStyle: "oblique",
                fontWeight: "normal",
                textAlign: "center",
            }}
        >
            {persons[personId-1].name}
        </Typography>
    )

    const DescriptionText = (
        <Typography
            variant='body1'
            color='text.primary'
            gutterBottom
            sx={{
                fontStyle: "oblique",
                fontWeight: "normal",
                fontSize: '1.1em',
                textAlign: 'center'
            }}
        >
            {persons[personId-1].description}
        </Typography>
    )

    return (
        <Box
            display = "flex"
            justifyContent = "center"
            flexDirection = "column"
        >
            <Typography
                variant='h2'
                align='center'
                color='text.primary'
                gutterBottom
                sx={{
                    marginTop: '50px',
                    fontStyle: "oblique",
                    fontWeight: "medium",
                    textAlign: "center",
                }}
            >
                {t('personDay')}
            </Typography>
            {TitleText}
            {DescriptionText}
            {MoreButton}
        </Box>
    );
};

export default PersonOfTheDay;