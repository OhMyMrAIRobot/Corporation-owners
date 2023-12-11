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
                <img
                    src={person.photo}
                    alt={person.name}
                    width='50%'
                    style={{
                        boxShadow: '-moz-initial',
                        WebkitBoxShadow: '5px 6px 50px grey'
                    }}
                />


                <Box
                    width = "40%"
                    marginTop = "auto"
                    marginBottom = "auto"
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

                    {person.deathDate !== "" ?
                        <Typography
                            sx = {{
                                fontSize: '1.2rem',
                                marginTop: '0.5em',
                                fontStyle: 'italic',
                            }}
                        >
                            {t("deathDate")}{person.deathDate}
                        </Typography>
                        :
                        <Typography
                            sx = {{
                                fontSize: '1.2rem',
                                marginTop: '0.5em',
                                fontStyle: 'italic',
                            }}
                        >
                            {t("age")}{person.age}
                        </Typography>
                    }

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

                </Box>
            </Box>

            <Typography
                sx = {{
                    fontSize: '1.3rem',
                    marginTop: '4em',
                    fontStyle: 'italic',
                    textAlign: 'center',
                }}
            >
                {person.description}
            </Typography>
        </div>
    );
};

export default PersonHeader;