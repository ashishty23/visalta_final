// // import { createSlice } from "@reduxjs/toolkit"

// // const initialState = {
// //   user: null,
// //   loading: false,
// // }

// // const profileSlice = createSlice({
// //   name: "profile",
// //   initialState: initialState,
// //   reducers: {
// //     setUser(state, value) {
// //       state.user = value.payload
// //     },
// //     setLoading(state, value) {
// //       state.loading = value.payload
// //     },
// //   },
// // })

// // export const { setUser, setLoading } = profileSlice.actions

// // export default profileSlice.reducer



// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
//   loading: false,
// }

// const profileSlice = createSlice({
//   name: "profile",
//   initialState: initialState,
//   reducers: {
//     setUser(state, value) {
//       state.user = value.payload
//       // Persist user data to localStorage
//       localStorage.setItem("user", JSON.stringify(value.payload))
//     },
//     setLoading(state, value) {
//       state.loading = value.payload
//     },
//     logout(state) {
//       state.user = null
//       // Clear user data from localStorage
//       localStorage.removeItem("user")
//       localStorage.removeItem("token")
//     },
//   },
// })

//  export const { setUser, setLoading } = profileSlice.actions

// export default profileSlice.reducer



import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer
