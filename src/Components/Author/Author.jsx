import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import './Author.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons"


export function Author({path, name, git, inst, tg}) {

    return (
        <Box
            style={{
                height: '15em',
                width: '12.5em'
        }}
            display='flex'
            alignItems='center'
            flexDirection='column'
            margin='auto'
        >
            <Box
                className = "authorContainer"
                sx={{
                    height: '9.em',
                    width: '10.5em',
                    display: 'flex',
                    justifyContent: 'center',
                    transition: '1s',
                }}
            >
                <img src={process.env.PUBLIC_URL + path} alt={name}
                    height={'150em'}
                    width={'150em'}
                    style={{
                        boxShadow: '-moz-initial',
                        cursor: 'pointer',
                        borderRadius: '75px',
                        WebkitBoxShadow: '5px 6px 200px grey',
                    }}
                    onClick={() => window.open(git)}
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
                <Box
                    className = 'test'
                    sx = {{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '5px',
                    }}
                >
                    <a
                        className="authorSocial"
                        href={git}
                        target="_blank" rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} fontSize='2rem'/>
                    </a>
                    <a
                        className="authorSocial"
                        href={inst}
                        target="_blank" rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} fontSize='2rem'/>
                    </a>
                    <a
                        className="authorSocial"
                        href={tg}
                        target="_blank" rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTelegram} fontSize='2rem'/>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}