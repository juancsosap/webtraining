function consoleMessage() {
  console.log('Welcome to JavaScript Training');
  console.error('Welcome to JavaScript Training');
  console.warn('Welcome to JavaScript Training');
  console.log('%cWelcome to JavaScript Training', 'color:blue');
  console.log('%cWelcome to JavaScript Training', 'color:white; background:black');
  console.log('%cWelcome to %cJavaScript Training', 'color:blue', 'color:red');
  console.log('%cWelcome to %s', 'color:blue', 'JavaScript Training');
  console.log('%cWelcome to JavaScript Training', 'text-success');
}
