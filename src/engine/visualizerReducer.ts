import { Step } from '../algorithms/types';

export type VisualizerState = {
  steps: Step[];
  currentStepIndex: number;
  isPlaying: boolean;
  playbackSpeed: number; // ms delay between steps
};

export type VisualizerAction =
  | { type: 'SET_STEPS'; payload: Step[] }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET' }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_SPEED'; payload: number }
  | { type: 'GO_TO_STEP'; payload: number };

export const initialState: VisualizerState = {
  steps: [],
  currentStepIndex: 0,
  isPlaying: false,
  playbackSpeed: 500,
};

export function visualizerReducer(state: VisualizerState, action: VisualizerAction): VisualizerState {
  switch (action.type) {
    case 'SET_STEPS':
      return {
        ...state,
        steps: action.payload,
        currentStepIndex: 0,
        isPlaying: false,
      };
    case 'NEXT_STEP':
      if (state.currentStepIndex < state.steps.length - 1) {
        return { ...state, currentStepIndex: state.currentStepIndex + 1 };
      }
      return { ...state, isPlaying: false };
    case 'PREV_STEP':
      return {
        ...state,
        currentStepIndex: Math.max(0, state.currentStepIndex - 1),
        isPlaying: false,
      };
    case 'RESET':
      return {
        ...state,
        currentStepIndex: 0,
        isPlaying: false,
      };
    case 'TOGGLE_PLAY':
      if (state.currentStepIndex >= state.steps.length - 1 && !state.isPlaying) {
        return { ...state, currentStepIndex: 0, isPlaying: true };
      }
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_SPEED':
      return { ...state, playbackSpeed: action.payload };
    case 'GO_TO_STEP':
      return {
        ...state,
        currentStepIndex: Math.min(Math.max(0, action.payload), state.steps.length - 1),
      };
    default:
      return state;
  }
}
