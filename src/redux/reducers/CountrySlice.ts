import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCountryData } from "../action/CountryAction";

export interface Country {
    name: string;
    region: string;
    flag: string;
    independent: boolean;
}


export interface CountryState {
    country: Array<Country>;
    region: string | null;
    loading: boolean;
    page: number;
}

const initialState: CountryState = {
    country: [],
    region: null,
    loading: false,
    page: 1
}

const CountrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        patchState(state,
            action: PayloadAction<Partial<CountryState>>) {
            return { ...state, ...action.payload }
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchCountryData.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCountryData.fulfilled, (state, { payload }) => {
            state.country = payload
            state.loading = false
            state.page = 1
        })
        builder.addCase(fetchCountryData.rejected, (state) => {
            state.country = []
            state.loading = false
            state.page = 1
        })
    },
});

export const CountryAction = CountrySlice.actions;
export default CountrySlice.reducer;