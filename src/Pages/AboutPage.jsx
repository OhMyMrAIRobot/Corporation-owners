import React from 'react';
import MainContainer from "../Components/MainContainer";
import {About} from "../Components/About";
import {Authors} from "../Components/Authors";

const AboutPage = () => {
    return (
        <div>
            <MainContainer>
                <About />
                <Authors />
            </MainContainer>
        </div>
    );
};

export default AboutPage;