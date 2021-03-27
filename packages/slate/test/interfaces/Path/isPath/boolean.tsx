import { Path } from 'meow-slate'

export const input = true
export const test = path => {
  return Path.isPath(path)
}
export const output = false
