export const getPersonificationUserEmail = () => {
  let params = new URL(document.location).searchParams
  return params.get('persn_email')
}
