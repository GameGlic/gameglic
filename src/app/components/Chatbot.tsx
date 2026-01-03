import { useState, useRef, useEffect } from 'react';
import { Send, Bot, Heart } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: "Hi there! I'm GLIC, your friendly diabetes helper! 🌟 I'm here to answer questions about Type 1 diabetes, give you tips, and cheer you on! What would you like to know today?",
  sender: 'bot',
  timestamp: new Date()
};

const QUICK_QUESTIONS = [
  "What is blood sugar?",
  "How does insulin work?",
  "What should I eat?",
  "Why is exercise important?",
  "What is a hypo?",
  "How do I count carbs?"
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('blood sugar') || lowerMessage.includes('glucose')) {
      return "Blood sugar (glucose) is like fuel for your body! 🚗 It gives you energy to play, think, and grow. When you have Type 1 diabetes, your body needs help managing this fuel with insulin. We check blood sugar to make sure it's in a healthy range - not too high and not too low!";
    } else if (lowerMessage.includes('insulin')) {
      return "Great question! 💉 Insulin is like a key that helps sugar get from your blood into your cells for energy. Think of it like this: sugar is trying to get into your cells (like houses), but it needs insulin to unlock the door! People with Type 1 diabetes need to take insulin because their body doesn't make enough.";
    } else if (lowerMessage.includes('eat') || lowerMessage.includes('food')) {
      return "Eating healthy is super important! 🍎 Try to eat lots of vegetables, fruits, whole grains, and lean proteins. It's okay to have treats sometimes too! The key is balance. Foods with lots of carbs (like bread, pasta, and sweets) affect your blood sugar more, so we need to plan insulin around them. Always talk to your parents or doctor about your meal plan!";
    } else if (lowerMessage.includes('exercise') || lowerMessage.includes('active')) {
      return "Exercise is awesome! 🏃‍♂️ It helps your body use insulin better, keeps you strong, and is super fun! Just remember to check your blood sugar before and after exercise. Sometimes you might need a snack before playing sports. Activities like swimming, biking, dancing, or playing tag are all great!";
    } else if (lowerMessage.includes('hypo') || lowerMessage.includes('low')) {
      return "A 'hypo' (or hypoglycemia) means your blood sugar is too low 📉. You might feel shaky, sweaty, dizzy, or hungry. If this happens, tell an adult right away! You'll need to eat or drink something with fast sugar like juice or glucose tablets. Always carry a snack just in case! After 15 minutes, check your blood sugar again.";
    } else if (lowerMessage.includes('carb') || lowerMessage.includes('counting')) {
      return "Carb counting is like a fun math game! 🔢 Carbs are in foods like bread, pasta, rice, fruits, and sweets. We count them because they affect blood sugar the most. Your parents or diabetes team can teach you how to read food labels and measure portions. The more you practice, the easier it gets!";
    } else if (lowerMessage.includes('scared') || lowerMessage.includes('worried') || lowerMessage.includes('afraid')) {
      return "It's totally okay to feel scared or worried sometimes! 💙 Lots of kids with Type 1 diabetes feel this way. Remember, you're not alone - there are millions of kids just like you who are living amazing lives with diabetes! Talk to your parents, doctors, or friends about how you feel. You're doing an awesome job, and I'm proud of you!";
    } else if (lowerMessage.includes('school')) {
      return "School with diabetes is totally manageable! 🎒 Make sure your teachers and school nurse know about your diabetes. You can check blood sugar and take insulin at school - it's nothing to be embarrassed about! Keep snacks in your backpack in case you need them. You've got this, superstar!";
    } else if (lowerMessage.includes('friends')) {
      return "Your real friends will support you! 👫 It's up to you how much you want to tell them about diabetes. Some kids like to explain it so friends understand, and some prefer to keep it private. Either way is fine! True friends won't treat you differently. You can still do everything they do - play sports, have sleepovers, and have fun!";
    } else if (lowerMessage.includes('thank')) {
      return "You're so welcome! 😊 Remember, you're doing an amazing job managing your diabetes! Keep being the awesome champion you are! 🌟";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello, wonderful friend! 👋 How are you feeling today? Is there anything about diabetes you'd like to talk about or learn?";
    } else {
      return "That's a great question! 🤔 While I can help with basic diabetes information, it's always best to talk to your parents, doctor, or diabetes care team for specific questions about your diabetes care. They know you best! Is there something else I can help explain in simple terms?";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and responding
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 shadow-lg border-b border-blue-500/30">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white mb-0">GLIC - Your Diabetes Friend</h3>
            <p className="text-sm opacity-90">Always here to help! 💙</p>
          </div>
          <Heart className="ml-auto w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Quick Questions */}
      <div className="bg-slate-800/80 border-b border-slate-700 p-4">
        <p className="text-sm text-gray-400 mb-2">Quick questions:</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {QUICK_QUESTIONS.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm whitespace-nowrap hover:bg-blue-500/30 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 border border-blue-400/50">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-tr-sm border border-blue-500/30'
                  : 'bg-slate-700/50 border border-slate-600 rounded-tl-sm text-gray-100'
              }`}
            >
              <p className={message.sender === 'user' ? 'text-white' : 'text-gray-100'}>
                {message.text}
              </p>
            </div>
            {message.sender === 'user' && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white flex-shrink-0 border border-blue-500/30">
                👤
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white border border-blue-400/50">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-slate-700/50 border border-slate-600 p-4 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-slate-800/80 border-t border-slate-700 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about diabetes..."
            className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500/30"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}