import Container from '@mui/material/Container'
import Box from "@mui/material/Box";
import {Author} from "./Author/Author";
import {Typography} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

export function Authors() {
    const { t } = useTranslation();
    const authors = [
        {
            path: "/Images/Author1.png",
            name: t('author1'),
            git: 'https://github.com/pokroshik',
            inst: 'https://www.instagram.com/oldimitry_/',
            tg: 'https://t.me/pokroshik',
        },
        {
            path: "/Images/Author2.png",
            name: t('author2'),
            git: 'https://github.com/OhMyMrAIRobot',
            inst: 'https://www.instagram.com/mrairobot/',
            tg: 'https://t.me/TheLullabyForDeath',
        },
        {
            path: "/Images/Author3.png",
            name: t('author3'),
            git: 'https://github.com/MeShok724',
            inst: 'https://www.instagram.com/mihail_gsk/',
            tg: 'https://t.me/ladydadyda',
        },
    ]

    return (
        <Container>
            <Typography
                variant='h2'
                align='center'
                color='text.primary'
                gutterBottom
                sx={{
                    marginTop: '50px',
                    fontStyle: "oblique",
                    fontWeight: "medium",
                    textAlign: "center",
                }}
            >
                {t('authors')}
            </Typography>

            <Box style={{
                display: 'flex',
                marginTop: '1em',
                flex: 'auto',
                flexWrap: 'wrap'
            }}>
                {authors.map((author, index) =>
                    <Author
                        path={author.path}
                        name={author.name}
                        git={author.git}
                        inst = {author.inst}
                        tg = {author.tg}
                        key={index} />
                )}
            </Box>
        </Container>
    )
}