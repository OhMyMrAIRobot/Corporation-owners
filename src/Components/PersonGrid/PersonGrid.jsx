import * as React from 'react';
import {useTranslation} from "react-i18next";
import './PersonGrid.css'
import MainContainer from "../MainContainer";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Item = ({person}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return(
        <Card className = "cardPerson">
            <CardActionArea
                onClick={() => {
                    navigate(`/Person`);
                    window.scrollTo(0, 0);
                }}
            >
                <CardMedia
                    component="img"
                    height="auto"
                    src={person.photo}
                    alt="photo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {person.name}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {t("age")}{person.age}
                    </Typography>
                    {/*<Typography variant="body1" color="text.secondary">*/}
                    {/*    {person.description}*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}



export default function PersonGrid() {

    const { t } = useTranslation();

    const persons = t("persons", { returnObjects: true });

    return (
        <MainContainer>
            <Box class = "BoxItems">
                <Item person={persons[0]}/>
                <Item person={persons[0]}/>
                <Item person={persons[0]}/>
            </Box>
        </MainContainer>
    );
}