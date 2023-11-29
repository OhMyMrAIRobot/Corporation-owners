import React, {useState} from 'react';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";

const Item = (props) => {
    return (
        <Paper>
            <div
                style = {{
                    backgroundImage: `url(${props.path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                }}
            >
            </div>
        </Paper>
    )
}

const ImageCarousel = ({items}) => {
    return (
        <Carousel>
            {items.map((item) =>(
                <Item path = {item} />
                ))}
        </Carousel>
    );
};

export default ImageCarousel;