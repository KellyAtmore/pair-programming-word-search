const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log('horizontalJoin:', horizontalJoin);
  let verified = false;
  for (let l of horizontalJoin) {
    //console.log('l:', l);
    let verify = 0;
    for (let i of word) {
      //console.log('word', word);
      //console.log('i', i);
      let index = l.indexOf(i);
      console.log('index: ', index);
      console.log('l,indexOf(i)', l.indexOf(i));
      if (index !== -1) {
        l = l.slice(index);
        verify++;
      }
    }
    if (verify === word.length) {
      verified = true;
      break;
    }
  }
  return verified;
};


module.exports = wordSearch;