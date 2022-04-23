// signup, login, logout

export const signup = user => (
   $.ajax({
     method: 'POST',
     url: '/api/users',
     data: { user }
   })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => {
  return(
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
    })
  )
}
