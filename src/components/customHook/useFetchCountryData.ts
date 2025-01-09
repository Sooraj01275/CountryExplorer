import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/Hooks"
import { fetchCountryData } from "../../redux/action/CountryAction"
import { Country } from "../../redux/reducers/CountrySlice"

export const useFetchCountryData = () => {
    const dispatch = useAppDispatch()
    const [countryList, setCountryList] = useState<Country[]>([])
    const [totalNoOfPage, setTotalNoOfPage] = useState<number>(0)
    const { region, country, page } = useAppSelector(state => state.country)

    useEffect(() => {
        dispatch(fetchCountryData())
    }, [])

    useEffect(() => {
        const filteredCountrydata = country?.filter(country => {
            if (region) {
                return country.region === region
            } else {
                return country
            }
        })
        setTotalNoOfPage(filteredCountrydata.length / 10)
        setCountryList(filteredCountrydata.slice(0, (10 * page)))
    }, [page, region, country])

    return { country: countryList, totalNoOfPage, page }
}