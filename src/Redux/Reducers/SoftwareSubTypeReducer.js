import { fetchSoftwareSubType } from "../../Services/SoftwareSubTypeService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  softwareSType: [],
  isLoading: false,
  error: {
    message: "",
    code: "",
  },
};


export const fetchSoftwareSubTypeList = createAsyncThunk(
  "/SoftwreSubType",
  async () => {
    const response = await fetchSoftwareSubType();
    console.log("res", response);
    return response.data;
  }
);

export const softwareSlice = createSlice({
  name: "softwaresubtype",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftwareSubTypeList.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchSoftwareSubTypeList.fulfilled, (state, action) => {
        state.softwareSType = action.payload.SoftwreSubType;
        state.isLoading = false;
      })

      .addCase(fetchSoftwareSubTypeList.rejected, (state) => {
        state.isLoading = false;
        state.softwareSType = [];
      });
  },
});
export const getSoftwareStypes = (state) => state.softwaresubtype.softwareSType;

export default softwareSlice.reducer;
