function escada(num) {
    var cont = 1;
    var string = "";
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < cont; i++) {
            string += "#";
        }
        cont++;
        string += "\n";
    }
    return string;
}

console.log(escada(2));
console.log(escada(3));
console.log(escada(4));
console.log(escada(5));
console.log(escada(0));
console.log(escada(1));