import { Operation } from 'meow-slate'

export const input = {}
export const test = value => {
  return Operation.isOperation(value)
}
export const output = false
