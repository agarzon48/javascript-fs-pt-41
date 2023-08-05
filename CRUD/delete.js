export const destroy = (list, id) => {
    // Saco el elemento de la lista
    const newList = list.filter(resource => resource.id !== id);
    // Guardo cambios
    return newList;
}