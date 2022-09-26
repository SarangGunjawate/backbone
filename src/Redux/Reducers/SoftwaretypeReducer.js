import { fetchSoftwareTypeList, getSoftwareTypeDetails, UpdateSoftwareType } from "../../Services/SoftwaretypeListService";
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
  "/software/Softwaretype/user_id",
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

export const editSoftwareType = createAsyncThunk(
  "/Softwaretype/edit_user_id",
  async ({ userId, parameters }) => {
    try {
      const response = await UpdateSoftwareType(userId, parameters);
      const resData = response.data;
      if (response.status == 200) {
        return resData;
      } else {
        return resData.error.message;
      }
    } catch (error) {
      console.log('err', error);
    }
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

      .addCase(editSoftwareType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editSoftwareType.fulfilled, (state, action) => {
        // update existing record
        state.isLoading = false;
        const softwareDetails = action.payload.data.Softwaretype;

        const updatedSoftType = {
          name: softwareDetails.name,
          discription: softwareDetails.discription,
          created_by: softwareDetails.created_by,
          updated_by: softwareDetails.updated_by,
        };

        const updatedValue = state.softwareTypelist.map((software, index) => {
          if (software.id === softwareDetails.id) {
            return { ...software, ...updatedSoftType };
          } else {
            return software;
          }
        });

        state.softwareTypelist = updatedValue;
        state.shouldShowRightPanel = false;
      })
      .addCase(editSoftwareType.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const getSoftwareTypeList = (state) => state.softwareType.softwareTypelist;

export default softwareTypeListSlice.reducer;
