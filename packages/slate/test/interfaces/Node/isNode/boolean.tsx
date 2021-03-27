import { Node } from 'meow-slate'

export const input = true
export const test = value => {
  return Node.isNode(value)
}
export const output = false
