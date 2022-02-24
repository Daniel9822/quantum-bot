/*
Gracias a "No se quien sea el verdadero autor :'v" pero se le agradece :'3
*/

const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) //Tiempo de espera en segundos ✓
}

module.exports = {
    isFiltered,
    addFilter
}
