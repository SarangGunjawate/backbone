import { fetchSoftwareList } from "../../Services/SoftwareService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  softList: [],
  isLoading: false,
  error: {
    message: "",
    code: "",
  },
};

export const fetchSoftwareListDetails = createAsyncThunk(
  "/Software",
  async () => {
    const response = await fetchSoftwareList();
    console.log("res", response.data);
    return response.data;
  }
);

export const softwareSlice = createSlice({
  name: "software",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftwareListDetails.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSoftwareListDetails.fulfilled, (state, action) => {
        // const payload = action.payload.Software;
        // console.log('payload', payload)
        // state.softList = payload.Software;
        // delete payload.Software;
        // state.isLoading = false;
        state.softList = action.payload.Software;
        state.isLoading = false;
      })

      .addCase(fetchSoftwareListDetails.rejected, (state) => {
        state.isLoading = false;
        state.softList = [];
      });
  },
});
export const getSoftwareList = (state) => state.software.softList;

export default softwareSlice.reducer;
