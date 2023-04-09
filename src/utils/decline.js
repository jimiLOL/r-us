function declineNoun(word) {
  const lastLetter = word[word.length - 1];
  const lastTwoLetters = word.slice(word.length - 2, word.length);
  
  switch (lastLetter) {
    case 'а':
      return word.slice(0, -1) + 'е';
    case 'я':
      return word.slice(0, -1) + 'е';
    case 'о':
      return word + 'м';
    case 'е':
      if (lastTwoLetters === 'ие') {
        return word.slice(0, -2) + 'ьи';
      }
      return word + 'й';
    case 'и':
      if (lastTwoLetters === 'ки' || lastTwoLetters === 'ги') {
        return word.slice(0, -1) + 'ах';
      }
      return word + 'е';
    case 'у':
      return word.slice(0, -1) + 'е';
    case 'ь':
      return word.slice(0, -1) + 'и';
    default:
      return word + 'е';
  }
}

  export default declineNoun;