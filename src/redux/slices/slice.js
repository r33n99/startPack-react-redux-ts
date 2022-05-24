import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  
};

// export const getDataBooks = createAsyncThunk("books/BooksData", async () => {
//   const response = await axios.get(
//     "https://6149965f07549f001755a467.mockapi.io/books"
//   );
//   localStorage.setItem("books", JSON.stringify(response.data));
//   return response.data;
// });

export const anonimSlice = createSlice({
  name: "slice",
  initialState,

  reducers: {
    // setFavoriteBookAction(state, action) {
    //   // добавление книги в избранное
    //   state.favorites = action.payload;
    // },
    // deleteBookAction(state, action) {
    //   const newBooks = state.books.filter((item) => item.id !== action.payload); // проверяем на совпадение id книги
    //   state.books = newBooks;
    //   localStorage.setItem("books", JSON.stringify(newBooks));
    // },
    // deleteFavoritesBookAction(state, action) {
    //   const newFavorites = state.favorites.filter(
    //     (item) => item !== action.payload
    //   ); // проверка на совпадение идентификаторов
    //   state.favorites = newFavorites;
    //   localStorage.setItem("favoritesBooks", JSON.stringify(newFavorites));
    // },
    // addBookAction(state, action) {
    //   // добавление книги
    //   const { data, id } = action.payload;
    //   const newBooks = [...state.books, { ...data, id }];
    //   state.books = newBooks;
    //   localStorage.setItem("books", JSON.stringify(state.books));
    // },
    // editBookAction(state, action) {
    //   const newBooks = state.books.map((item) => {
    //     if (item.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return item;
    //   });
    //   state.books = newBooks;
    //   localStorage.setItem("books", JSON.stringify(newBooks));
    // },
  },

  extraReducers: {
    // [getDataBooks.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getDataBooks.fulfilled]: (state, action) => {
    //   state.books = action.payload;
    //   state.loading = false;
    // },
    // [getDataBooks.rejected]: (state) => {
    //   state.status = "error";
    // },
  },
});

// export const {
//   setFavoriteBookAction,
//   deleteBookAction,
//   deleteFavoritesBookAction,
//   addBookAction,
//   editBookAction,
// } = bookSlice.actions;

export default anonimSlice.reducer;
