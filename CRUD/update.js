export const update = (list, id, newData) => {
    // Saco el elemento antiguo de la lista
    const newList = list.filter(resource => resource.id !== id);
    // Meto el nuevo elemento
    newList.push(newData);
    // Guardo cambios
    return newList;
}