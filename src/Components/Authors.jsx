import Container from '@mui/material/Container'
import Box from "@mui/material/Box";
import {Author} from "./Author";
import {Typography} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

export function Authors() {
    const { t } = useTranslation();
    const authors = [
        { path: "/Images/img_3.png", name: t('author1'), link: 'https://github.com/' },
        { path: "/Images/img_3.png", name: t('author2'), link: 'https://github.com/' },
        { path: "/Images/img_3.png", name: t('author3'), link: 'https://github.com/' },
    ]

    return (
        <Container>
            <Typography
                variant='h2'
                align='center'
                color='text.primary'
                gutterBottom
                sx={{
                    marginTop: '2em',
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
                    <Author path={author.path} name={author.name} link={author.link} key={index} />
                )}
            </Box>
        </Container>
    )
}