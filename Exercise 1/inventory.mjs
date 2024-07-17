export function addItem(itemName, storage) {
    console.log(`${itemName} Added`);
    storage.push(itemName)
}

export function removeItem(itemName, storage) {
    console.log(`Removing ${itemName}`)
    return storage.splice(storage.indexOf(itemName), 1).length > 0;
}

export function listItems(storage) {
    for (let i of storage) {
        console.log(storage.indexOf(i), i)
    }
}