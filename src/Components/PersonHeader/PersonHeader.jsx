import './PersonHeader.css'
import React from 'react';
import {Box, Typography} from "@mui/material";
import {t} from "i18next";

const PersonHeader = ({person}) => {
    return (
        <div>
            <Typography
                mx ={{
                    marginTop: '0.5em'
                }}
                variant = "h3"
                fontSize = "3rem"
                display = "flex"
                justifyContent = "center"
            >
                {person.name}
            </Typography>

            <Box
                sx = {{
                    marginTop: '3em',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    width = {'50%'}
                >
                    <img
                        src={person.photo}
                        alt={person.name}
                        width='100%'
                        style={{
                            boxShadow: '-moz-initial',
                            WebkitBoxShadow: '5px 6px 50px grey'
                    }}
                    />

                    <Typography
                        textAlign = "center"
                        mx = {{
                            marginTop: '10px',
                            fontSize: '1.5em'
                    }}
                    >
                        {t("age")}{person.age}
                    </Typography>
                </Box>
                <Box
                    width = "40%"
                >
                    <Typography
                        className = "biography"
                    >
                        {t("fullName")}{person.name}
                    </Typography>

                    <Typography
                        className = "biography"
                    >
                        {t("birthdayDate")}{person.birthdayDate}
                    </Typography>

                    <Typography
                        className = "biography"
                    >
                        {t("deathDate")}{person.deathDate}
                    </Typography>

                    <Typography
                        className = "biography"
                    >
                        {t("birthdayPlace")}{person.birthdayPlace}
                    </Typography>

                    <Typography
                        className = "biography"
                    >
                        {t("nationality")}{person.nationality}
                    </Typography>

                    <Typography
                        className = "biography"
                    >
                        {t("activity")}{person.activity}
                    </Typography>

                    <Typography
                         textAlign = 'justify'
                        className = "biography"
                    >
                        {person.description}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default PersonHeader;