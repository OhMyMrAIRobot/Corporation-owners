import React from 'react';
import MainContainer from "../Components/MainContainer";
import {About} from "../Components/About";
import {Authors} from "../Components/Authors";
import PersonOfTheDay from "../Components/PersonOfTheDay";

const personId = localStorage.getItem('randomId') - 1;

const MainPage = () => {
    return (
        <div>
            <MainContainer>
                <About />
                <PersonOfTheDay personId={3}/>
                <Authors />
            </MainContainer>
        </div>
    );
};

export default MainPage;