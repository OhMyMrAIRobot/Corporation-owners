import React from 'react';
import {Box, Typography} from "@mui/material";
import {t} from "i18next";

const PersonHeader = ({person}) => {
    return (
        <div>
            <Typography
                mx ={{
                    marginTop: '0.5em',
                    fontStyle: 'oblique',
                    fontWeight: '500',
                }}
                variant = "h2"
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
                        sx = {{
                            fontSize: '1.2rem',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("fullName")}{person.name}
                    </Typography>

                    <Typography
                        sx = {{
                            fontSize: '1.2rem',
                            marginTop: '0.5em',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("birthdayDate")}{person.birthdayDate}
                    </Typography>

                    <Typography
                        sx = {{
                            fontSize: '1.2rem',
                            marginTop: '0.5em',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("deathDate")}{person.deathDate}
                    </Typography>

                    <Typography
                        sx = {{
                            fontSize: '1.2rem',
                            marginTop: '0.5em',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("birthdayPlace")}{person.birthdayPlace}
                    </Typography>

                    <Typography
                        sx = {{
                            fontSize: '1.2rem',
                            marginTop: '0.5em',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("nationality")}{person.nationality}
                    </Typography>

                    <Typography
                        sx = {{
                            fontSize: '1.2rem',
                            marginTop: '0.5em',
                            fontStyle: 'italic',
                        }}
                    >
                        {t("activity")}{person.activity}
                    </Typography>

                    <Typography
                         sx = {{
                             fontSize: '1.2rem',
                             marginTop: '2em',
                             fontStyle: 'italic',
                             textAlign: 'justify',
                         }}
                    >
                        {person.description}
                    </Typography>

                </Box>
            </Box>
        </div>
    );
};

export default PersonHeader;