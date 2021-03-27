import { Operation } from 'meow-slate'

export const input = true
export const test = value => {
  return Operation.isOperation(value)
}
export const output = false
