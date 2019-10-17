describe('Word spell checker', function(){
    it('describes returning one word that is misppelt', function(){
        var string = "tha"
        var result = spellcheck(string)
        console.log(result)
        expect(result).toEqual('~tha~')
    })    
    it('describes seeing a correct word and returning the word', function(){
        var string = 'the'
        var result = spellcheck(string)
        console.log(result)
        expect(result).toEqual('the')
    })
    it('describes seeing another mispelt word and returnung the highlighted word', function(){
        var string = 'und'
        var result = spellcheck(string)
        console.log(result)
        expect(result).toEqual('~und~')
    })
    it('describes seeing two words, one misspelt, returns both', function(){
        var string = 'und the'
        var result = spellcheck(string)
        console.log(result)
        expect(result).toEqual('~und~ the')
    })
})


