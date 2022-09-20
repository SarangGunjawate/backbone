import { fetchSoftwareTypeList, getSoftwareTypeDetails } from "../../Services/SoftwaretypeListService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // softwaretypeDetails: {
  //   id: null,
  //   name: null,
  //   discription: null,
  //   created_by: null,
  //   updated_by: null,
  //   created_on: null,
  //   updated_on: null,
  //   is_active: null,
  // },
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

// export const fetchSoftTypeDetails = createAsyncThunk(
//   "/Softwaretype/id",
//   async (userId) => {
//     const response = await getSoftwareTypeDetails(userId);
//     return response.data;
//   }
// );

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
      })

      // .addCase(fetchSoftTypeDetails.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchSoftTypeDetails.fulfilled, (state, action) => {
      //   state.softwaretypeDetails = {
      //     ...action.payload.data.user,
      //   };
      //   state.isLoading = false;
      // })
      // .addCase(fetchSoftTypeDetails.rejected, (state) => {
      //   state.isLoading = false;
      //   state.usersList = [];
      // })
  },
});
export const getSoftwareTypeList = (state) => state.softwareType.softwareTypelist;

export default softwareTypeListSlice.reducer;
