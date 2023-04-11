function extractTitleAndAuthor(...books) {
    const newBooks = books.map(({title, author}) => ({title, author}));
    console.log(...newBooks);
  }
  //This function uses the rest parameter syntax (...books) to capture any additional 
  //arguments passed to the function. It then uses array destructuring to extract the title and author 
  //properties from each object in the books array. It uses an arrow function to create a new object with only these 
  //properties ({title, author}), and uses the map method to apply this function to each object in the array.
  