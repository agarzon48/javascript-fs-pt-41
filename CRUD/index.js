import { create } from "./create.js";
import { read, readById } from './read.js';
import { update } from "./update.js";
import { destroy } from "./delete.js";

let animalsList = [];

create(animalsList, {
    name: "Cat",
    id: animalsList.length
});
create(animalsList, {
  name: "Dog",
  id: animalsList.length,
});

animalsList = update(animalsList, 1, {
    name: 'Cow',
    id: animalsList.length
});

animalsList = destroy(animalsList, 0);

console.log(read(animalsList));