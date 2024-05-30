function authenticate(login, password) {
  if (login === 'login' && password === 'password') {
    return 'You are login';
  } else {
    return 'Login is not correct';
  }
}