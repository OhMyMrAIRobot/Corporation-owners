import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import './PersonGrid.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PersonGrid() {

    const { t } = useTranslation();
    const params = useParams();
    const personId = 0;

    const persons = t("persons", { returnObjects: true });

    return (
        <Box
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    sx = {{
                        cursor: "pointer"
                    }}
                    container spacing={8}>
                    <Grid item xs={6}>
                        <Item>
                            <img className = "PersonImg"
                                src = "../Images/img.png"/>
                            {persons[0].name}
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <img className = "PersonImg"
                                 src = "../Images/img_2.png"/>
                            {persons[0].name}
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>{persons[0].name}</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>{persons[0].name}</Item>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}