var shortenFilter = function () {
  return function (text, length) {
    if(text.length <= length) {
      return text;
    } else {
      return text.substring(0, length) + " ...";
    }
  }
};

app.filter("shorten", shortenFilter);
