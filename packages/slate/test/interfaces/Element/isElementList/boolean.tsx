import { Element } from 'meow-slate'

export const input = true
export const test = value => {
  return Element.isElementList(value)
}
export const output = false
