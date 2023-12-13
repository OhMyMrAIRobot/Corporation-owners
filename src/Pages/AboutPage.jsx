import React from 'react';
import MainContainer from "../Components/MainContainer";
import {About} from "../Components/About";
import {Authors} from "../Components/Authors";
import Delimiter from "../Components/Delimiter";

const AboutPage = () => {
    return (
        <div>
            <MainContainer>
                <About />
                <Delimiter marginTop = '50px'/>
                <Authors />
            </MainContainer>
        </div>
    );
};

export default AboutPage;