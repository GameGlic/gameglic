import { Trophy, Star, Target, TrendingUp } from 'lucide-react';

export function Challenges() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Daily Challenges 🎯</h2>
        <p className="text-gray-400">Complete challenges to earn bonus points and unlock rewards!</p>
      </div>

      {/* Active Challenges */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-white">
          <Star className="w-5 h-5 text-amber-400" />
          Active Challenges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard
            icon={<Target className="w-6 h-6" />}
            title="Perfect Day"
            description="Complete all daily tasks"
            progress={80}
            reward={200}
            color="from-blue-500 to-cyan-500"
          />
          <ChallengeCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Weekly Warrior"
            description="Maintain 7-day streak"
            progress={60}
            reward={500}
            color="from-purple-500 to-pink-500"
          />
          <ChallengeCard
            icon={<Star className="w-6 h-6" />}
            title="Healthy Hydration"
            description="Drink 8 glasses of water today"
            progress={50}
            reward={100}
            color="from-cyan-500 to-teal-500"
          />
          <ChallengeCard
            icon={<Trophy className="w-6 h-6" />}
            title="Knowledge Master"
            description="Complete 5 diabetes quizzes"
            progress={40}
            reward={300}
            color="from-amber-500 to-orange-500"
          />
        </div>
      </div>

      {/* Weekly Challenges */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-white">
          <Trophy className="w-5 h-5 text-purple-400" />
          Weekly Challenges
        </h3>
        <div className="space-y-3">
          <WeeklyChallengeItem
            title="Blood Sugar Champion"
            description="Check blood sugar 21 times this week"
            progress={15}
            total={21}
            reward={1000}
          />
          <WeeklyChallengeItem
            title="Exercise Expert"
            description="Exercise for 120 minutes this week"
            progress={75}
            total={120}
            reward={800}
          />
          <WeeklyChallengeItem
            title="Meal Logger"
            description="Log all meals for 5 days"
            progress={3}
            total={5}
            reward={600}
          />
        </div>
      </div>

      {/* Bonus Challenge */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl p-6 text-white shadow-lg border border-orange-500/30">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <Trophy className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-white">✨ Bonus Challenge</h3>
              <span className="bg-white/30 px-2 py-1 rounded-full text-xs">2 days left</span>
            </div>
            <p className="opacity-90 mb-4">Complete 10 perfect days this month to unlock the Diabetes Hero badge!</p>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden mb-2">
              <div className="bg-white h-full" style={{ width: '70%' }} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>7/10 Perfect Days</span>
              <span>🎁 +2000 XP + Special Badge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({ 
  icon, 
  title, 
  description, 
  progress, 
  reward,
  color 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
  reward: number;
  color: string;
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-700 hover:shadow-xl hover:border-blue-500/50 transition-all">
      <div className={`bg-gradient-to-br ${color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
        {icon}
      </div>
      <h4 className="mb-1 text-white">{title}</h4>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="space-y-2">
        <div className="bg-slate-900/50 rounded-full h-2 overflow-hidden border border-slate-700">
          <div 
            className={`bg-gradient-to-r ${color} h-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">{progress}% Complete</span>
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 rounded-full font-medium">
            +{reward} XP
          </span>
        </div>
      </div>
    </div>
  );
}

function WeeklyChallengeItem({
  title,
  description,
  progress,
  total,
  reward
}: {
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
}) {
  const percentage = (progress / total) * 100;
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 shadow border border-slate-700">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="mb-1 text-white">{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
          +{reward} XP
        </span>
      </div>
      <div className="bg-slate-900/50 rounded-full h-2 overflow-hidden mb-2 border border-slate-700">
        <div 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-400">
        {progress} / {total} completed
      </p>
    </div>
  );
}