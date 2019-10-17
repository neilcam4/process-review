function spellcheck(string){
    var words = string.split(' ')
    var wordArray = []
    words.forEach(function(word){
        if((word !== 'the') && (word !== 'and')&& word !=='of'&& word !== 'a' && word !== 'to'){
           wordArray.push('~' + word + '~');
    } else {
        wordArray.push(word);
    }
})
console.log(wordArray)
return wordArray.join(" ")
}

