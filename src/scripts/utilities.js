export const baseUrl = import.meta.env.PROD ? '/holyfans' : '' // Set base url as there are extra path in PROD on GH Pages
export const baseApiUrl = import.meta.env.PROD
  ? 'https://holyfans-api.herokuapp.com'
  : 'http://localhost:3030'
