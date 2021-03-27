import { Element } from 'meow-slate'

export const input = {
  children: [],
}
export const test = value => {
  return Element.isElement(value)
}
export const output = true
