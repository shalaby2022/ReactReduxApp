import { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("")
  const { searchRepositories } = useActions()

  const { loading, data, error } = useTypedSelector(
    (state) => state.reposatories
  )

  const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading....</h3>}
      {!error && !loading && data && (
        <ul>
          {data.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RepositoriesList
