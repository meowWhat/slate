import { Text } from 'meow-slate'

export const input = true
export const test = value => {
  return Text.isText(value)
}
export const output = false
