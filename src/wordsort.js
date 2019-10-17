function spellcheck(string){
    if((string !== 'the')&&(string !== 'and')){
        return '~' + string + '~';
    } else {
    return string
    }
}

// || string != 'of'