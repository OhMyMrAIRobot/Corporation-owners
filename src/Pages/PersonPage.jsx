import React from 'react';
import MainContainer from "../Components/MainContainer";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import PersonHeader from "../Components/PersonHeader/PersonHeader";
import MyTimeline from "../Components/MyTimeline"
import ImageCarousel from "../Components/ImageCarousel";
import {Typography} from "@mui/material";
import YouTube from "../Components/YouTube";
import GoogleMap from "../Components/GoogleMap";

const HeadText = ({text}) => {
    return (
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
            {text}
        </Typography>
    )
}

const PersonPage = () => {
    const { t } = useTranslation();
    const params = useParams();
    const personId = params.id - 1;

    const persons = t("persons", { returnObjects: true });

    return (
        <div>
            <MainContainer>
                <PersonHeader
                    person={persons[personId]}
                />

                <HeadText
                    text = {t("timeline")}
                />

                <MyTimeline
                    items={persons[personId].timelineItems}
                />

                <HeadText
                    text = {t("photos")}
                />

                <ImageCarousel
                    items = {persons[personId].images}
                />

                <HeadText
                    text = {t("YoutubeHeader")}
                />

                <YouTube
                    link = {persons[personId].youtube}
                />

                <HeadText
                    text = {t("MapHeader")}
                />

                <GoogleMap
                    link = {persons[personId].googlemap}
                />
            </MainContainer>
        </div>
    );
};

export default PersonPage;