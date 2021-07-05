import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_contactinfo_list = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_list",
  async payload => {
    const response = await apiService.api_v1_contactinfo_list(payload)
    return response.data
  }
)
export const api_v1_contactinfo_create = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_create",
  async payload => {
    const response = await apiService.api_v1_contactinfo_create(payload)
    return response.data
  }
)
export const api_v1_contactinfo_read = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_read",
  async payload => {
    const response = await apiService.api_v1_contactinfo_read(payload)
    return response.data
  }
)
export const api_v1_contactinfo_update = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_update",
  async payload => {
    const response = await apiService.api_v1_contactinfo_update(payload)
    return response.data
  }
)
export const api_v1_contactinfo_partial_update = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_partial_update",
  async payload => {
    const response = await apiService.api_v1_contactinfo_partial_update(payload)
    return response.data
  }
)
export const api_v1_contactinfo_delete = createAsyncThunk(
  "contactInfos/api_v1_contactinfo_delete",
  async payload => {
    const response = await apiService.api_v1_contactinfo_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const contactInfosSlice = createSlice({
  name: "contactInfos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_contactinfo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactinfo_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactinfo_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_contactinfo_list,
  api_v1_contactinfo_create,
  api_v1_contactinfo_read,
  api_v1_contactinfo_update,
  api_v1_contactinfo_partial_update,
  api_v1_contactinfo_delete,
  slice: contactInfosSlice
}
