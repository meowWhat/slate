/** @jsx jsx  */
import { Node } from 'meow-slate'
import { jsx } from 'slate-hyperscript'

export const input = <text>one</text>
export const test = value => {
  return Node.string(value)
}
export const output = `one`
