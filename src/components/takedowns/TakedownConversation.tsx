import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: string;
  role: 'admin' | 'superadmin';
  timestamp: string;
}

interface ConversationProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function TakedownConversation({ messages, onSendMessage }: ConversationProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Conversation</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'admin' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-4 ${
              message.role === 'admin' 
                ? 'bg-purple-100 dark:bg-purple-900/30' 
                : 'bg-gray-100 dark:bg-gray-700/30'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900 dark:text-white">{message.sender}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 bg-white dark:bg-gray-700"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </form>
    </div>
  );
}