function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
}

console.log(filterOutOdds(1, 2, 4, 5, 8, 9));

function findMin(...nums) {
    return Math.min(...nums);
}

console.log(findMin(1, 4, 12, -3));

function mergeObjects(object1, object2) {
    return { ...object1, ...object2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map((num) => num * 2)];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

function removeRandom(items) {
    const idx = Math.floor(Math.random() * items.length);
    items.splice(idx, 1);
    return items;
}

console.log(removeRandom([1, 2, 3, 4, 5]));

function extend(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(extend([1, 2, 3], [4, 5, 6]));

function addKeyVal(obj, key, val) {
    obj[key] = val;
    return obj;
}

console.log(addKeyVal({ a: 1, b: 2 }, "c", 3));

function removeKey(obj, key) {
    if (!obj[key]) {
        return;
    }
    delete obj[key];
    return obj;
}

console.log(removeKey({ a: 1, b: 2 }, "b"));

function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));

function update(object, key, val) {
    object[key] = val;
    return object;
}

console.log(update({ a: 1, b: 2, c: 3 }, "a", 11));
