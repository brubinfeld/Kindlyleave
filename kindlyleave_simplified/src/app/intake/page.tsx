'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock conversation for the intake bot
const mockConversation = [
  {
    text: "Hey there! 👋 I'm the KindlyLeave assistant. I'm here to help you create a compassionate breakup letter and connect you with the support you need. What kind of relationship are we talking about today?",
    isUser: false
  }
];

// Mock API responses for each step
const mockResponses = {
  1: "Got it! And how long has this relationship been going on? (one night, weeks, months, years, decades?)",
  2: "Thanks for sharing. Are you legally married to this person? (yes/no)",
  3: "Are there any children involved in this relationship? (yes/no)",
  4: "Is this a peaceful breakup, or is there any abuse or safety concerns involved? (Be honest - this helps us recommend the right support)",
  5: "Do you need help with moving services? (This is currently available in NY/NJ area only)",
  6: "Do you need any security assistance during this transition? (This is currently available in NY/NJ area only)",
  7: "Are there any custody issues with children that you're concerned about?",
  8: "What's the main reason you feel it's time to end the relationship? (Just a brief explanation)",
  9: "What vibe are you going for with your letter? (compassionate, direct, friendly, formal)",
  10: "Would you like to add flowers or chocolates to soften the message? (Premium feature)",
  11: "Based on what you've shared, I recommend our Standard package. Would you like to proceed with Basic, Standard, or Premium?",
  12: "Perfect! I'm generating your letter now. This will just take a moment...",
  13: "Your letter is ready! You can view, edit, and finalize it on the next page."
};

export default function IntakePage() {
  const [messages, setMessages] = useState(mockConversation);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    relationshipType: '',
    relationshipDuration: '',
    isMarried: false,
    hasChildren: false,
    isPeaceful: true,
    needsSecurity: false,
    needsMoving: false,
    custodyIssues: false,
    reason: '',
    tone: 'compassionate',
    wantsGifts: false,
    plan: 'standard'
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setIsLoading(true);
    
    // Store user input in form data based on current step
    const newFormData = { ...formData };
    if (step === 1) newFormData.relationshipType = input;
    if (step === 2) newFormData.relationshipDuration = input;
    if (step === 3) newFormData.isMarried = input.toLowerCase().includes('yes');
    if (step === 4) newFormData.hasChildren = input.toLowerCase().includes('yes');
    if (step === 5) newFormData.isPeaceful = !input.toLowerCase().includes('abuse');
    if (step === 6) newFormData.needsMoving = input.toLowerCase().includes('yes');
    if (step === 7) newFormData.needsSecurity = input.toLowerCase().includes('yes');
    if (step === 8) newFormData.custodyIssues = input.toLowerCase().includes('yes');
    if (step === 9) newFormData.reason = input;
    if (step === 10) newFormData.tone = input.toLowerCase();
    if (step === 11) newFormData.wantsGifts = input.toLowerCase().includes('yes');
    if (step === 12) newFormData.plan = input.toLowerCase();
    
    setFormData(newFormData);
    
    // Simulate API delay
    setTimeout(() => {
      // Add bot response
      if (step < 14) {
        setMessages(prev => [...prev, { 
          text: mockResponses[step], 
          isUser: false 
        }]);
      }
      
      // Update step
      setStep(prev => prev + 1);
      setInput('');
      setIsLoading(false);
    }, 1000);
  };

  // Handle pressing Enter to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your Letter</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h2 className="text-xl font-semibold">Chat with KindlyLeave Assistant</h2>
        </div>
        
        <div className="h-96 p-4 overflow-y-auto bg-white">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div 
                className={`max-w-[75%] rounded-lg px-4 py-2 ${
                  msg.isUser ? 'bg-purple-600 text-white' : 'bg-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t">
          {step < 14 ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className={`bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          ) : (
            <div className="text-center">
              <Link href="/letter" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
                View Your Letter
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">How This Works</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Share details about your relationship and situation</li>
          <li>Our AI assistant will ask relevant questions to understand your needs</li>
          <li>Choose your preferred letter package (Basic, Standard, or Premium)</li>
          <li>Review and customize your generated letter</li>
          <li>Add optional gifts like chocolates or flowers (Premium package)</li>
          <li>Get connected with relevant support services based on your needs</li>
        </ol>
        <p className="mt-4 text-gray-600">
          All information you share is kept confidential and secure. Your privacy is our priority.
        </p>
      </div>
    </div>
  );
}
