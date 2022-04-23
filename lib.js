let books = [
    { book: "pride and preadjust " },
    { book: "100 years of soleded " },
    { book: "davinci code" },
];

let root = document.getElementById("root");

function render() {
    root.innerHTML = "";
    for (var i = 0; i < books.length; i++) {
        // root.innerHTML += "<li>" + todos[i].todo + "</li>";
        root.innerHTML += `<li>${books[i].book}</li>`;
    }
}

render();

function addElement() {
    var newValue = document.getElementById("input").value;
    var newbook = { book: newValue };
    books.push(newbook);
    //   todos.push({todo : document.getElementById("input").value})
    render();
    document.getElementById("input").value = "";
}