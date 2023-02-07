let myLibrary = [];

const modalButton = document.querySelector(".buttonAddBook");
const modalSpan = document.querySelector(".close");
const modalAll = document.querySelector(".modal");
const checkBox = document.querySelector(".modalSubmit");

checkBox.addEventListener("click", function(event) {
    event.preventDefault();
    const modalInputs = document.querySelectorAll('.modalInput');
    console.log(modalInputs);
    const title = modalInputs[0].value;
    const author = modalInputs[1].value;
    const pages = modalInputs[2].value;
    const read = modalInputs[3].checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary[myLibrary.length] = newBook;
    modalAll.style.display = "none";
    removeAllChildNodes(document.querySelector(".containerBookGrid"));
    renderAll();
    modalInputs[0].value = "";
    modalInputs[1].value = "";
    modalInputs[2].value = "";
})

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

modalButton.onclick = function() {
    modalAll.style.display = "block";
}

modalSpan.onclick = function() {
    modalAll.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modalAll) {
        modalAll.style.display = "none";
    }
}

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

        const page = document.createElement('h1');
        page.innerText = `${book.pages}`;

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(page);

        const readButton = document.createElement('button');
        if(book.read == true) {
            readButton.innerHTML = "Finished";
            readButton.classList = "bookButton finished";
        } else {
            readButton.innerHTML = 'Not Finished';
            readButton.classList = 'bookButton notFinished'
        }
        readButton.onclick = function(e) {
            if(e.target.className === "bookButton notFinished") {
                book.read = true;
                e.target.className = "bookButton finished";
                e.target.innerText = "Finished";
            } else {
                book.read = false;
                e.target.className = "bookButton notFinished";
                e.target.innerText = "Not Finished";
            }
        };
        bookContainer.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.classList = "bookButton buttonRemove";
        removeButton.innerText = "Remove";
        removeButton.onclick = function(e) {
            for(let i = 0; i < myLibrary.length; i++) {
                if(myLibrary[i] == book){
                    bookContainer.remove();
                    myLibrary.splice(i, 1)
                    break;
                }
            }
            console.log(myLibrary);
        }
        bookContainer.appendChild(removeButton);

        bookGrid.appendChild(bookContainer);
    });
}

renderAll()