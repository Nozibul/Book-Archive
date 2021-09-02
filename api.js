
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    //console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

// search result
const displaySearchResult = books => {
    // console.log(books);
    const displayResult = document.getElementById('search-result');
    displayResult.textContent = '' ;
    books.forEach(book => {
        console.log(book) ;
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${book.title}</h3>
          <h5>by ${book.author_name[0]}</h5>
          <p>publisher by ${book.publisher}</p>
          <p>First published in ${book.first_publish_year}</p>
        </div>
      </div>
        `
        displayResult.appendChild(div)
    })
}