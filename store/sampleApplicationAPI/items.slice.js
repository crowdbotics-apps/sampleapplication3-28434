import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_item_list = createAsyncThunk(
  "items/api_v1_item_list",
  async payload => {
    const response = await apiService.api_v1_item_list(payload)
    return response.data
  }
)
export const api_v1_item_create = createAsyncThunk(
  "items/api_v1_item_create",
  async payload => {
    const response = await apiService.api_v1_item_create(payload)
    return response.data
  }
)
export const api_v1_item_read = createAsyncThunk(
  "items/api_v1_item_read",
  async payload => {
    const response = await apiService.api_v1_item_read(payload)
    return response.data
  }
)
export const api_v1_item_update = createAsyncThunk(
  "items/api_v1_item_update",
  async payload => {
    const response = await apiService.api_v1_item_update(payload)
    return response.data
  }
)
export const api_v1_item_partial_update = createAsyncThunk(
  "items/api_v1_item_partial_update",
  async payload => {
    const response = await apiService.api_v1_item_partial_update(payload)
    return response.data
  }
)
export const api_v1_item_delete = createAsyncThunk(
  "items/api_v1_item_delete",
  async payload => {
    const response = await apiService.api_v1_item_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_item_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_item_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_item_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_item_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_item_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_item_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_item_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_item_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_item_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_item_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_item_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_item_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_item_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_item_list,
  api_v1_item_create,
  api_v1_item_read,
  api_v1_item_update,
  api_v1_item_partial_update,
  api_v1_item_delete,
  slice: itemsSlice
}
