import React from 'react';
import { Container, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function MainContainer(props) {
    const theme = useTheme();

    return (
        <Box
            flex={1}
            overflow="auto"
            display="flex"
        >
            <Container
                maxWidth='md'
                sx={{
                    paddingTop: 2,
                    padding: { xs: 0.5, md: 5 },
                    backgroundColor: theme.palette.background.paper
                }}
            >
                {props.children && props.children}
            </Container>
        </Box>
    );
}