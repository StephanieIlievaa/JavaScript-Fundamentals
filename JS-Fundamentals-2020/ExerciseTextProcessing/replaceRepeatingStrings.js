function solve(input) {
    let characters = '';

    for (let char of input.split('')) {
        let lastChar = characters.slice(-1);
        //if(lastChar !== char) 
        if (!characters.endsWith(char)) {
            characters += char;
        }
    }
    console.log(characters);
}
solve('aaaaabbbbbcdddeeeedssaa');