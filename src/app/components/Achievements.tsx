import { Trophy, Star, Award, Sparkles } from 'lucide-react';

export function Achievements() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Your Achievements 🏆</h2>
        <p className="text-gray-400">Show off your awesome diabetes management skills!</p>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-xl p-4 text-white text-center shadow-lg border border-amber-500/30">
          <div className="text-3xl font-bold mb-1">12</div>
          <div className="text-sm opacity-90">Unlocked</div>
        </div>
        <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-4 text-white text-center shadow-lg border border-gray-500/30">
          <div className="text-3xl font-bold mb-1">8</div>
          <div className="text-sm opacity-90">Locked</div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-4 text-white text-center shadow-lg border border-purple-500/30">
          <div className="text-3xl font-bold mb-1">3</div>
          <div className="text-sm opacity-90">Rare Badges</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-4 text-white text-center shadow-lg border border-cyan-500/30">
          <div className="text-3xl font-bold mb-1">60%</div>
          <div className="text-sm opacity-90">Completion</div>
        </div>
      </div>

      {/* Recently Unlocked */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-white">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Recently Unlocked
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BadgeCard
            emoji="🔥"
            title="Hot Streak"
            description="7 day streak!"
            unlocked
            rarity="common"
          />
          <BadgeCard
            emoji="💪"
            title="Exercise Pro"
            description="50 workouts completed"
            unlocked
            rarity="rare"
          />
          <BadgeCard
            emoji="🎯"
            title="Perfect Day"
            description="All tasks completed"
            unlocked
            rarity="common"
          />
          <BadgeCard
            emoji="🧠"
            title="Smart Cookie"
            description="10 quizzes passed"
            unlocked
            rarity="uncommon"
          />
        </div>
      </div>

      {/* All Achievements */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-white">
          <Trophy className="w-5 h-5 text-purple-400" />
          All Achievements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BadgeCard
            emoji="⭐"
            title="Getting Started"
            description="Complete first task"
            unlocked
            rarity="common"
          />
          <BadgeCard
            emoji="📊"
            title="Data Tracker"
            description="Log 30 blood sugars"
            unlocked
            rarity="common"
          />
          <BadgeCard
            emoji="💧"
            title="Hydration Hero"
            description="Drink 8 glasses daily for 7 days"
            unlocked
            rarity="uncommon"
          />
          <BadgeCard
            emoji="🏃"
            title="Active Kid"
            description="Exercise 5 times this week"
            unlocked
            rarity="common"
          />
          <BadgeCard
            emoji="🎓"
            title="Diabetes Expert"
            description="Complete all learning modules"
            rarity="epic"
          />
          <BadgeCard
            emoji="👑"
            title="Champion"
            description="Reach level 10"
            rarity="legendary"
          />
          <BadgeCard
            emoji="🌟"
            title="Consistency King"
            description="30 day streak"
            rarity="rare"
          />
          <BadgeCard
            emoji="🎨"
            title="Creative Mind"
            description="Customize your avatar"
            rarity="common"
          />
        </div>
      </div>

      {/* Special Event Badge */}
      <div className="bg-gradient-to-r from-blue-700 via-cyan-700 to-blue-700 rounded-2xl p-6 text-white shadow-xl border-2 border-blue-400/50">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🏆</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white">Legendary Quest</h3>
              <span className="bg-white/30 px-2 py-1 rounded-full text-xs">Limited Time!</span>
            </div>
            <p className="opacity-90 mb-3">The ultimate challenge for diabetes heroes! Complete 100 perfect days to unlock this exclusive legendary badge.</p>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden mb-2">
              <div className="bg-white h-full" style={{ width: '25%' }} />
            </div>
            <p className="text-sm">25/100 Perfect Days - Keep going, champion! 💪</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeCard({
  emoji,
  title,
  description,
  unlocked = false,
  rarity
}: {
  emoji: string;
  title: string;
  description: string;
  unlocked?: boolean;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}) {
  const rarityColors = {
    common: 'from-gray-500 to-gray-600',
    uncommon: 'from-green-500 to-emerald-600',
    rare: 'from-blue-500 to-cyan-600',
    epic: 'from-purple-500 to-pink-600',
    legendary: 'from-amber-500 to-orange-600'
  };

  const rarityLabels = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary'
  };

  return (
    <div className={`rounded-xl p-4 text-center transition-all hover:scale-105 ${
      unlocked 
        ? `bg-gradient-to-br ${rarityColors[rarity]} text-white shadow-lg cursor-pointer border border-white/20` 
        : 'bg-slate-800/50 text-gray-500 border-2 border-dashed border-slate-600'
    }`}>
      <div className={`text-5xl mb-3 ${!unlocked && 'grayscale opacity-30'}`}>
        {emoji}
      </div>
      <h4 className={`mb-1 text-sm ${!unlocked ? 'text-gray-400' : 'text-white'}`}>{title}</h4>
      <p className={`text-xs mb-2 ${unlocked ? 'opacity-90' : 'text-gray-500'}`}>
        {description}
      </p>
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
        unlocked 
          ? 'bg-white/30' 
          : 'bg-gray-700 text-gray-400'
      }`}>
        {rarityLabels[rarity]}
      </span>
      {!unlocked && (
        <div className="mt-2">
          <span className="text-xs">🔒 Locked</span>
        </div>
      )}
    </div>
  );
}