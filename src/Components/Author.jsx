import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";

export function Author({path, name, link}) {

    return (
        <Box
            style={{ height: '15em', width: '12.5em' }}
            display='flex'
            alignItems='center'
            flexDirection='column'
            margin='auto'
        >
            <Box
                style={{ height: '9.em', width: '10.5em' }}
                display='flex'
                justifyContent='center'
            >
                <img
                    src={path}
                    alt={name}
                    height={'150em'}
                    width={'150em'}
                    style={{
                        boxShadow: '-moz-initial',
                        cursor: 'pointer',
                        borderRadius: '75px',
                        WebkitBoxShadow: '5px 6px 200px grey'
                    }}
                    onClick={() => window.open(link)}
                />
            </Box>
            <Box style={{
                marginTop: '0.5em'
            }}>
                <Typography style={{
                    textAlign: 'center',
                    fontStyle: 'oblique',
                    fontFamily: 'Jira',
                    fontSize: '1.2em',
                    color: 'rgba(0, 0, 0, 0.8)'
                }}>
                    {name}
                </Typography>
            </Box>
        </Box>
    )
}