import React from 'react';
import MainContainer from "../Components/MainContainer";
import {About} from "../Components/About";
import {Authors} from "../Components/Authors";
import PersonOfTheDay from "../Components/PersonOfTheDay";

const MainPage = () => {
    return (
        <div>
            <MainContainer>
                <About />
                <PersonOfTheDay/>
                <Authors />
            </MainContainer>
        </div>
    );
};

export default MainPage;