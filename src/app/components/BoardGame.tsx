import { useState } from 'react';
import { Flag, Trophy, Sparkles, Check, X, Star, Crown, Zap } from 'lucide-react';

type Difficulty = 'easy' | 'medium' | 'hard';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
};

const QUESTIONS: Question[] = [
  // Easy Questions (1-10)
  {
    id: 1,
    question: "What color is a stop sign? 🛑",
    options: ["Blue", "Red", "Green", "Yellow"],
    correctAnswer: 1,
    explanation: "Great job! Just like a red stop sign, when your blood sugar is too high, your body needs you to stop and take action!",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Insulin helps sugar go into your cells. True or False?",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Yes! Insulin is like a key that opens the door to let sugar into your cells for energy! 🔑",
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "Which of these is a fruit?",
    options: ["Chicken", "Apple", "Cheese", "Bread"],
    correctAnswer: 1,
    explanation: "Correct! Apples are healthy fruits with natural sugar and vitamins! 🍎",
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Should you check your blood sugar every day?",
    options: ["Yes", "No", "Only on weekends", "Never"],
    correctAnswer: 0,
    explanation: "Absolutely! Checking your blood sugar helps you stay healthy and feel your best! ⭐",
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "Exercise is good for kids with diabetes. True or False?",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Yes! Exercise is great for everyone, including kids with diabetes! 🏃‍♂️",
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "What should you drink most often?",
    options: ["Soda", "Water", "Energy drinks", "Only milk"],
    correctAnswer: 1,
    explanation: "Perfect! Water is the best drink for staying hydrated and it doesn't affect your blood sugar! 💧",
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Is Type 1 diabetes your fault?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation: "That's right! Type 1 diabetes is NEVER anyone's fault. You're awesome just the way you are! 💙",
    difficulty: 'easy'
  },
  {
    id: 8,
    question: "Which helps treat low blood sugar quickly?",
    options: ["Cheese", "Juice", "Nuts", "Lettuce"],
    correctAnswer: 1,
    explanation: "Excellent! Juice has fast-acting sugar that helps when your blood sugar is low! 🧃",
    difficulty: 'easy'
  },
  {
    id: 9,
    question: "Should you tell your teacher you have diabetes?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! Your teacher should know so they can help if you need anything! 👩‍🏫",
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "Can kids with diabetes play sports?",
    options: ["Yes, all sports!", "No sports allowed", "Only quiet games", "Only swimming"],
    correctAnswer: 0,
    explanation: "Absolutely! You can play any sport you want - soccer, basketball, swimming, everything! 🏅",
    difficulty: 'easy'
  },
  // Medium Questions (11-20)
  {
    id: 11,
    question: "What is the organ that makes insulin in people without diabetes?",
    options: ["Heart", "Pancreas", "Liver", "Stomach"],
    correctAnswer: 1,
    explanation: "Correct! The pancreas is a small organ that makes insulin. In T1D, it stops making enough insulin! 🔬",
    difficulty: 'medium'
  },
  {
    id: 12,
    question: "What is a healthy blood sugar range for most kids?",
    options: ["10-50 mg/dL", "70-180 mg/dL", "200-300 mg/dL", "400-500 mg/dL"],
    correctAnswer: 1,
    explanation: "Perfect! 70-180 mg/dL is where you feel your best and have lots of energy! ✨",
    difficulty: 'medium'
  },
  {
    id: 13,
    question: "What does 'hypo' mean?",
    options: ["High blood sugar", "Low blood sugar", "Normal blood sugar", "No blood sugar"],
    correctAnswer: 1,
    explanation: "That's right! Hypo means low blood sugar. If you feel shaky or sweaty, you might have a hypo! 📉",
    difficulty: 'medium'
  },
  {
    id: 14,
    question: "Which food has the MOST carbs?",
    options: ["Eggs", "Pasta", "Chicken", "Cucumber"],
    correctAnswer: 1,
    explanation: "Yes! Pasta has lots of carbs. Carbs are what affect your blood sugar the most! 🍝",
    difficulty: 'medium'
  },
  {
    id: 15,
    question: "What should you do BEFORE exercising?",
    options: ["Eat a whole pizza", "Check your blood sugar", "Take a nap", "Nothing special"],
    correctAnswer: 1,
    explanation: "Great thinking! Always check your blood sugar before exercise to stay safe! 🎯",
    difficulty: 'medium'
  },
  {
    id: 16,
    question: "How many grams of carbs should you eat to treat low blood sugar?",
    options: ["5 grams", "15 grams", "50 grams", "100 grams"],
    correctAnswer: 1,
    explanation: "Excellent! 15 grams of fast-acting carbs is the right amount to treat a low! 🎯",
    difficulty: 'medium'
  },
  {
    id: 17,
    question: "Which of these foods has almost NO carbs?",
    options: ["Bread", "Rice", "Chicken", "Banana"],
    correctAnswer: 2,
    explanation: "Right! Chicken is a protein with almost no carbs, so it doesn't raise blood sugar much! 🍗",
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "What does HbA1c measure?",
    options: ["Your height", "Your weight", "Your average blood sugar over 3 months", "Your age"],
    correctAnswer: 2,
    explanation: "Perfect! HbA1c shows your average blood sugar over the past 2-3 months! 📊",
    difficulty: 'medium'
  },
  {
    id: 19,
    question: "If you feel shaky and sweaty, what's your blood sugar probably doing?",
    options: ["Going up", "Going down", "Staying perfect", "Nothing"],
    correctAnswer: 1,
    explanation: "Correct! Shaky and sweaty feelings often mean your blood sugar is going down (hypoglycemia)! ⚠️",
    difficulty: 'medium'
  },
  {
    id: 20,
    question: "Can you eat birthday cake with Type 1 diabetes?",
    options: ["Never!", "Yes, with the right insulin", "Only on holidays", "Only if it's sugar-free"],
    correctAnswer: 1,
    explanation: "Yes! You can enjoy cake and treats when you plan your insulin correctly! 🎂",
    difficulty: 'medium'
  },
  // Hard Questions (21-30)
  {
    id: 21,
    question: "What are ketones?",
    options: [
      "A type of candy",
      "Chemicals your body makes when it burns fat for energy",
      "A vitamin supplement",
      "A diabetes medication"
    ],
    correctAnswer: 1,
    explanation: "Excellent! Ketones happen when your body doesn't have enough insulin and starts burning fat. High ketones can be dangerous! 🔬",
    difficulty: 'hard'
  },
  {
    id: 22,
    question: "What is the 'honeymoon phase' in Type 1 diabetes?",
    options: [
      "When you first get diagnosed",
      "A period where the pancreas still makes some insulin",
      "When you feel really happy",
      "A vacation for people with diabetes"
    ],
    correctAnswer: 1,
    explanation: "Right! The honeymoon phase is when the pancreas still makes a little insulin after diagnosis. It doesn't last forever! 🍯",
    difficulty: 'hard'
  },
  {
    id: 23,
    question: "What is basal insulin?",
    options: [
      "Insulin you take before meals",
      "Background insulin that works all day",
      "Insulin for emergencies only",
      "Insulin you only take at night"
    ],
    correctAnswer: 1,
    explanation: "Perfect! Basal insulin is the background insulin that works slowly all day and night! ⏰",
    difficulty: 'hard'
  },
  {
    id: 24,
    question: "What is an insulin-to-carb ratio?",
    options: [
      "How much you weigh",
      "How much insulin you need for a certain amount of carbs",
      "Your age divided by 10",
      "The size of your insulin pen"
    ],
    correctAnswer: 1,
    explanation: "Great! Your insulin-to-carb ratio tells you how much insulin to take for the carbs you eat! 🎯",
    difficulty: 'hard'
  },
  {
    id: 25,
    question: "What does DKA stand for?",
    options: [
      "Diabetes Kids Association",
      "Diabetic Ketoacidosis",
      "Daily Ketone Activity",
      "Diabetes Knowledge Award"
    ],
    correctAnswer: 1,
    explanation: "Correct! DKA (Diabetic Ketoacidosis) is a serious condition that happens when ketones get too high. Always important to prevent! ⚠️",
    difficulty: 'hard'
  },
  {
    id: 26,
    question: "What is a correction factor (sensitivity factor)?",
    options: [
      "How fast you can run",
      "How much 1 unit of insulin lowers your blood sugar",
      "Your favorite number",
      "How tall you are"
    ],
    correctAnswer: 1,
    explanation: "Excellent! Your correction factor tells you how much one unit of insulin will lower your blood sugar! 📐",
    difficulty: 'hard'
  },
  {
    id: 27,
    question: "Why might exercise cause low blood sugar hours later?",
    options: [
      "It doesn't affect blood sugar later",
      "Your muscles keep using sugar even after you stop",
      "You forget to eat",
      "Your insulin stops working"
    ],
    correctAnswer: 1,
    explanation: "Right! Your muscles can use sugar for many hours after exercise, which can cause delayed lows! 💪",
    difficulty: 'hard'
  },
  {
    id: 28,
    question: "What is the 'dawn phenomenon'?",
    options: [
      "Waking up early",
      "Blood sugar rising in the early morning",
      "Feeling sleepy at dawn",
      "Taking insulin at sunrise"
    ],
    correctAnswer: 1,
    explanation: "Perfect! The dawn phenomenon is when your blood sugar rises in the early morning due to hormones! 🌅",
    difficulty: 'hard'
  },
  {
    id: 29,
    question: "What is gastroparesis?",
    options: [
      "A new video game",
      "Delayed stomach emptying",
      "Fast digestion",
      "A type of insulin"
    ],
    correctAnswer: 1,
    explanation: "Correct! Gastroparesis means your stomach empties food more slowly than normal. It can affect blood sugar timing! 🫃",
    difficulty: 'hard'
  },
  {
    id: 30,
    question: "What does 'bolus' insulin mean?",
    options: [
      "The brand name of insulin",
      "Fast-acting insulin for meals or corrections",
      "Insulin you never take",
      "Insulin for pets"
    ],
    correctAnswer: 1,
    explanation: "Great! Bolus insulin is the fast-acting insulin you take for meals or to correct high blood sugar! 💉",
    difficulty: 'hard'
  }
];

const BOARD_SPACES = 30;

type GameState = 'difficulty' | 'playing' | 'answered' | 'complete';

export function BoardGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>('difficulty');
  const [currentPosition, setCurrentPosition] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const getDifficultyQuestions = () => {
    return QUESTIONS.filter(q => q.difficulty === difficulty);
  };

  const getRandomQuestion = () => {
    const availableQuestions = getDifficultyQuestions().filter(
      q => !questionsAsked.includes(q.id)
    );
    
    if (availableQuestions.length === 0) {
      // Reset if all questions have been asked
      setQuestionsAsked([]);
      return getDifficultyQuestions()[Math.floor(Math.random() * getDifficultyQuestions().length)];
    }
    
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  };

  const startGame = (selectedDifficulty: Difficulty) => {
    setDifficulty(selectedDifficulty);
    setGameState('playing');
    setCurrentPosition(0);
    setQuestionsAsked([]);
    setScore(0);
    setLives(3);
    const question = getRandomQuestion();
    setCurrentQuestion(question);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!currentQuestion || gameState === 'answered') return;
    
    setSelectedAnswer(answerIndex);
    setGameState('answered');

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const points = difficulty === 'easy' ? 100 : difficulty === 'medium' ? 150 : 200;
      setScore(prev => prev + points);
    } else {
      setLives(prev => prev - 1);
    }
  };

  const nextQuestion = () => {
    if (!currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const newPosition = currentPosition + 1;
      
      if (newPosition >= BOARD_SPACES) {
        setGameState('complete');
        return;
      }
      
      setCurrentPosition(newPosition);
    }

    if (lives <= 0) {
      setGameState('complete');
      return;
    }

    setQuestionsAsked(prev => [...prev, currentQuestion.id]);
    const nextQ = getRandomQuestion();
    setCurrentQuestion(nextQ);
    setSelectedAnswer(null);
    setGameState('playing');
  };

  if (gameState === 'difficulty') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
            Diabetes Board Game Adventure! 🎲
          </h2>
          <p className="text-gray-400">Choose your difficulty and race to the finish line!</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 text-center">
          <div className="text-8xl mb-4">🦸</div>
          <h3 className="text-white mb-2">Welcome, Brave Explorer!</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm Glu, and I'll guide you through this amazing board game! Answer questions correctly to move forward. 
            Reach the finish line to win amazing prizes! Choose your challenge level:
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <DifficultyCard
              title="Easy Explorer"
              emoji="🌟"
              description="Perfect for beginners! Simple questions about diabetes basics."
              color="from-green-600 to-emerald-700"
              spaces={BOARD_SPACES}
              lives={3}
              onClick={() => startGame('easy')}
            />
            <DifficultyCard
              title="Medium Master"
              emoji="⚡"
              description="For those who know their stuff! More challenging questions."
              color="from-blue-600 to-cyan-700"
              spaces={BOARD_SPACES}
              lives={3}
              onClick={() => startGame('medium')}
            />
            <DifficultyCard
              title="Hard Hero"
              emoji="🔥"
              description="For true diabetes experts! Advanced medical knowledge needed."
              color="from-red-600 to-orange-700"
              spaces={BOARD_SPACES}
              lives={3}
              onClick={() => startGame('hard')}
            />
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'complete') {
    const won = currentPosition >= BOARD_SPACES;
    const percentage = Math.round((currentPosition / BOARD_SPACES) * 100);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
            {won ? 'Congratulations! 🎉' : 'Game Over!'}
          </h2>
          <p className="text-gray-400">{won ? 'You reached the finish line!' : 'Keep learning and try again!'}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 text-center">
          <div className="text-9xl mb-4">{won ? '🏆' : '🦸'}</div>
          <h3 className="text-white mb-3">
            {won 
              ? `You're a ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Champion!`
              : "Great effort! You're getting smarter every day!"}
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            {won
              ? "Amazing job! You made it all the way to the end! Your diabetes knowledge is incredible! 🌟"
              : "Don't worry! Every question you answer teaches you something new. Keep learning and you'll win next time! 💪"}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Trophy className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{score}</div>
              <p className="text-gray-400">Points Earned</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Flag className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{currentPosition}/{BOARD_SPACES}</div>
              <p className="text-gray-400">Spaces Reached</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{percentage}%</div>
              <p className="text-gray-400">Progress</p>
            </div>
          </div>

          {won && (
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 mb-6 border-2 border-amber-400/50 shadow-2xl">
              <Crown className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-white mb-2">🎁 Victory Prize:</h3>
              <div className="text-7xl mb-3">
                {difficulty === 'easy' ? '🌟' : difficulty === 'medium' ? '⚡' : '🔥'}
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {difficulty === 'easy' ? 'Explorer Badge' : difficulty === 'medium' ? 'Master Badge' : 'Hero Badge'}
              </div>
              <p className="text-white/90">Added to your achievements!</p>
            </div>
          )}

          <button
            onClick={() => setGameState('difficulty')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-blue-400/50"
          >
            Play Again! 🔄
          </button>
        </div>
      </div>
    );
  }

  // Playing/Answered state
  return (
    <div className="space-y-6">
      {/* Game Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-gray-400 text-sm">Score</span>
          </div>
          <div className="text-2xl font-bold text-white">{score}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Flag className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400 text-sm">Position</span>
          </div>
          <div className="text-2xl font-bold text-white">{currentPosition}/{BOARD_SPACES}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-red-400" />
            <span className="text-gray-400 text-sm">Lives</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {'❤️'.repeat(lives)}
            {'🖤'.repeat(3 - lives)}
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Difficulty</span>
          </div>
          <div className="text-lg font-bold text-white capitalize">{difficulty}</div>
        </div>
      </div>

      {/* Board */}
      <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <Flag className="w-5 h-5 text-blue-400" />
          Race to the Finish!
        </h3>
        <div className="grid grid-cols-10 gap-2 mb-4">
          {[...Array(BOARD_SPACES)].map((_, index) => {
            const isCurrentPosition = index === currentPosition;
            const isPassed = index < currentPosition;
            const isFinish = index === BOARD_SPACES - 1;

            return (
              <div
                key={index}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                  isCurrentPosition
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white scale-110 shadow-lg border-2 border-blue-300 animate-pulse'
                    : isPassed
                    ? 'bg-green-600/50 text-white border border-green-400/50'
                    : isFinish
                    ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white border-2 border-amber-300'
                    : 'bg-gray-700/50 text-gray-500 border border-gray-600'
                }`}
              >
                {isCurrentPosition ? '🦸' : isFinish ? '🏁' : index + 1}
              </div>
            );
          })}
        </div>
        <div className="text-center text-gray-400 text-sm">
          {currentPosition === 0 ? 'Start your journey!' : `${BOARD_SPACES - currentPosition} spaces to victory!`}
        </div>
      </div>

      {/* Character */}
      <div className="text-center">
        <div className="text-7xl mb-2 inline-block">
          {gameState === 'answered' && selectedAnswer === currentQuestion?.correctAnswer ? '🎉' : '🦸'}
        </div>
        {gameState === 'answered' && currentQuestion && (
          <p className="text-gray-300 text-sm">
            {selectedAnswer === currentQuestion.correctAnswer 
              ? "Glu: Perfect! Take one step forward! 🎯" 
              : "Glu: Not quite, but you're learning! Try the next one! 💪"}
          </p>
        )}
      </div>

      {/* Question */}
      {currentQuestion && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-full border border-blue-400/30">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2">{currentQuestion.question}</h3>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  difficulty === 'easy' 
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : difficulty === 'medium'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    : 'bg-red-500/20 text-red-400 border border-red-400/30'
                }`}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </span>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-sm">
                  +{difficulty === 'easy' ? 100 : difficulty === 'medium' ? 150 : 200} pts
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = gameState === 'answered';

              let buttonClass = "bg-gray-700/50 border-gray-600 text-gray-200 hover:bg-gray-600/50";
              
              if (showResult) {
                if (isCorrect) {
                  buttonClass = "bg-green-900/50 border-green-500/50 text-white";
                } else if (isSelected && !isCorrect) {
                  buttonClass = "bg-red-900/50 border-red-500/50 text-white";
                }
              } else if (isSelected) {
                buttonClass = "bg-blue-600/30 border-blue-400/50 text-white";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={gameState === 'answered'}
                  className={`${buttonClass} border-2 rounded-xl p-4 text-left transition-all transform hover:scale-102 disabled:cursor-not-allowed flex items-center justify-between`}
                >
                  <span>{option}</span>
                  {showResult && isCorrect && <Check className="w-6 h-6 text-green-400" />}
                  {showResult && isSelected && !isCorrect && <X className="w-6 h-6 text-red-400" />}
                </button>
              );
            })}
          </div>

          {gameState === 'answered' && currentQuestion && (
            <div className={`mt-6 rounded-xl p-4 border-2 ${
              selectedAnswer === currentQuestion.correctAnswer
                ? 'bg-green-900/30 border-green-500/30'
                : 'bg-blue-900/30 border-blue-500/30'
            }`}>
              <p className="text-gray-100">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      )}

      {gameState === 'answered' && (
        <div className="text-center">
          <button
            onClick={nextQuestion}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 border border-blue-400/50"
          >
            Continue Journey! →
          </button>
        </div>
      )}
    </div>
  );
}

function DifficultyCard({
  title,
  emoji,
  description,
  color,
  spaces,
  lives,
  onClick
}: {
  title: string;
  emoji: string;
  description: string;
  color: string;
  spaces: number;
  lives: number;
  onClick: () => void;
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-105 cursor-pointer group" onClick={onClick}>
      <div className={`bg-gradient-to-br ${color} p-6 text-center border-b border-white/10`}>
        <div className="text-6xl mb-3">{emoji}</div>
        <h3 className="text-white mb-0">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center justify-between">
            <span>Spaces to finish:</span>
            <span className="text-white font-medium">{spaces}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Lives:</span>
            <span className="text-white font-medium">{'❤️'.repeat(lives)}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors">
          Start Game!
        </button>
      </div>
    </div>
  );
}
