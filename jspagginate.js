var list = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];

var pages = paginate(2, list);

function paginate(n, list) {
    return divide(n, list).map(function (items, index) {
        var number = n * index;

        return {
            start: number + 1,
            end: number + items.length,
            items: items
        };
    });
}

var header = document.getElementById("pageHeader");
var items = document.getElementById("pageItems");
var buttons = document.getElementById("pageButtons");

appendChildren(buttons, pages.map(function (page, index) {
    var button = document.createElement("button");
    button.addEventListener("click", display);
    button.innerHTML = index + 1;
    return button;

    function display() {
        displayPage(page);
    }
}));

displayPage(pages[0]);

function displayPage(page) {
    header.innerHTML = "Items " + page.start + " to " + page.end + ":";

    items.start = page.start;

    items.innerHTML = "";

    appendChildren(items, page.items.map(function (item) {
        var li = document.createElement("li");
        li.innerHTML = item;
        return li;
    }));
}

function appendChildren(element, children) {
    children.forEach(function (child) {
        element.appendChild(child);
    });
}

function take(n, list) {
    return list.slice(0, n);
}

function drop(n, list) {
    return list.slice(n);
}

function concat(lists) {
    return Array.prototype.concat.apply(this, lists);
}

function divide(n, list) {
    if (list.length) {
        var head = take(n, list);
        var tail = drop(n, list);
        return concat.call([head], [divide(n, tail)]);
    } else return [];
}
