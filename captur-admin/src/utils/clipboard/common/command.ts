/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
export default function command(type: string) {
  try {
    return document.execCommand(type)
  } catch (err) {
    return false
  }
}
