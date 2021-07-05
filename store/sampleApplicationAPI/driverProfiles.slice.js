import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_driverprofile_list = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_list",
  async payload => {
    const response = await apiService.api_v1_driverprofile_list(payload)
    return response.data
  }
)
export const api_v1_driverprofile_create = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_create",
  async payload => {
    const response = await apiService.api_v1_driverprofile_create(payload)
    return response.data
  }
)
export const api_v1_driverprofile_read = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_read",
  async payload => {
    const response = await apiService.api_v1_driverprofile_read(payload)
    return response.data
  }
)
export const api_v1_driverprofile_update = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_update",
  async payload => {
    const response = await apiService.api_v1_driverprofile_update(payload)
    return response.data
  }
)
export const api_v1_driverprofile_partial_update = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_partial_update",
  async payload => {
    const response = await apiService.api_v1_driverprofile_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_driverprofile_delete = createAsyncThunk(
  "driverProfiles/api_v1_driverprofile_delete",
  async payload => {
    const response = await apiService.api_v1_driverprofile_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const driverProfilesSlice = createSlice({
  name: "driverProfiles",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_driverprofile_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_driverprofile_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_driverprofile_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_driverprofile_list,
  api_v1_driverprofile_create,
  api_v1_driverprofile_read,
  api_v1_driverprofile_update,
  api_v1_driverprofile_partial_update,
  api_v1_driverprofile_delete,
  slice: driverProfilesSlice
}
