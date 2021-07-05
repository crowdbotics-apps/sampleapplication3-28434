import axios from "axios"
const sampleApplicationAPI = axios.create({
  baseURL: "https://sampleapplication3-28434-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_bill_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/bill/`)
}
function api_v1_bill_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/bill/`, payload.data)
}
function api_v1_bill_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/bill/${payload.id}/`)
}
function api_v1_bill_update(payload) {
  return sampleApplicationAPI.put(`/api/v1/bill/${payload.id}/`, payload.data)
}
function api_v1_bill_partial_update(payload) {
  return sampleApplicationAPI.patch(`/api/v1/bill/${payload.id}/`, payload.data)
}
function api_v1_bill_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/bill/${payload.id}/`)
}
function api_v1_category_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/category/`, payload.data)
}
function api_v1_category_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/category/${payload.id}/`)
}
function api_v1_category_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/category/${payload.id}/`,
    payload.data
  )
}
function api_v1_category_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/category/${payload.id}/`,
    payload.data
  )
}
function api_v1_category_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/category/${payload.id}/`)
}
function api_v1_contactinfo_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/contactinfo/`)
}
function api_v1_contactinfo_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/contactinfo/`, payload.data)
}
function api_v1_contactinfo_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/contactinfo/${payload.id}/`)
}
function api_v1_contactinfo_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/contactinfo/${payload.id}/`,
    payload.data
  )
}
function api_v1_contactinfo_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/contactinfo/${payload.id}/`,
    payload.data
  )
}
function api_v1_contactinfo_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/contactinfo/${payload.id}/`)
}
function api_v1_country_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/country/`)
}
function api_v1_country_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/country/`, payload.data)
}
function api_v1_country_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/country/${payload.id}/`)
}
function api_v1_country_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/country/${payload.id}/`,
    payload.data
  )
}
function api_v1_country_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/country/${payload.id}/`,
    payload.data
  )
}
function api_v1_country_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/country/${payload.id}/`)
}
function api_v1_customtext_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/customtext/`, payload.data)
}
function api_v1_customtext_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/customtext/${payload.id}/`,
    payload.data
  )
}
function api_v1_customtext_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/customtext/${payload.id}/`,
    payload.data
  )
}
function api_v1_customtext_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_driverorder_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/driverorder/`)
}
function api_v1_driverorder_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/driverorder/`, payload.data)
}
function api_v1_driverorder_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/driverorder/${payload.id}/`)
}
function api_v1_driverorder_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/driverorder/${payload.id}/`,
    payload.data
  )
}
function api_v1_driverorder_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/driverorder/${payload.id}/`,
    payload.data
  )
}
function api_v1_driverorder_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/driverorder/${payload.id}/`)
}
function api_v1_driverprofile_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/driverprofile/`)
}
function api_v1_driverprofile_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/driverprofile/`, payload.data)
}
function api_v1_driverprofile_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/driverprofile/${payload.id}/`)
}
function api_v1_driverprofile_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/driverprofile/${payload.id}/`,
    payload.data
  )
}
function api_v1_driverprofile_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/driverprofile/${payload.id}/`,
    payload.data
  )
}
function api_v1_driverprofile_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/driverprofile/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/homepage/`, payload.data)
}
function api_v1_homepage_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/homepage/${payload.id}/`,
    payload.data
  )
}
function api_v1_homepage_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/homepage/${payload.id}/`,
    payload.data
  )
}
function api_v1_homepage_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_item_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/item/`)
}
function api_v1_item_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/item/`, payload.data)
}
function api_v1_item_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/item/${payload.id}/`)
}
function api_v1_item_update(payload) {
  return sampleApplicationAPI.put(`/api/v1/item/${payload.id}/`, payload.data)
}
function api_v1_item_partial_update(payload) {
  return sampleApplicationAPI.patch(`/api/v1/item/${payload.id}/`, payload.data)
}
function api_v1_item_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/item/${payload.id}/`)
}
function api_v1_itemvariant_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/itemvariant/`)
}
function api_v1_itemvariant_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/itemvariant/`, payload.data)
}
function api_v1_itemvariant_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/itemvariant/${payload.id}/`)
}
function api_v1_itemvariant_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/itemvariant/${payload.id}/`,
    payload.data
  )
}
function api_v1_itemvariant_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/itemvariant/${payload.id}/`,
    payload.data
  )
}
function api_v1_itemvariant_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/itemvariant/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/login/`)
}
function api_v1_order_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/order/`)
}
function api_v1_order_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/order/`, payload.data)
}
function api_v1_order_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/order/${payload.id}/`)
}
function api_v1_order_update(payload) {
  return sampleApplicationAPI.put(`/api/v1/order/${payload.id}/`, payload.data)
}
function api_v1_order_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/order/${payload.id}/`,
    payload.data
  )
}
function api_v1_order_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/order/${payload.id}/`)
}
function api_v1_paymentmethod_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/paymentmethod/`, payload.data)
}
function api_v1_paymentmethod_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/paymentmethod/${payload.id}/`)
}
function api_v1_paymentmethod_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/paymentmethod/${payload.id}/`,
    payload.data
  )
}
function api_v1_paymentmethod_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/paymentmethod/${payload.id}/`,
    payload.data
  )
}
function api_v1_paymentmethod_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/paymentmethod/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/profile/`, payload.data)
}
function api_v1_profile_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return sampleApplicationAPI.put(
    `/api/v1/profile/${payload.id}/`,
    payload.data
  )
}
function api_v1_profile_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/profile/${payload.id}/`,
    payload.data
  )
}
function api_v1_profile_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_review_list(payload) {
  return sampleApplicationAPI.get(`/api/v1/review/`)
}
function api_v1_review_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/review/`, payload.data)
}
function api_v1_review_read(payload) {
  return sampleApplicationAPI.get(`/api/v1/review/${payload.id}/`)
}
function api_v1_review_update(payload) {
  return sampleApplicationAPI.put(`/api/v1/review/${payload.id}/`, payload.data)
}
function api_v1_review_partial_update(payload) {
  return sampleApplicationAPI.patch(
    `/api/v1/review/${payload.id}/`,
    payload.data
  )
}
function api_v1_review_delete(payload) {
  return sampleApplicationAPI.delete(`/api/v1/review/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return sampleApplicationAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return sampleApplicationAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return sampleApplicationAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return sampleApplicationAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return sampleApplicationAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return sampleApplicationAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return sampleApplicationAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return sampleApplicationAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return sampleApplicationAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return sampleApplicationAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return sampleApplicationAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return sampleApplicationAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_bill_list,
  api_v1_bill_create,
  api_v1_bill_read,
  api_v1_bill_update,
  api_v1_bill_partial_update,
  api_v1_bill_delete,
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_contactinfo_list,
  api_v1_contactinfo_create,
  api_v1_contactinfo_read,
  api_v1_contactinfo_update,
  api_v1_contactinfo_partial_update,
  api_v1_contactinfo_delete,
  api_v1_country_list,
  api_v1_country_create,
  api_v1_country_read,
  api_v1_country_update,
  api_v1_country_partial_update,
  api_v1_country_delete,
  api_v1_customtext_list,
  api_v1_customtext_create,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_customtext_delete,
  api_v1_driverorder_list,
  api_v1_driverorder_create,
  api_v1_driverorder_read,
  api_v1_driverorder_update,
  api_v1_driverorder_partial_update,
  api_v1_driverorder_delete,
  api_v1_driverprofile_list,
  api_v1_driverprofile_create,
  api_v1_driverprofile_read,
  api_v1_driverprofile_update,
  api_v1_driverprofile_partial_update,
  api_v1_driverprofile_delete,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_delete,
  api_v1_item_list,
  api_v1_item_create,
  api_v1_item_read,
  api_v1_item_update,
  api_v1_item_partial_update,
  api_v1_item_delete,
  api_v1_itemvariant_list,
  api_v1_itemvariant_create,
  api_v1_itemvariant_read,
  api_v1_itemvariant_update,
  api_v1_itemvariant_partial_update,
  api_v1_itemvariant_delete,
  api_v1_login_create,
  api_v1_order_list,
  api_v1_order_create,
  api_v1_order_read,
  api_v1_order_update,
  api_v1_order_partial_update,
  api_v1_order_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_review_list,
  api_v1_review_create,
  api_v1_review_read,
  api_v1_review_update,
  api_v1_review_partial_update,
  api_v1_review_delete,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
