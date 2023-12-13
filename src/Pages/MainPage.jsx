import React from 'react';
import MainContainer from "../Components/MainContainer";
import {About} from "../Components/About";
import {Authors} from "../Components/Authors";
import PersonOfTheDay from "../Components/PersonOfTheDay/PersonOfTheDay";
import Delimiter from "../Components/Delimiter";

let personId = -1;
if (personId < 0){
    personId = Math.floor(Math.random() * 6) + 1;
    console.log(personId);
}

const MainPage = () => {
    return (
        <div>
            <MainContainer>
                <About />
                <Delimiter marginTop = '50px'/>
                <PersonOfTheDay personId={personId}/>
                <Delimiter marginTop = '50px'/>
                <Authors />
            </MainContainer>
        </div>
    );
};

export default MainPage;