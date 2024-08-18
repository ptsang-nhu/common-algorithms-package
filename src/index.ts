function helloWorld() {
    console.log('Hello, World!');
}

function uniq<T>(arr: T[]): T[] {
    const newArr: T[] = [];
    const seen = new Set();
    for (const item of arr) {
        if (!seen.has(item)) {
            newArr.push(item);
            seen.add(item);
        }
    }
    return newArr;
}

export { helloWorld, uniq };
