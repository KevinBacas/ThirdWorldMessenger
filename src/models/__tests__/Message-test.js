jest.unmock('../Message');

describe('Tests on Message model', () => {
  it('should create a Message Object', () => {
    const { CreateMessage } = require('../Message');
    const NewMessage = CreateMessage('a', 'b', 'c');
    expect(NewMessage.thread).toBe('a');
    expect(NewMessage.sender).toBe('b');
    expect(NewMessage.content).toBe('c');
  });
});
