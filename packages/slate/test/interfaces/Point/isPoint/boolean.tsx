import { Point } from 'meow-slate'

export const input = true
export const test = value => {
  return Point.isPoint(value)
}
export const output = false
