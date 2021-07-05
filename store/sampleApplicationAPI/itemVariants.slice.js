import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_itemvariant_list = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_list",
  async payload => {
    const response = await apiService.api_v1_itemvariant_list(payload)
    return response.data
  }
)
export const api_v1_itemvariant_create = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_create",
  async payload => {
    const response = await apiService.api_v1_itemvariant_create(payload)
    return response.data
  }
)
export const api_v1_itemvariant_read = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_read",
  async payload => {
    const response = await apiService.api_v1_itemvariant_read(payload)
    return response.data
  }
)
export const api_v1_itemvariant_update = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_update",
  async payload => {
    const response = await apiService.api_v1_itemvariant_update(payload)
    return response.data
  }
)
export const api_v1_itemvariant_partial_update = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_partial_update",
  async payload => {
    const response = await apiService.api_v1_itemvariant_partial_update(payload)
    return response.data
  }
)
export const api_v1_itemvariant_delete = createAsyncThunk(
  "itemVariants/api_v1_itemvariant_delete",
  async payload => {
    const response = await apiService.api_v1_itemvariant_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const itemVariantsSlice = createSlice({
  name: "itemVariants",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_itemvariant_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_itemvariant_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_itemvariant_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_itemvariant_list,
  api_v1_itemvariant_create,
  api_v1_itemvariant_read,
  api_v1_itemvariant_update,
  api_v1_itemvariant_partial_update,
  api_v1_itemvariant_delete,
  slice: itemVariantsSlice
}
