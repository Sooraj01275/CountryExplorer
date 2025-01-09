import { Box, Skeleton, Typography } from "@mui/material"

export const CountryCardLoader = () => {
    return (
        <Box boxShadow={'8px 8px 0px 0px #0000001A'} gap={2} display={'flex'} border={'2px solid black'} bgcolor={'#F0F0F0'} p={2}>
            <Box width={'100px'} height={'100%'}>
                <Skeleton width={'100%'} height={'100%'} />
            </Box>
            <Box py={2} width={'100%'}>
                <Skeleton variant="text" width={'100%'} />
                <Skeleton variant="text" width={'100%'} />
            </Box>
        </Box>
    )
}