import { Path } from 'meow-slate'

export const input = {
  path: [0, 1, 2],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.endsBefore(path, another)
}
export const output = false
