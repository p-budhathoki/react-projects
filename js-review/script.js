const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const books = getBooks();
books;

const book = getBook(1);
// const title = book.title;
// const author = book.author;
// title;
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
title;
author;
pages;
publicationDate;
genres;
hasMovieAdaptation;

console.log(author, title, genres);

const primaryGenres = genres[0];
const secondaryGenres = genres[1];
console.log(primaryGenres, secondaryGenres);

const [primaryGenres1, secondaryGenres1] = genres;
console.log(primaryGenres1, secondaryGenres1);

// spread operator
const [primaryGenres2, secondaryGenres2, ...otherGenres] = genres;
console.log(primaryGenres2, secondaryGenres2, otherGenres);

const newGenres = [genres, "epic fantasy"];
newGenres;

// use spread operator to keep all the values in one array
const newGenres1 = [...genres, "epic fantasy"];
newGenres1;

// use spread operator to add new properties to the book object
const updatedBook = {
  ...book,
  // adding a new property to the book object
  moviePublicationDate: "2001-12-19",
  // overriding the existing property in the book object
  pages: 1210,
};
updatedBook;

// template literals
const summary = `Summary of the book ${title}. It is ${pages}-page long book, was written by ${author} and published on ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// ternary operators
const pageRange =
  pages > 1000 ? "Over a thousand pages" : "Under a thousand pages";
pageRange;
console.log(`The book has ${pageRange}`);

for (let i = 0; i < data.length; i++) {
  console.log(pages, i);
}

// function getYear(str) {
//   return str.split("-")[0];
// }
// arrow function
const getYear = (str1) => str1.split("-")[0];
console.log(getYear(publicationDate));

// short circuiting
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy : 0, "",null, undefined
console.log("Jonas" && "Some String");
console.log(false && "Some String");

console.log(true || "Some String");
console.log(false || "Some String");

console.log(book.translations.spanish);
console.log(data[1].translations.spanish);

data.forEach((item, index) => {
  console.log(item.translations, index);
});

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

console.log(getBook(2).reviews.librarything.reviewsCount);
const countWrong1 = getBook(2).reviews.librarything.reviewsCount || "no data";
countWrong1;

const count = getBook(2).reviews.librarything.reviewsCount ?? "no data";
count;

// optional chaining
function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewsCount(book));
console.log(getTotalReviewsCount(data[2]));

// array map method
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewsCount(book),
  };
});
essentialData;

// filter
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// array sort method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// immutable arrays
// 1) add a book to the array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) delete book object from the array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);
booksAfterDelete;

// 3) update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

//  Asynchronous javascript promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

  // async await

async function getToDos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data1 = await resp.json();
  console.log(data1)
    
  }
getToDos();
