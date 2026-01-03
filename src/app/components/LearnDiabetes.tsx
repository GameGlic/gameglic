import { Heart, Droplet, Utensils, Activity, Syringe, Brain, AlertCircle, Apple } from 'lucide-react';

export function LearnDiabetes() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
          Learning About Type 1 Diabetes 📚
        </h2>
        <p className="text-gray-400">Understanding your diabetes makes you a superhero! 🦸</p>
      </div>

      {/* What is Type 1 Diabetes */}
      <InfoCard
        icon={<Heart className="w-8 h-8" />}
        title="What is Type 1 Diabetes?"
        color="from-pink-600 to-rose-700"
      >
        <p className="text-gray-300 mb-3">
          Type 1 diabetes (T1D) is a condition where your pancreas (a small organ in your body) can't make insulin anymore. 
          Think of your pancreas like a factory that stopped making a very important product called insulin!
        </p>
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-300 text-sm mb-2">🎯 <strong className="text-purple-400">Important to know:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
            <li>It's NOT because you ate too much sugar</li>
            <li>It's NOT your fault - nobody did anything wrong</li>
            <li>You can live an amazing, full life with T1D!</li>
            <li>Millions of kids around the world have T1D too</li>
          </ul>
        </div>
      </InfoCard>

      {/* Blood Sugar Explained */}
      <InfoCard
        icon={<Droplet className="w-8 h-8" />}
        title="Understanding Blood Sugar (Glucose)"
        color="from-blue-600 to-cyan-700"
      >
        <p className="text-gray-300 mb-3">
          Blood sugar, also called glucose, is your body's main source of energy. It comes from the food you eat 
          and travels through your blood to give energy to every part of your body!
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-4">
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
            <div className="text-2xl mb-2">📈</div>
            <h5 className="text-red-400 mb-1">Too High</h5>
            <p className="text-gray-400 text-sm">Above 180 mg/dL - You might feel thirsty, tired, or need to pee a lot</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
            <div className="text-2xl mb-2">✅</div>
            <h5 className="text-green-400 mb-1">Just Right</h5>
            <p className="text-gray-400 text-sm">70-180 mg/dL - You feel great and have energy!</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/30">
            <div className="text-2xl mb-2">📉</div>
            <h5 className="text-orange-400 mb-1">Too Low</h5>
            <p className="text-gray-400 text-sm">Below 70 mg/dL - You might feel shaky, sweaty, or confused</p>
          </div>
        </div>
      </InfoCard>

      {/* Insulin Explained */}
      <InfoCard
        icon={<Syringe className="w-8 h-8" />}
        title="How Insulin Works - The Magic Key! 🔑"
        color="from-purple-600 to-indigo-700"
      >
        <p className="text-gray-300 mb-3">
          Imagine insulin as a magic key! Your body's cells are like tiny houses that need energy (glucose). 
          Insulin is the key that unlocks the door to let glucose inside the cells.
        </p>
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 mb-3">
          <p className="text-purple-400 font-medium mb-2">🏠 The Insulin Story:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
            <li>You eat food → Glucose enters your blood 🍎</li>
            <li>Insulin acts like a key 🔑</li>
            <li>It unlocks your cells' doors 🚪</li>
            <li>Glucose goes into cells for energy ⚡</li>
            <li>Your blood sugar stays in a healthy range! ✨</li>
          </ol>
        </div>
        <p className="text-gray-400 text-sm">
          Since your pancreas can't make insulin, you take it as medicine (by injection or pump) to help your body work properly!
        </p>
      </InfoCard>

      {/* Healthy Eating */}
      <InfoCard
        icon={<Apple className="w-8 h-8" />}
        title="Eating Healthy with Diabetes 🍽️"
        color="from-green-600 to-emerald-700"
      >
        <p className="text-gray-300 mb-4">
          You can eat almost everything other kids eat! The key is knowing about carbohydrates (carbs) and planning your insulin.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <h5 className="text-green-400 mb-2 flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              Foods with Carbs
            </h5>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>🍞 Bread, pasta, rice</li>
              <li>🍎 Fruits</li>
              <li>🥛 Milk and yogurt</li>
              <li>🍪 Sweets and desserts</li>
              <li>🥔 Potatoes and corn</li>
            </ul>
            <p className="text-purple-400 text-xs mt-2">These need insulin!</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <h5 className="text-blue-400 mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Low/No Carb Foods
            </h5>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>🥩 Meat, chicken, fish</li>
              <li>🥚 Eggs</li>
              <li>🥗 Most vegetables</li>
              <li>🧀 Cheese</li>
              <li>🥑 Avocado</li>
            </ul>
            <p className="text-blue-400 text-xs mt-2">Need little or no insulin!</p>
          </div>
        </div>
      </InfoCard>

      {/* Exercise & Activity */}
      <InfoCard
        icon={<Activity className="w-8 h-8" />}
        title="Staying Active is Awesome! 🏃‍♀️"
        color="from-amber-600 to-orange-700"
      >
        <p className="text-gray-300 mb-4">
          Exercise is super important and fun! It helps your body use insulin better and keeps you healthy and strong.
        </p>
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 mb-3">
          <p className="text-amber-400 font-medium mb-2">💪 Before Exercise:</p>
          <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
            <li>Check your blood sugar</li>
            <li>If it's low, have a snack first</li>
            <li>Bring fast-acting carbs (like juice or glucose tabs)</li>
            <li>Tell your coach or friends you have diabetes</li>
          </ul>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
          <p className="text-orange-400 font-medium mb-2">🎯 Fun Activities to Try:</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <div>⚽ Soccer</div>
            <div>🏊 Swimming</div>
            <div>🚴 Biking</div>
            <div>💃 Dancing</div>
            <div>🏀 Basketball</div>
            <div>🎾 Tennis</div>
          </div>
        </div>
      </InfoCard>

      {/* Recognizing Hypos and Hypers */}
      <InfoCard
        icon={<AlertCircle className="w-8 h-8" />}
        title="When Blood Sugar is Too High or Low ⚠️"
        color="from-red-600 to-pink-700"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/30">
            <h5 className="text-orange-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">📉</span>
              Low Blood Sugar (Hypo)
            </h5>
            <p className="text-gray-300 text-sm mb-2">You might feel:</p>
            <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside mb-3">
              <li>Shaky or trembling</li>
              <li>Sweaty</li>
              <li>Dizzy or confused</li>
              <li>Hungry</li>
              <li>Fast heartbeat</li>
            </ul>
            <div className="bg-gray-900/50 rounded p-3 border border-gray-700">
              <p className="text-green-400 text-sm font-medium mb-1">What to do:</p>
              <p className="text-gray-300 text-sm">Eat 15g of fast carbs (juice, glucose tabs, honey), wait 15 minutes, then check again!</p>
            </div>
          </div>
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
            <h5 className="text-red-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">📈</span>
              High Blood Sugar (Hyper)
            </h5>
            <p className="text-gray-300 text-sm mb-2">You might feel:</p>
            <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside mb-3">
              <li>Very thirsty</li>
              <li>Need to pee a lot</li>
              <li>Tired or sleepy</li>
              <li>Blurry vision</li>
              <li>Headache</li>
            </ul>
            <div className="bg-gray-900/50 rounded p-3 border border-gray-700">
              <p className="text-purple-400 text-sm font-medium mb-1">What to do:</p>
              <p className="text-gray-300 text-sm">Tell an adult, drink water, and you may need extra insulin. Check for ketones if very high!</p>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* You're Not Alone */}
      <div className="bg-gradient-to-r from-blue-700 via-cyan-700 to-blue-700 rounded-2xl p-6 text-white shadow-xl border border-blue-400/50">
        <div className="text-center">
          <div className="text-5xl mb-3">🌟</div>
          <h3 className="text-white mb-3">You're a Diabetes Superhero!</h3>
          <p className="text-gray-100 mb-4 max-w-2xl mx-auto">
            Managing Type 1 diabetes takes courage, responsibility, and lots of learning. Every day you check your 
            blood sugar, take your insulin, and make healthy choices, you're being a superhero! There are millions 
            of kids just like you all around the world doing amazing things with T1D.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🏅</div>
              <p className="text-sm">You can do anything other kids can do!</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🧠</div>
              <p className="text-sm">Learning makes you stronger and smarter!</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">❤️</div>
              <p className="text-sm">Your family and team are always here to help!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Reminder */}
      <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-4">
        <div className="flex gap-3">
          <Brain className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h4 className="text-yellow-400 mb-1">Remember!</h4>
            <p className="text-gray-300 text-sm">
              This information helps you understand diabetes better, but always follow the advice from your 
              diabetes care team (doctors, nurses, and dietitians). They know YOU and YOUR diabetes best! 
              Never be afraid to ask questions - there are no silly questions when it comes to your health! 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ 
  icon, 
  title, 
  color, 
  children 
}: { 
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      <div className={`bg-gradient-to-r ${color} p-4 border-b border-white/10`}>
        <div className="flex items-center gap-3 text-white">
          <div className="bg-white/20 p-2 rounded-lg">
            {icon}
          </div>
          <h3 className="text-white mb-0">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}