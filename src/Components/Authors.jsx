import Container from '@mui/material/Container'
import Box from "@mui/material/Box";
import img from "../Images/img.png"
import {Author} from "./Author";

export function Authors() {

    const authors = [
        { path: img, name: 'author1', link: '/' },
        { path: img, name: 'author2', link: '/' },
        { path: img, name: 'author3', link: '/' },
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