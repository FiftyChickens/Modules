import { addItem } from "./inventory.mjs";
import { removeItem } from "./inventory.mjs";
import { listItems } from "./inventory.mjs";

console.log("Ex 1.");

addItem("Tomatoes", inventory);
addItem("Beef", inventory);
addItem("Cheese", inventory);
addItem("Tacos", inventory);

removeItem("Cheese", inventory);

listItems(inventory);
