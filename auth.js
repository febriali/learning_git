function authenticate(login, password) {
  if (login === 'login' && password === 'password') {
    return 'Welcome';
  } else {
    return 'Login is not correct';
  }
}