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
  return Node.leaf(value, [0, 0])
}
export const output = <text />
