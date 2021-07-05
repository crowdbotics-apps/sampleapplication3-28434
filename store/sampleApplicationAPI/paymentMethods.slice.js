import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_paymentmethod_list = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_list",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_list(payload)
    return response.data
  }
)
export const api_v1_paymentmethod_create = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_create",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_create(payload)
    return response.data
  }
)
export const api_v1_paymentmethod_read = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_read",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_read(payload)
    return response.data
  }
)
export const api_v1_paymentmethod_update = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_update",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_update(payload)
    return response.data
  }
)
export const api_v1_paymentmethod_partial_update = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_partial_update",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_paymentmethod_delete = createAsyncThunk(
  "paymentMethods/api_v1_paymentmethod_delete",
  async payload => {
    const response = await apiService.api_v1_paymentmethod_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const paymentMethodsSlice = createSlice({
  name: "paymentMethods",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_paymentmethod_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_paymentmethod_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_paymentmethod_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  slice: paymentMethodsSlice
}
