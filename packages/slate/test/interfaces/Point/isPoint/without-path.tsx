import { Point } from 'meow-slate'

export const input = {
  offset: 0,
}
export const test = value => {
  return Point.isPoint(value)
}
export const output = false
