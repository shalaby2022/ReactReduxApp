import axios from "axios"
import { Action } from "./../actions/index"
import { ActionTypes } from "../actionTypes"
import { Dispatch } from "redux"

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.search_repositories,
    })

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search?",
        {
          params: {
            text: term,
          },
        }
      )

      const names = data.objects.map((result: any) => result.package.name)
      dispatch({
        type: ActionTypes.search_repositories_success,
        payload: names,
      })
    } catch (err: any) {
      if (err) {
        dispatch({
          type: ActionTypes.search_repositories_error,
          payload: err.message,
        })
      }
    }
  }
}
