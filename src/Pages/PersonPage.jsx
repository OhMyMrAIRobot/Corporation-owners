import React from 'react';
import MainContainer from "../Components/MainContainer";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import PersonHeader from "../Components/PersonHeader";
import MyTimeline from "../Components/MyTimeline"
import ImageCarousel from "../Components/ImageCarousel";
import {Typography} from "@mui/material";

const PersonPage = () => {
    const { t } = useTranslation();
    const params = useParams();
    const personId = 0;

    const persons = t("persons", { returnObjects: true });

    return (
        <div>
            <MainContainer>
                <PersonHeader
                    person={persons[personId]}
                />

                <Typography
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{
                        fontStyle: 'oblique',
                        fontWeight: 'medium',
                        textAlign: 'center',
                        marginTop: "1.5em"
                    }}
                >
                    {t("timeline")}
                </Typography>

                <MyTimeline
                    items={persons[personId].timelineItems}
                />

                <Typography
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{
                        fontStyle: 'oblique',
                        fontWeight: 'medium',
                        textAlign: 'center',
                        marginTop: "1.5em"
                    }}
                >
                    {t("photo")}
                </Typography>

                <ImageCarousel
                    items = {persons[personId].images}
                />
            </MainContainer>
        </div>
    );
};

export default PersonPage;