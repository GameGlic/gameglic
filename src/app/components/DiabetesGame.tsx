import { useState } from 'react';
import { Check, X, Sparkles, Trophy, Gift, Crown, Zap, Gamepad } from 'lucide-react';

type Difficulty = 'easy' | 'medium' | 'hard';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
  difficulty: Difficulty;
};

const QUESTIONS: Question[] = [
  // Easy Questions
  {
    id: 1,
    question: "What does insulin do in your body?",
    options: [
      "It makes you sleepy",
      "It helps sugar get into your cells for energy",
      "It makes your bones stronger",
      "It helps you grow taller"
    ],
    correctAnswer: 1,
    explanation: "Great job! Insulin is like a key that unlocks your cells so sugar can go inside and give you energy! 🔑",
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "What is a 'hypo'?",
    options: [
      "When your blood sugar is too high",
      "When you're very hungry",
      "When your blood sugar is too low",
      "When you need to exercise"
    ],
    correctAnswer: 2,
    explanation: "Exactly right! A hypo means your blood sugar is too low. If this happens, you need to eat or drink something with fast sugar! 📉",
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "Which food has the most carbs?",
    options: [
      "Cheese",
      "Chicken",
      "Bread",
      "Lettuce"
    ],
    correctAnswer: 2,
    explanation: "You got it! Bread has lots of carbs. Carbs are the main thing that affects blood sugar! 🍞",
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "What should you do before exercising?",
    options: [
      "Eat a whole cake",
      "Check your blood sugar",
      "Take a long nap",
      "Watch TV"
    ],
    correctAnswer: 1,
    explanation: "Perfect! Always check your blood sugar before exercise to make sure it's not too low! 🏃‍♂️",
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "Is Type 1 diabetes your fault?",
    options: [
      "Yes, I ate too much sugar",
      "Yes, I didn't exercise enough",
      "No, it's nobody's fault!",
      "Yes, I should have been more careful"
    ],
    correctAnswer: 2,
    explanation: "EXACTLY RIGHT! Type 1 diabetes is NEVER your fault! Nobody did anything wrong. You're amazing just the way you are! 💙",
    points: 100,
    difficulty: 'easy'
  },
  // Medium Questions
  {
    id: 6,
    question: "What is a good blood sugar range for most kids?",
    options: [
      "20-50 mg/dL",
      "70-180 mg/dL",
      "200-300 mg/dL",
      "400-500 mg/dL"
    ],
    correctAnswer: 1,
    explanation: "Awesome! 70-180 mg/dL is the target range where you'll feel your best! ✨",
    points: 150,
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "If you feel shaky and sweaty, your blood sugar is probably:",
    options: [
      "Just right",
      "Too high",
      "Too low",
      "It doesn't mean anything"
    ],
    correctAnswer: 2,
    explanation: "Correct! Feeling shaky and sweaty are signs of low blood sugar. Tell an adult right away! ⚠️",
    points: 150,
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Which of these is a 'fast-acting carb' for treating low blood sugar?",
    options: [
      "Peanut butter",
      "Cheese stick",
      "Juice box",
      "Celery"
    ],
    correctAnswer: 2,
    explanation: "Yes! Juice is perfect for treating low blood sugar because it works fast! 🧃",
    points: 150,
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "Can kids with Type 1 diabetes play sports?",
    options: [
      "No, never",
      "Only if they're very careful",
      "Yes! They can do any sport",
      "Only swimming"
    ],
    correctAnswer: 2,
    explanation: "Absolutely! Kids with diabetes can play ANY sport - soccer, basketball, swimming, you name it! 🏅",
    points: 150,
    difficulty: 'medium'
  },
  {
    id: 10,
    question: "What organ makes insulin in people without diabetes?",
    options: [
      "The heart",
      "The pancreas",
      "The brain",
      "The stomach"
    ],
    correctAnswer: 1,
    explanation: "Brilliant! The pancreas is the organ that makes insulin. In Type 1 diabetes, the pancreas can't make enough insulin anymore. 🔬",
    points: 150,
    difficulty: 'medium'
  },
  // Hard Questions
  {
    id: 11,
    question: "What are ketones?",
    options: [
      "A type of vitamin",
      "Chemicals made when burning fat for energy",
      "A diabetes medication",
      "A type of sugar"
    ],
    correctAnswer: 1,
    explanation: "Excellent! Ketones are made when your body doesn't have enough insulin and burns fat instead. High ketones can be dangerous! 🔬",
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 12,
    question: "What is basal insulin?",
    options: [
      "Insulin taken before meals",
      "Background insulin working all day",
      "Insulin for emergencies",
      "Insulin only at night"
    ],
    correctAnswer: 1,
    explanation: "Perfect! Basal insulin is the background insulin that works slowly all day and night to keep blood sugar steady! ⏰",
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 13,
    question: "What is an insulin-to-carb ratio?",
    options: [
      "How much you weigh",
      "How much insulin needed for certain carbs",
      "Your age divided by 10",
      "The size of your insulin pen"
    ],
    correctAnswer: 1,
    explanation: "Great! Your insulin-to-carb ratio tells you how much insulin to take for the carbs you eat! 🎯",
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 14,
    question: "What does DKA stand for?",
    options: [
      "Diabetes Kids Association",
      "Diabetic Ketoacidosis",
      "Daily Ketone Activity",
      "Diabetes Knowledge Award"
    ],
    correctAnswer: 1,
    explanation: "Correct! DKA (Diabetic Ketoacidosis) is a serious condition when ketones get too high. Important to prevent! ⚠️",
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 15,
    question: "What is the 'dawn phenomenon'?",
    options: [
      "Waking up early",
      "Blood sugar rising in early morning",
      "Feeling sleepy at dawn",
      "Taking insulin at sunrise"
    ],
    correctAnswer: 1,
    explanation: "Perfect! The dawn phenomenon is when blood sugar rises in the early morning due to hormones! 🌅",
    points: 200,
    difficulty: 'hard'
  }
];

const PRIZES = [
  { threshold: 0, name: "Getting Started", emoji: "🌱", color: "from-gray-500 to-gray-600" },
  { threshold: 450, name: "Diabetes Explorer", emoji: "🗺️", color: "from-green-500 to-emerald-600" },
  { threshold: 900, name: "Sugar Detective", emoji: "🔍", color: "from-blue-500 to-cyan-600" },
  { threshold: 1350, name: "Insulin Expert", emoji: "💉", color: "from-blue-600 to-indigo-700" },
  { threshold: 1800, name: "Diabetes Champion", emoji: "🏆", color: "from-amber-500 to-orange-600" }
];

type GameState = 'difficulty' | 'intro' | 'playing' | 'answered' | 'complete';

export function DiabetesGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>('difficulty');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [characterMood, setCharacterMood] = useState<'happy' | 'excited' | 'celebrating'>('happy');

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
    setCharacterMood('happy');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState === 'answered') return;
    
    setSelectedAnswer(answerIndex);
    setGameState('answered');

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + currentQuestion.points);
      setCorrectAnswers(prev => prev + 1);
      setCharacterMood('excited');
    } else {
      setCharacterMood('happy');
    }
  };

  const nextQuestion = () => {
    if (isLastQuestion) {
      setGameState('complete');
      setCharacterMood('celebrating');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setGameState('playing');
      setCharacterMood('happy');
    }
  };

  const getCurrentPrize = () => {
    return [...PRIZES].reverse().find(prize => score >= prize.threshold) || PRIZES[0];
  };

  if (gameState === 'difficulty') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Choose Your Difficulty! 🎮
          </h2>
          <p className="text-gray-400">Select a difficulty level to start the quiz!</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 text-center">
          {/* Character Introduction */}
          <div className="mb-6">
            <div className="text-9xl mb-4 animate-bounce">🦸</div>
            <h3 className="text-white mb-2">Meet Glu the Glucose Guardian!</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Hi there, champion! I'm Glu, and I'm here to make learning about diabetes super fun! 
              Are you ready to test your diabetes superpowers? 🌟
            </p>
          </div>

          {/* Difficulty Selection */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div 
              className={`bg-gray-800/50 rounded-xl p-4 border border-gray-700 ${
                difficulty === 'easy' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : ''
              }`}
              onClick={() => setDifficulty('easy')}
            >
              <Gamepad className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">Easy</div>
              <p className="text-gray-400 text-sm">10 Questions</p>
            </div>
            <div 
              className={`bg-gray-800/50 rounded-xl p-4 border border-gray-700 ${
                difficulty === 'medium' ? 'bg-gradient-to-r from-blue-500 to-cyan-600' : ''
              }`}
              onClick={() => setDifficulty('medium')}
            >
              <Zap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">Medium</div>
              <p className="text-gray-400 text-sm">10 Questions</p>
            </div>
            <div 
              className={`bg-gray-800/50 rounded-xl p-4 border border-gray-700 ${
                difficulty === 'hard' ? 'bg-gradient-to-r from-blue-600 to-indigo-700' : ''
              }`}
              onClick={() => setDifficulty('hard')}
            >
              <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">Hard</div>
              <p className="text-gray-400 text-sm">10 Questions</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-purple-400/50"
          >
            Start the Adventure! 🚀
          </button>
        </div>

        {/* Prize Preview */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-white mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" />
            Prizes You Can Win
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {PRIZES.map((prize, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${prize.color} rounded-xl p-4 text-center text-white border border-white/20`}
              >
                <div className="text-4xl mb-2">{prize.emoji}</div>
                <p className="text-sm font-medium">{prize.name}</p>
                <p className="text-xs opacity-75 mt-1">{prize.threshold}+ pts</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'intro') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Diabetes Quiz Adventure! 🎮
          </h2>
          <p className="text-gray-400">Test your knowledge and win awesome prizes!</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 text-center">
          {/* Character Introduction */}
          <div className="mb-6">
            <div className="text-9xl mb-4 animate-bounce">🦸</div>
            <h3 className="text-white mb-2">Meet Glu the Glucose Guardian!</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Hi there, champion! I'm Glu, and I'm here to make learning about diabetes super fun! 
              Are you ready to test your diabetes superpowers? 🌟
            </p>
          </div>

          {/* Game Info */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <Gamepad className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">10</div>
              <p className="text-gray-400 text-sm">Questions</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <Zap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">1300</div>
              <p className="text-gray-400 text-sm">Max Points</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">5</div>
              <p className="text-gray-400 text-sm">Prizes to Unlock</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-purple-400/50"
          >
            Start the Adventure! 🚀
          </button>
        </div>

        {/* Prize Preview */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-white mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" />
            Prizes You Can Win
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {PRIZES.map((prize, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${prize.color} rounded-xl p-4 text-center text-white border border-white/20`}
              >
                <div className="text-4xl mb-2">{prize.emoji}</div>
                <p className="text-sm font-medium">{prize.name}</p>
                <p className="text-xs opacity-75 mt-1">{prize.threshold}+ pts</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'complete') {
    const finalPrize = getCurrentPrize();
    const percentage = Math.round((correctAnswers / QUESTIONS.length) * 100);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Amazing Job! 🎉
          </h2>
          <p className="text-gray-400">You completed the Diabetes Quiz Adventure!</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 text-center">
          {/* Celebrating Character */}
          <div className="text-9xl mb-4 animate-bounce">🦸</div>
          <h3 className="text-white mb-3">Glu says: You're a Diabetes Superstar!</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Wow! You really know your stuff! Every question you answered helps you become stronger and smarter 
            about managing diabetes. I'm so proud of you! 🌟
          </p>

          {/* Score Display */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Trophy className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{score}</div>
              <p className="text-gray-400">Total Points</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Check className="w-10 h-10 text-green-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{correctAnswers}/{QUESTIONS.length}</div>
              <p className="text-gray-400">Correct Answers</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{percentage}%</div>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>

          {/* Prize Won */}
          <div className={`bg-gradient-to-br ${finalPrize.color} rounded-2xl p-8 mb-6 border-2 border-white/30 shadow-2xl`}>
            <Crown className="w-12 h-12 text-white mx-auto mb-3" />
            <h3 className="text-white mb-2">🎁 You Earned:</h3>
            <div className="text-7xl mb-3">{finalPrize.emoji}</div>
            <div className="text-2xl font-bold text-white mb-2">{finalPrize.name}</div>
            <p className="text-white/90">This badge has been added to your collection!</p>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-purple-400/50"
          >
            Play Again! 🔄
          </button>
        </div>

        {/* Encouragement Message */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center">
          <p className="text-gray-300">
            {percentage >= 80 
              ? "🌟 Outstanding! You're a true diabetes expert! Keep up the amazing work!"
              : percentage >= 60
              ? "💪 Great job! You know a lot about diabetes. Keep learning and you'll be an expert in no time!"
              : "🎯 Good effort! Learning takes practice. Try again and you'll do even better! Remember, every question helps you learn something new!"}
          </p>
        </div>
      </div>
    );
  }

  // Playing/Answered state
  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-400 text-sm">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</p>
            <div className="flex items-center gap-2 mt-1">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">{score} points</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Current Prize</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl">{getCurrentPrize().emoji}</span>
              <span className="text-white text-sm">{getCurrentPrize().name}</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-gray-700/50 rounded-full h-3 overflow-hidden border border-gray-600">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Character */}
      <div className="text-center">
        <div className={`text-8xl mb-3 inline-block ${
          characterMood === 'excited' ? 'animate-bounce' : ''
        }`}>
          {characterMood === 'excited' ? '🦸‍♂️' : '🦸'}
        </div>
        {gameState === 'answered' && (
          <p className="text-gray-300 text-sm">
            {selectedAnswer === currentQuestion.correctAnswer 
              ? "Glu: Awesome! You got it right! ⭐" 
              : "Glu: Good try! Let's learn from this! 💪"}
          </p>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
        <div className="flex items-start gap-3 mb-6">
          <div className="bg-purple-500/20 p-3 rounded-full border border-purple-400/30">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white mb-2">{currentQuestion.question}</h3>
            <p className="text-purple-300 text-sm">+{currentQuestion.points} points</p>
          </div>
        </div>

        {/* Answer Options */}
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showResult = gameState === 'answered';

            let buttonClass = "bg-gray-800/50 border-gray-600 text-gray-200 hover:bg-gray-700/50";
            
            if (showResult) {
              if (isCorrect) {
                buttonClass = "bg-green-900/50 border-green-500/50 text-white";
              } else if (isSelected && !isCorrect) {
                buttonClass = "bg-red-900/50 border-red-500/50 text-white";
              }
            } else if (isSelected) {
              buttonClass = "bg-purple-600/30 border-purple-400/50 text-white";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={gameState === 'answered'}
                className={`${buttonClass} border-2 rounded-xl p-4 text-left transition-all transform hover:scale-102 disabled:cursor-not-allowed flex items-center justify-between group`}
              >
                <span>{option}</span>
                {showResult && isCorrect && <Check className="w-6 h-6 text-green-400" />}
                {showResult && isSelected && !isCorrect && <X className="w-6 h-6 text-red-400" />}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {gameState === 'answered' && (
          <div className={`mt-6 rounded-xl p-4 border-2 ${
            selectedAnswer === currentQuestion.correctAnswer
              ? 'bg-green-900/30 border-green-500/30'
              : 'bg-blue-900/30 border-blue-500/30'
          }`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-5 h-5 flex-shrink-0 ${
                selectedAnswer === currentQuestion.correctAnswer ? 'text-green-400' : 'text-blue-400'
              }`} />
              <p className="text-gray-100">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Next Button */}
      {gameState === 'answered' && (
        <div className="text-center">
          <button
            onClick={nextQuestion}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-purple-400/50"
          >
            {isLastQuestion ? 'See Results! 🎉' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}