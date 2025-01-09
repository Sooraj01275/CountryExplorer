import { Box, Button, IconButton, Typography } from "@mui/material";
import { useFetchCountryData } from "../../components/customHook/useFetchCountryData";
import { Slider } from "./components/Slider";
import { CountryCard } from "./components/CountryCard";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { CountryAction } from "../../redux/reducers/CountrySlice";
import { Google } from "../../components/icons/Google";
import { CopyrightOutlined, LinkedIn, Twitter } from "@mui/icons-material";
import { FaceBook } from "../../components/icons/Facebook";
import ContinentNavbar from "../../components/navBar/NavBar";
import { CountryCardLoader } from "./components/CountryLoader";

export default function HomePage() {

    const { country, totalNoOfPage, page } = useFetchCountryData()
    const { loading } = useAppSelector(state => state.country)
    const dispatch = useAppDispatch()

    const loadMoreHandler = () => {
        dispatch(CountryAction.patchState({ page: page + 1 }))
    }
    return (
        <Box p={'40px 80px'}>
            <Box display={"flex"} justifyContent={'space-between'}>
                <Typography fontSize={'16px'} fontWeight={600}>Countries</Typography>
                <ContinentNavbar />
            </Box>
            <Box display={{ xs: 'unset', sm: 'flex' }}>
                <hr style={{ margin: '5px' }} className="line" />
                <Typography fontWeight={600} fontSize={'16px'} px={2}>WELCOME</Typography>
                <hr className="line" />
            </Box>
            <Slider />
            <Box my={2} gap={2} display={'grid'} sx={{
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            }}>
                {loading ? Array.from({ length: 10 }).map((item, index) => <CountryCardLoader key={index} />) : country?.length ? country.map((countryData) => <CountryCard key={`${countryData.name}${countryData.region}`} country={countryData} />) : <Box className='flexCenterCenter'><Typography>No Data Found</Typography></Box>}
            </Box>
            {totalNoOfPage !== page && country.length && !loading ? <Box className='flexCenterCenter'>
                <Button variant="contained" onClick={loadMoreHandler}>Load More</Button>
            </Box> : null}
            <Box className='flexCenterCenter' flexDirection={'column'}>
                <Box display={'flex'} gap={2} my={3} justifyContent={'space-around'}>
                    <IconButton className={'iconbutton'}>
                        <Google />
                    </IconButton>
                    <IconButton className={'iconbutton'}>
                        <FaceBook />
                    </IconButton>
                    <IconButton className={'iconbutton'}>
                        <LinkedIn />
                    </IconButton>
                    <IconButton className={'iconbutton'}>
                        <Twitter />
                    </IconButton>
                </Box>
                <Box>
                    <Typography mb={1}>Example@gmail.com</Typography>
                    <Typography>Copyright <span><CopyrightOutlined /></span> 2020 Name. All rights reserved</Typography>
                </Box>
            </Box>
        </Box>
    )
}