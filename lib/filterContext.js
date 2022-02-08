import { createContext } from "react"

export const blankFilters = () => {
  return []
}

export const FilterContext = createContext({
  currentFilters: blankFilters(),
})