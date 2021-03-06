document.getElementById('error-msg').style.display = 'none';

// Input search area
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

        const url = `https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
       
}

// search result
const displaySearchResult = books => {
    document.getElementById('result').innerText=`Total Books Found: ${books.numFound}`
    const book = books.docs.slice(0, 20)
    //console.log(book);
    const displayResult = document.getElementById('search-result');
    document.getElementById('error-msg').style.display = 'none';

    displayResult.textContent = '' ;

    // error message
    if(book.length === 0){
        document.getElementById('error-msg').style.display = 'block';

    }
     else{
        book.forEach(books => {
           // console.log(books) ;
             const div = document.createElement('div')
             div.classList.add('col');
             div.innerHTML = `
             <div class="card-body">
               <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="...">
               <h3>${books.title}</h3>
               <h5>by ${books.author_name? books.author_name[0]: ''}</h5>
               <p>publisher by ${books.publisher[0]}</p>
               <p>First published in ${books.first_publish_year}</p>
             </div>
           </div>
             `
             displayResult.appendChild(div)
             
         })
     }
}

