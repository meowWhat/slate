import { Path } from 'meow-slate'

export const input = {
  path: [0, 1, 2],
  another: [0, 1, 2],
}
export const test = ({ path, another }) => {
  return Path.isChild(path, another)
}
export const output = false
