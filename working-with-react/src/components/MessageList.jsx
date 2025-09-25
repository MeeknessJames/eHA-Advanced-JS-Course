const MessageList = () => {
  const messages = []; 
  return (
    <div>
      {messages.length > 0 ? (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      ) : (
        <p>No new messages</p>
      )}
    </div>
  );
};

export default MessageList;