import { fetchSoftwareTypeList } from "../../Services/SoftwaretypeListService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  softwareTypelist: [],
  isLoading: false,
  error: {
    message: "",
    code: "",
  },
};

export const fetchSoftwareTypeListDetails = createAsyncThunk(
  "/Softwaretype",
  async () => {
    const response = await fetchSoftwareTypeList();
    console.log("res", response);
    return response.data;
  }
);

export const softwareTypeListSlice = createSlice({
  name: "softwareType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftwareTypeListDetails.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSoftwareTypeListDetails.fulfilled, (state, action) => {
        state.softwareTypelist = action.payload.Softwaretype;
        state.isLoading = false;
      })

      .addCase(fetchSoftwareTypeListDetails.rejected, (state) => {
        state.isLoading = false;
        state.softwareTypelist = [];
      });
  },
});
export const getSoftwareTypeList = (state) => state.softwareType.softwareTypelist;

export default softwareTypeListSlice.reducer;
