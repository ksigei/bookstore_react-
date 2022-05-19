const ADD = 'ADD';
const REMOVE = 'REMOVE';

const myBooks = {
  books: [
    { id: 1, title: 'Living In the light', author: 'Shakti' },
    { id: 2, title: 'Blossoms', author: 'Joseph' },
    { id: 3, title: 'Kigogo', author: 'Asumpta' },
  ],
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
const bookReducer = (state = myBooks, action) => {
  switch (action.type) {
    case ADD:
      return {
        books: [...state.books, action.book],
      };
    case REMOVE:
      return {
        books: [...state.books.filter((book) => book.id !== action.book.id)],
      };
    default:
      return state;
  }
};
export default bookReducer;
