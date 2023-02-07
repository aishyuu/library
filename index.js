let myLibrary = [{
    title : "title",
    author: "author",
    pageCount: 5,
    read: true
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function renderAll() {
    const bookGrid = document.querySelector(".containerBookGrid");
    myLibrary.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('containerBook');
        

        const title = document.createElement('h1');
        title.innerText = `"${book.title}"`;

        const author = document.createElement('h1');
        author.innerText = `${book.author}`;

        const pages = document.createElement('h1');
        author.innerText = `${book.pageCount}`;

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);

        const readButton = document.createElement('button');
        if(book.read == true) {
            readButton.innerHTML = "Finished";
            readButton.classList = "bookButton finished";
        } else {
            readButton.innerHTML = 'Not Finished';
            readButton.classList = 'bookButton notFinished'
        }
        bookContainer.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.classList = "bookButton buttonRemove";
        removeButton.innerText = "Remove";
        bookContainer.appendChild(removeButton);

        bookGrid.appendChild(bookContainer);
    });
}

function changeStatus(e) {
    if(e.target.className === "bookButton notFinished") {
        e.target.className = "bookButton finished";
        e.target.innerText = "Finished";
    } else {
        e.target.className = "bookButton notFinished";
        e.target.innerText = "Not Finished";
    }
    console.log(e.target);
}

renderAll()