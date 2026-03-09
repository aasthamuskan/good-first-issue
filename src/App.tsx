import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { InputPanel } from './components/panels/InputPanel';
import { VisualizationPanel } from './components/panels/VisualizationPanel';
import { CodePanel } from './components/panels/CodePanel';
import { ControlPanel } from './components/panels/ControlPanel';
import { useVisualizerEngine } from './engine/useVisualizerEngine';
import { PatternType, AlgorithmMode, generateSteps } from './algorithms/stepGenerator';
import { PATTERN_METADATA } from './constants/patterns';
import { COMPLEXITY_DATA } from './constants/complexity';

function App() {
  const [pattern, setPattern] = useState<PatternType>('SLIDING_WINDOW');
  const [mode, setMode] = useState<AlgorithmMode>('OPTIMIZED');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const engine = useVisualizerEngine();

  const handleRun = useCallback((array: number[], k: number, target: number) => {
    const steps = generateSteps(pattern, mode, { array, k, target });
    engine.setSteps(steps);
  }, [pattern, mode, engine]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const metadata = PATTERN_METADATA[pattern];
  const complexity = COMPLEXITY_DATA[pattern][mode];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header
        currentPattern={pattern}
        onPatternChange={setPattern}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="container flex-1 px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Input and Code */}
          <div className="space-y-6 lg:col-span-4">
            <InputPanel
              pattern={pattern}
              onRun={handleRun}
              onReset={engine.reset}
              disabled={engine.isPlaying}
            />

            <div className="hidden lg:block h-[400px]">
              <CodePanel
                mode={mode}
                onModeChange={setMode}
                bruteForceCode={metadata.bruteForceCode}
                optimizedCode={metadata.optimizedCode}
              />
            </div>
          </div>

          {/* Right Column: Visualization and Controls */}
          <div className="space-y-6 lg:col-span-8">
            <div className="p-6 bg-white border rounded-xl dark:bg-slate-900 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{metadata.title}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{metadata.description}</p>
                </div>
                <div className="lg:hidden">
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value as AlgorithmMode)}
                    className="px-3 py-1 text-xs font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-none outline-none"
                  >
                    <option value="BRUTE_FORCE">Brute Force</option>
                    <option value="OPTIMIZED">Optimized</option>
                  </select>
                </div>
              </div>

              <VisualizationPanel currentStep={engine.currentStep} />
            </div>

            <ControlPanel
              isPlaying={engine.isPlaying}
              onTogglePlay={engine.togglePlay}
              onNext={engine.nextStep}
              onPrev={engine.prevStep}
              onReset={engine.reset}
              playbackSpeed={engine.playbackSpeed}
              onSpeedChange={engine.setSpeed}
              currentStep={engine.currentStepIndex}
              totalSteps={engine.steps.length}
              disabled={engine.steps.length === 0}
            />

            <div className="lg:hidden">
              <CodePanel
                mode={mode}
                onModeChange={setMode}
                bruteForceCode={metadata.bruteForceCode}
                optimizedCode={metadata.optimizedCode}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer
        timeComplexity={complexity.time}
        spaceComplexity={complexity.space}
        invariant={complexity.invariant}
      />
    </div>
  );
}

export default App;
