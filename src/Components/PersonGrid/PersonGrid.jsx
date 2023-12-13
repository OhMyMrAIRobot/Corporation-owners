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
        <Card
            className = "cardPerson"
            sx = {{
                backgroundColor: 'inherit',
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 10px grey',
                cursor: 'pointer',
                transition: 'all 1s ease',
            }}
              onClick={() => {
                  navigate(`/Corporation-owners/Persons/${person.id}`);
                  window.scrollTo(0, 0);
              }}
            >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    src={process.env.PUBLIC_URL + person.photo}
                    alt="photo"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {person.name}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {person.activity}
                    </Typography>
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
            <Box className = "BoxItems">
                {persons.map((item, key) =>(
                    <Item person={persons[key]}/>
                ))}
            </Box>
        </MainContainer>
    );
}


