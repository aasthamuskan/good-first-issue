import React from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import { Slider } from '../ui/Slider';

interface ControlPanelProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  playbackSpeed: number;
  onSpeedChange: (speed: number) => void;
  currentStep: number;
  totalSteps: number;
  disabled?: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isPlaying,
  onTogglePlay,
  onNext,
  onPrev,
  onReset,
  playbackSpeed,
  onSpeedChange,
  currentStep,
  totalSteps,
  disabled = false,
}) => {
  return (
    <div className="p-4 bg-white border rounded-xl dark:bg-slate-900 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={onReset}
            disabled={disabled}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800 transition-colors disabled:opacity-30"
            title="Reset"
          >
            <RotateCcw size={20} />
          </button>

          <button
            onClick={onPrev}
            disabled={disabled || currentStep === 0}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800 transition-colors disabled:opacity-30"
            title="Previous Step"
          >
            <SkipBack size={20} fill="currentColor" />
          </button>

          <button
            onClick={onTogglePlay}
            disabled={disabled || totalSteps === 0}
            className="flex items-center justify-center w-12 h-12 text-white transition-all bg-primary-600 rounded-full hover:bg-primary-700 active:scale-90 disabled:opacity-50 disabled:active:scale-100 shadow-lg shadow-primary-500/30"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={24} fill="currentColor" />
            ) : (
              <Play size={24} className="ml-1" fill="currentColor" />
            )}
          </button>

          <button
            onClick={onNext}
            disabled={disabled || currentStep >= totalSteps - 1}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800 transition-colors disabled:opacity-30"
            title="Next Step"
          >
            <SkipForward size={20} fill="currentColor" />
          </button>
        </div>

        <div className="flex-1 max-w-xs px-4">
          <Slider
            label="Playback Delay"
            min={100}
            max={2000}
            step={100}
            value={playbackSpeed}
            onChange={onSpeedChange}
            disabled={disabled}
          />
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</span>
          <div className="text-lg font-mono font-bold text-slate-700 dark:text-slate-200">
            {totalSteps > 0 ? currentStep + 1 : 0} <span className="text-slate-300 dark:text-slate-600">/</span> {totalSteps}
          </div>
        </div>
      </div>

      <div className="mt-4 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all duration-300 ease-out"
          style={{ width: `${totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
};
