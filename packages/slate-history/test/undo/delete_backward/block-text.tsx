/** @jsx jsx */
import { Transforms } from 'meow-slate'
import { jsx } from '../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      wo
      <cursor />
      rd
    </block>
  </editor>
)
export const output = input
