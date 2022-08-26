let words = ["ubuntu", "fedora", "popos", "centos", "debian", "kali", "arch", "gentoo", "suse", "redhat", "mandriva", "opensuse", "linuxmint", "linux"];


let word = words[Math.floor(Math.random() * words.length)];

let chance = 6;
let hits = 0;

let Image = 0;

let position;

for (position = 0; position < word.length; position++) {
    let span = document.createElement("span");
    span.setAttribute('id', position);

    let div = document.getElementById("word");
    div.appendChild(span);
}

let keyboard = "abcdefghijklmnopqrstuvwxyz";
let letters = keyboard.split("");

for (position = 0; position < letters.length; position++) {
    let button = document.createElement("button");
    let letter = document.createTextNode(letters[position]);

    button.appendChild(letter);
    button.setAttribute('onclick', 'pickletter(\''+letters[position]+'\')');
    button.setAttribute('id', letters[position]);

    let div = document.getElementById("letters");
    div.appendChild(button);
}

function pickletter(letter) {

    let right = false;

    for (position = 0; position < word.length; position++) {
        if (letter === word[position]) {
            let span = document.getElementById(position);
            let l = document.createTextNode(letter);

            span.appendChild(l);

            let button = document.getElementById(letter);
            button.setAttribute('class', 'certain');
            button.removeAttribute('onclick');

            hits++;
            right = true;
        }
    }

    if (right === false) {
        Image++;
        document.getElementById("forca").src = "images/forca-"+Image+".png";

        var button = document.getElementById(letter);
        button.setAttribute('class', 'wrong');
        button.removeAttribute('onclick');

        chance--;
    }

    if (chance === 0) {
        let message = document.createElement("p");
        let t1 = document.createTextNode("Você perdeu!");
        message.appendChild(t1);

        let button = document.createElement("button-lost");
        let t2 = document.createTextNode("jogar novamente");

        button.appendChild(t2);
        button.setAttribute('class', 'new-bt');
        button.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("new");
        div.appendChild(message);
        div.appendChild(button);
    }

    if (hits === word.length) {
        let message = document.createElement("p");
        let t1 = document.createTextNode("Parabens!! Você venceu!");
        message.appendChild(t1);

        let button = document.createElement("button-won");
        let t2 = document.createTextNode("jogar novamente");

        button.appendChild(t2);
        button.setAttribute('class', 'new-bt');
        button.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("new");
        div.appendChild(message);
        div.appendChild(button);
        
    }
}
