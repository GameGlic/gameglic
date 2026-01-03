import { useState } from 'react';
import { Trophy, Target, Award, MessageCircle, BookOpen, Gamepad } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Challenges } from './components/Challenges';
import { Achievements } from './components/Achievements';
import { Chatbot } from './components/Chatbot';
import { LearnDiabetes } from './components/LearnDiabetes';
import { DiabetesGame } from './components/DiabetesGame';
import { BoardGame } from './components/BoardGame';

type Tab = 'dashboard' | 'challenges' | 'achievements' | 'learn' | 'game' | 'boardgame' | 'chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-xl border-b border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎮</div>
              <div>
                <h1 className="text-white mb-0">GAMEGLIC</h1>
                <p className="text-sm opacity-90">Your Diabetes Adventure Begins Here!</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm">Level 5 Champion</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                😊
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-slate-800/50 backdrop-blur-sm shadow-md sticky top-0 z-10 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-2 overflow-x-auto">
            <TabButton
              icon={<Target className="w-5 h-5" />}
              label="Dashboard"
              active={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
            />
            <TabButton
              icon={<Trophy className="w-5 h-5" />}
              label="Challenges"
              active={activeTab === 'challenges'}
              onClick={() => setActiveTab('challenges')}
            />
            <TabButton
              icon={<Award className="w-5 h-5" />}
              label="Achievements"
              active={activeTab === 'achievements'}
              onClick={() => setActiveTab('achievements')}
            />
            <TabButton
              icon={<BookOpen className="w-5 h-5" />}
              label="Learn About T1D"
              active={activeTab === 'learn'}
              onClick={() => setActiveTab('learn')}
            />
            <TabButton
              icon={<Gamepad className="w-5 h-5" />}
              label="Board Game"
              active={activeTab === 'boardgame'}
              onClick={() => setActiveTab('boardgame')}
              highlight
            />
            <TabButton
              icon={<Gamepad className="w-5 h-5" />}
              label="Quiz Game"
              active={activeTab === 'game'}
              onClick={() => setActiveTab('game')}
            />
            <TabButton
              icon={<MessageCircle className="w-5 h-5" />}
              label="Chat with GLIC"
              active={activeTab === 'chatbot'}
              onClick={() => setActiveTab('chatbot')}
              highlight={false}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'challenges' && <Challenges />}
        {activeTab === 'achievements' && <Achievements />}
        {activeTab === 'learn' && <LearnDiabetes />}
        {activeTab === 'boardgame' && <BoardGame />}
        {activeTab === 'game' && <DiabetesGame />}
        {activeTab === 'chatbot' && <Chatbot />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-300 text-sm">
            🌟 Remember: Always talk to your parents and diabetes care team about your health! 🌟
          </p>
          <p className="text-gray-400 text-xs mt-2">
            GAMEGLIC - Making diabetes management fun and rewarding for kids
          </p>
        </div>
      </footer>
    </div>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
  highlight = false
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-4 border-b-4 transition-all whitespace-nowrap ${
        active
          ? highlight
            ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
            : 'border-blue-500 text-blue-400 bg-blue-500/10'
          : 'border-transparent text-gray-400 hover:bg-slate-700/50 hover:text-gray-200'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {highlight && !active && (
        <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">New</span>
      )}
    </button>
  );
}