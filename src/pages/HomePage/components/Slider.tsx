import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

export const Slider = () => {
    const [activePostIndex, setActivePostIndex] = useState(0);
    const posts = [
        { id: 1, imgurl: '/images/slider.png' },
        { id: 2, imgurl: '/images/slider.png' },
        { id: 3, imgurl: '/images/slider.png' },
        { id: 4, imgurl: '/images/slider.png' }
    ];

    const changeSlide = (isForward: boolean) => {
        setActivePostIndex(prev => isForward 
            ? (prev + 1) % posts.length 
            : (prev - 1 + posts.length) % posts.length
        );
    };

    const getNextIndex = () => (activePostIndex + 1) % posts.length;

    return (
        <Box>
            <Box 
                position="relative" 
                display="grid" 
                gridTemplateColumns={{ xs: '1fr', sm: '2.5fr 0.5fr' }} 
                gap={{ xs: 3, sm: 5 }} 
                overflow="hidden"
            >
                <Box 
                    border="2px solid black" 
                    height={{ xs: '250px', sm: '450px' }} 
                    bgcolor="#F0F0F0" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    gridRow={2}
                >
                    <img src={posts[activePostIndex]?.imgurl} width="100px" />
                </Box>
                <Box 
                    border="2px solid black" 
                    height={{ xs: '150px', sm: '450px' }} 
                    bgcolor="#F0F0F0" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    gridRow={1}
                >
                    <img src={posts[getNextIndex()]?.imgurl} width="100px" />
                </Box>
                <Box position="absolute" bottom="10px" left="35%" display="flex" alignItems="center">
                    <IconButton onClick={() => changeSlide(false)}>
                        <ArrowBack />
                    </IconButton>
                    {posts.map((_, index) => (
                        <span key={index} className={index === activePostIndex ? "dot-active" : "dot"} />
                    ))}
                    <IconButton onClick={() => changeSlide(true)}>
                        <ArrowForward />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
