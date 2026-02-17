export type Step = {
  array: number[]
  left?: number
  right?: number
  currentSum?: number
  bestResult?: number
  explanation?: string
}

export type AlgorithmParams = {
  array: number[]
  k?: number
  target?: number
}

export type AlgorithmFunction = (params: AlgorithmParams) => Step[]
