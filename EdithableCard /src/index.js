function End(str,char) {
    const table = str.split('')
    const lastChar = table[(table.length)-1]

    return lastChar === char
}

console.log(End("hello world i","i"))