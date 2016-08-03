function CreateMessage(thread, sender, content) {
  return {
    thread,
    sender,
    content,
  };
}

module.exports = {
  CreateMessage,
};
