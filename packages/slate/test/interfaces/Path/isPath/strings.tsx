import { Path } from 'meow-slate'

export const input = ['a', 'b']
export const test = path => {
  return Path.isPath(path)
}
export const output = false
