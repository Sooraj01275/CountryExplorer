import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchCountryData = createAsyncThunk('country/fetchCountry',
    async (payload, thunk) => {
        try {
            const countryRes = await api.fetchGet('v2/all?fields=name,region,flag');
            return countryRes?.data;
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || "Something went wrong!";
            return thunk.rejectWithValue(errorMessage);
        }
    }
)