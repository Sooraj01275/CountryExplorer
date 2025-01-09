import { Box, Typography } from "@mui/material"
import { Country } from "../../../redux/reducers/CountrySlice"

export const CountryCard = ({ country }: { country: Country }) => {
    return (
        <Box boxShadow={'8px 8px 0px 0px #0000001A'} gap={2} display={'flex'} border={'2px solid black'} bgcolor={'#F0F0F0'} p={2}>
            <Box>
                <img src={country?.flag} height={'100px'} width={'100px'} />
            </Box>
            <Box py={2}>
                <Typography fontWeight={600}>{country?.name}</Typography>
                <Typography textAlign={'start'} sx={{ color: '#6F6F6F' }} fontSize={'12px'}>{country?.region}</Typography>
            </Box>
        </Box>
    )
}