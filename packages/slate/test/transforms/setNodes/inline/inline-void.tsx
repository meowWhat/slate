/** @jsx jsx */
import { Editor, Transforms } from 'meow-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.setNodes(
    editor,
    { key: true },
    { match: n => Editor.isInline(editor, n) }
  )
}
export const input = (
  <editor>
    <block>
      <text />
      <inline void>
        <cursor />
        word
      </inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text />
      <inline void key>
        <cursor />
        word
      </inline>
      <text />
    </block>
  </editor>
)
