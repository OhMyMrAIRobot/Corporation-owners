import React from 'react';
import MainContainer from "../Components/MainContainer";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import PersonHeader from "../Components/PersonHeader/PersonHeader";
import MyTimeline from "../Components/MyTimeline"
import ImageCarousel from "../Components/Carousel/ImageCarousel";

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
                <MyTimeline
                    items={persons[personId].timelineItems}
                />

                <ImageCarousel
                    items = {persons[personId].images}
                />
            </MainContainer>
        </div>
    );
};

export default PersonPage;