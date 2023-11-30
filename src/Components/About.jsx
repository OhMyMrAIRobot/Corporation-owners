import { Typography, useTheme} from '@mui/material'
import Container from '@mui/material/Container'
import {useTranslation} from "react-i18next";

export function About() {
    const { t } = useTranslation();
    const theme = useTheme()
    theme.typography.h2 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '3.6rem',
        }
    }

    return (
        <Container>
            <Typography
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{
                    fontStyle: 'oblique',
                    fontWeight: 'medium',
                    textAlign: 'center',
                }}
            >
                {t("appName")}
            </Typography>

            <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
                sx={{
                    fontWeight: 'light',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}
            >
                {t("aboutPar1")}
            </Typography>

            <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                sx={{
                    fontWeight: 'light',
                    fontStyle: 'italic',
                    mx: 10,
                    textAlign: 'center'
                }}
            >
                {t("aboutPar2")}
            </Typography>
        </Container>
    )
}