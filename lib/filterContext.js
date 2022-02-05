import React from "react"

export const blankFilters = () => {
  return []
}

export const FilterContext = React.createContext({
  currentFilters: blankFilters(),
})