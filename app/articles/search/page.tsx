import React from 'react'

interface searchProps{
  searchParams: {query: string};
}

const SearchPage = ({searchParams}: searchProps) => {
  const query = searchParams.query

  return (
    <div>Search for {query}</div>
  )
}

export default SearchPage