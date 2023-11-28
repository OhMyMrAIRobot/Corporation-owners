import Container from '@mui/material/Container'
import Box from "@mui/material/Box";
import {Author} from "./Author";

export function Authors() {

    const authors = [
        { path: "../Images/img111.png", name: 'author1', link: '/' },
        { path: "../Images/img111.png", name: 'author2', link: '/' },
        { path: "../Images/img111.png", name: 'author3', link: '/' },
    ]

    return (
        <Container>
            <Box style={{
                display: 'flex',
                marginTop: '5em',
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