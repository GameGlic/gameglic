import { Heart, Activity, TrendingUp, Target } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Welcome back, Champion! 🎮</h2>
        <p className="text-gray-400">Keep up the amazing work managing your diabetes!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-2xl p-6 text-white shadow-lg border border-pink-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">850</span>
          </div>
          <p className="opacity-90">Total Points</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg border border-purple-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">12</span>
          </div>
          <p className="opacity-90">Day Streak</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg border border-cyan-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">Level 5</span>
          </div>
          <p className="opacity-90">Current Level</p>
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-6 text-white shadow-lg border border-amber-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold">8/10</span>
          </div>
          <p className="opacity-90">Daily Goals</p>
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-700">
        <h3 className="mb-4 flex items-center gap-2 text-white">
          <Target className="w-5 h-5 text-blue-400" />
          Today's Tasks
        </h3>
        <div className="space-y-3">
          <TaskItem completed text="Check blood sugar before breakfast" points={50} />
          <TaskItem completed text="Log morning insulin dose" points={50} />
          <TaskItem completed text="Drink 4 glasses of water" points={30} />
          <TaskItem text="Exercise for 20 minutes" points={100} />
          <TaskItem text="Check blood sugar before dinner" points={50} />
        </div>
      </div>

      {/* Progress to Next Level */}
      <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-blue-300">Progress to Level 6</h3>
          <span className="text-blue-400">150/200 XP</span>
        </div>
        <div className="bg-slate-900/50 rounded-full h-4 overflow-hidden border border-blue-500/30">
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-500"
            style={{ width: '75%' }}
          />
        </div>
        <p className="text-blue-300 text-sm mt-2">Just 50 more XP to go! 🚀</p>
      </div>
    </div>
  );
}

function TaskItem({ completed = false, text, points }: { completed?: boolean; text: string; points: number }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
      completed ? 'bg-green-900/30 border border-green-500/30' : 'bg-gray-700/50 border border-gray-600'
    }`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        completed ? 'bg-green-500' : 'bg-gray-600'
      }`}>
        {completed && <span className="text-white text-xs">✓</span>}
      </div>
      <span className={completed ? 'text-gray-400 line-through' : 'text-gray-200'}>{text}</span>
      <span className="ml-auto bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-sm font-medium">
        +{points} XP
      </span>
    </div>
  );
}