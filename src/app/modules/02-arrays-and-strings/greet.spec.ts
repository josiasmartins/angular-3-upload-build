import { greet } from './greet'

describe('greet', () => {
  it('should include the name in the message', () => {
    const person = 'ibag'
    const name = greet(person);
    expect(name).toContain(person);
  })
})
