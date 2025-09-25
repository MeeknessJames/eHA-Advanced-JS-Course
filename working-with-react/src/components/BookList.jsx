const BookList = () => {
  const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];
  
  return (
    <ol>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </ol>
  );
};

export default BookList;