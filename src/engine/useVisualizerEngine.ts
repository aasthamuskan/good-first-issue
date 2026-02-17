import { useReducer, useEffect, useCallback } from 'react';
import { visualizerReducer, initialState, VisualizerAction } from './visualizerReducer';
import { Step } from '../algorithms/types';

export const useVisualizerEngine = () => {
  const [state, dispatch] = useReducer(visualizerReducer, initialState);

  const setSteps = useCallback((steps: Step[]) => {
    dispatch({ type: 'SET_STEPS', payload: steps });
  }, []);

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const togglePlay = useCallback(() => {
    dispatch({ type: 'TOGGLE_PLAY' });
  }, []);

  const setSpeed = useCallback((speed: number) => {
    dispatch({ type: 'SET_SPEED', payload: speed });
  }, []);

  const goToStep = useCallback((index: number) => {
    dispatch({ type: 'GO_TO_STEP', payload: index });
  }, []);

  // Playback logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (state.isPlaying && state.currentStepIndex < state.steps.length - 1) {
      interval = setInterval(() => {
        nextStep();
      }, state.playbackSpeed);
    } else if (state.currentStepIndex >= state.steps.length - 1) {
      if (state.isPlaying) {
        dispatch({ type: 'TOGGLE_PLAY' }); // Pause if reached end
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.isPlaying, state.currentStepIndex, state.steps.length, state.playbackSpeed, nextStep]);

  const currentStep = state.steps[state.currentStepIndex] || null;

  return {
    // State
    steps: state.steps,
    currentStepIndex: state.currentStepIndex,
    isPlaying: state.isPlaying,
    playbackSpeed: state.playbackSpeed,
    currentStep,

    // Actions
    setSteps,
    nextStep,
    prevStep,
    reset,
    togglePlay,
    setSpeed,
    goToStep,

    // Derived state
    isFirstStep: state.currentStepIndex === 0,
    isLastStep: state.currentStepIndex === state.steps.length - 1 || state.steps.length === 0,
    progress: state.steps.length > 0 ? (state.currentStepIndex / (state.steps.length - 1)) * 100 : 0,
  };
};
