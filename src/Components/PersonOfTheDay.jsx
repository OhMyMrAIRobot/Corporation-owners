import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";



const PersonOfTheDay = () => {
    const { t } = useTranslation();
    const params = useParams();
    const personId = 0;

    const navigate = useNavigate()

    const persons = t("persons", { returnObjects: true });

    const MoreButton = (
        <Button
            variant="contained"
            onClick={() => {
                navigate(`/Person`)
            }}
            sx={{
                marginTop: '1em',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            Подробнее
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
            {persons[personId].name}
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
            {persons[personId].description}
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
                    fontStyle: "oblique",
                    fontWeight: "medium",
                    textAlign: "center",
                }}
            >
                Создатель дня
            </Typography>
            {TitleText}
            {DescriptionText}
            {MoreButton}
        </Box>
    );
};

export default PersonOfTheDay;