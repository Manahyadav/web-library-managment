// Simulate a list of books
const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Available" },
    { id: 2, title: "1984", author: "George Orwell", status: "Available" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Borrowed" },
    { id: 4, title: "Moby-Dick", author: "Herman Melville", status: "Available" },
    { id: 5, title: "War and Peace", author: "Leo Tolstoy", status: "Available" },
];

// Function to display books on the catalog page
function displayBooks() {
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = ''; // Clear existing books
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>Status: ${book.status}</p>
            <button onclick="borrowBook(${book.id})">Borrow</button>
        `;
        bookList.appendChild(bookItem);
    });
}

// Borrow book function
function borrowBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book.status === "Available") {
        book.status = "Borrowed";
        alert(`${book.title} has been borrowed successfully!`);
        displayBooks(); // Refresh the catalog
    } else {
        alert(`${book.title} is currently borrowed.`);
    }
}

// Call displayBooks on page load (for catalog page)
if (document.querySelector('.book-list')) {
    displayBooks();
}

// Simulated login function
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "student" && password === "password123") {
        alert("Login successful!");
        window.location.href = 'catalog.html'; // Redirect to catalog after successful login
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
