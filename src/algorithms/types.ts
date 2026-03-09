export type Step = {
  array: number[]
  left?: number
  right?: number
  mid?: number
  currentSum?: number
  bestResult?: number
  target?: number
  explanation?: string
}

export type AlgorithmParams = {
  array: number[]
  k?: number
  target?: number
}

export type AlgorithmFunction = (params: AlgorithmParams) => Step[]
