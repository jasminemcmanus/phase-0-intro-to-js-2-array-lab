// Write your solution here!

const cats = [ 'Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name) {
    cats.push(name);
}


function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}


function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    const cats2 = [...cats, name];
    return cats2
}

function prependCat(name) {
    const cats3 = [name, ...cats];
    return cats3
}

function removeLastCat() {
    const cats4 = cats.slice(0, 2);
    return cats4;
}

function removeFirstCat() {
    const cats5 = cats.slice(1);
    return cats5;
}
