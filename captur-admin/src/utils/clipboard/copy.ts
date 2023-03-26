import select from 'select'
import command from './common/command'
import createFakeElement from './common/create-fake-element'

/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */
const clipboardActionCopy = (target: string, options = { container: document.body }) => {
  let selectedText = ''
  if (navigator.clipboard) {
    try {
      ;(async () => {
        await navigator.clipboard.writeText(target)
      })()
    } catch (e) {
      /* eslint-disable no-console  */
      console.error(e)
    }
  } else {
    // execCommand 兼容
    if (typeof target === 'string') {
      const fakeElement = createFakeElement(target)
      options.container.appendChild(fakeElement)
      selectedText = select(fakeElement)
      command('copy')
      fakeElement.remove()
    } else {
      selectedText = select(target)
      command('copy')
    }
  }

  return selectedText
}

export default clipboardActionCopy
