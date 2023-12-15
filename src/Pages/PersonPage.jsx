import React from 'react';
import MainContainer from "../Components/MainContainer";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import PersonHeader from "../Components/PersonHeader/PersonHeader";
import ImageCarousel from "../Components/ImageCarousel/ImageCarousel";
import {Typography} from "@mui/material";
import YouTube from "../Components/YouTube/YouTube";
import GoogleMap from "../Components/GoogleMap/GoogleMap";
import Delimiter from "../Components/Delimiter";
import Timeline from "../Components/Timeline/Timeline";

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

                <Delimiter marginTop = '50px' paddingBottom = '50px'/>

                <HeadText
                    text = {t("timeline")}
                />

                <Timeline
                    items={persons[personId].timelineItems}
                />

                <Delimiter marginTop = '50px' paddingBottom = '50px'/>

                <HeadText
                    text = {t("photos")}
                />

                <ImageCarousel
                    items = {persons[personId].images}
                />

                <Delimiter marginTop = '50px' paddingBottom = '50px'/>

                <HeadText
                    text = {t("YoutubeHeader")}
                />

                <YouTube
                    link = {persons[personId].youtube}
                />

                <Delimiter marginTop = '50px' paddingBottom = '50px'/>

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