/** @jsx jsx  */
import { Node } from 'meow-slate'
import { jsx } from 'slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.levels(value, [0, 0], { reverse: true }))
}
export const output = [
  [input.children[0].children[0], [0, 0]],
  [input.children[0], [0]],
  [input, []],
]
