import Book from './components/Book';
import Form from './components/Form';
import "./App.css";
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
    {
      title: "Lord of the flies",
      id: 1,
    },
    {
      title: "cracking the coding interview",
      id: 2,
    },
    {
      title: "Clean Code",
      id: 3,
    },
    {
      title: "Catcher in the Rye",
      id: 4,
    },
  ])

  
  const submit = (title) => {
    setBooks([
      ...books,
      {
        title,
        id: Date.now(),
      }
    ])
  }

  return (
    <>
      <Form submit={submit} />
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
        />
      ))}
    </>
  );
}

export default App;
