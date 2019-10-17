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
    it('describes checking 3 words where two are wrong', function(){
        var string = 'und the af'
        var result = spellcheck(string)
        expect(result).toEqual('~und~ the ~af~')
    })
    it('describes checking 4 words with 3 incorrect', function(){
        var string = 'und the af e'
        var result = spellcheck(string)
        expect(result).toEqual('~und~ the ~af~ ~e~')
    })
    it('describes checking 5 words all correct', function(){
        var string = 'and the of a to'
        var result = spellcheck(string)
        expect(result).toEqual('and the of a to')
    })
})


