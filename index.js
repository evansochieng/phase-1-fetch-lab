function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return (
    fetch('https://anapioficeandfire.com/api/books') // make a fetch request
    .then( (response) => response.json() ) //convert to JSON
    .then( (result) => renderBooks(result) ) //call renderBooks function
  )
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

//Function to add the number of pages

// Create a function that adds pages
function sumPages(pageZero, book){
  return pageZero + book.numberOfPages;
}

/* Make a fetch request, call the function to sum the pages,
save the total to a variable */
fetch('https://anapioficeandfire.com/api/books') // make a fetch request
    .then( (response) => response.json() ) //convert to JSON
    .then( (result) => {
      const totalPages = result.reduce(sumPages, 0);//sum pages
      console.log(totalPages);  // log the total pages
      return totalPages;
    } )
