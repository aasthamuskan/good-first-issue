# DSA Pattern Visualizer

A production-ready React + TypeScript application for visualizing Data Structures and Algorithms (DSA) patterns step-by-step.

## 🚀 Features

- **Interactive Visualization**: Watch algorithms execute step-by-step with animated array blocks and pointers.
- **Pattern Support**:
  - **Sliding Window**: Fixed-size window maximum sum subarray.
  - **Two Pointers**: Target sum search on sorted arrays.
  - **Prefix Sum**: Range sum query precomputation.
  - **Binary Search**: Efficient search in sorted arrays.
- **Dual Implementations**: Switch between **Brute Force** and **Optimized** versions for each pattern.
- **Dark Mode**: Fully themed for better accessibility and developer experience.
- **Control Engine**: Play, pause, step forward/backward, and adjust playback speed.

## 🏗️ Architecture

The application follows a strict separation of concerns to ensure scalability and maintainability.

### Layers

1.  **Algorithm Layer (`src/algorithms/`)**: Pure TypeScript logic. Algorithms are deterministic generators that return an array of `Step` objects.
2.  **Engine Layer (`src/engine/`)**: A custom React hook (`useVisualizerEngine`) and a Reducer that manage the state of the visualization (current index, playback, speed).
3.  **UI Layer (`src/components/`)**: React components that render based on the current step state. No algorithm logic resides here.
4.  **Constants & Utils**: Metadata about patterns, complexity data, and shared utility functions.

### Data Flow

```mermaid
graph TD
    A[Input Panel] -->|Params| B[Algorithm Logic]
    B -->|Step[]| C[Visualization Engine]
    C -->|Current Step| D[Visualization Panel]
    C -->|Derived State| E[Control Panel]
    F[Pattern Selector] -->|Pattern Type| B
    G[Mode Toggle] -->|Brute/Optimized| B
```

1.  **Initialization**: The user selects a pattern and algorithm mode.
2.  **Execution**: On "Run", the Algorithm Logic generates a static `Step[]` array.
3.  **Consumption**: The `Step[]` is passed to the Visualization Engine.
4.  **Rendering**: The Engine maintains a pointer to the current step. The UI components subscribe to the Engine's state and render the visual representation.

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Jest + TS-Jest

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

### Running Tests

```bash
npm test
```

## 🧩 Extending the Application

To add a new pattern (e.g., Graph BFS):

1.  **Define Logic**: Create `src/algorithms/graphBFS.ts`. Implement brute force and optimized versions returning `Step[]`.
2.  **Register Pattern**: Add the new pattern type to `src/algorithms/stepGenerator.ts` and update the `generateSteps` function.
3.  **Add Metadata**: Update `src/constants/patterns.ts` and `src/constants/complexity.ts` with the new pattern's details and code snippets.
4.  **Update UI**: The `Header` and `InputPanel` will automatically adapt to include the new pattern if added to the constants.

---

Built with ❤️ for algorithm enthusiasts.
