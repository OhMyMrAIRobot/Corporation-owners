import React from 'react';
import {Box, Typography} from "@mui/material";
import {t} from "i18next";
import "./PersonHeader.css"
import Delimiter from "../Delimiter";

const PersonHeader = ({person}) => {
    return (
        <div>
            <Typography
                mx ={{
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

            <Delimiter marginTop = '30px' paddingBottom = '50px'/>

            <Box
                className = "imgBox"
            >
                <img
                    className = "mainImg"
                    src={process.env.PUBLIC_URL + person.photo}
                    alt={person.name}
                    style={{
                        boxShadow: '-moz-initial',
                        WebkitBoxShadow: '5px 6px 50px grey'
                    }}
                />


                <Box
                    className = "personInfo"

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

            <Delimiter marginTop = '50px' paddingBottom = '50px'/>

            <Typography
                sx = {{
                    fontSize: '1.3rem',
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