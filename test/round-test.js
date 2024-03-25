const chai = require('chai');
const expect = chai.expect;

const {createDeck} = require('../src/deck');
const {createCard} = require('../src/card');
const {round, takeTurn, calculatePercentCorrect, endRound, calculateTime} = require('../src/round');

describe('round', ()=>{
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    
    const newRound = round(deck)
    it.skip('should be afunction', () => {
        expect(round).to.be.a('function');
    });
    it.skip('should return an object with a(n):\n          -deck holding cards \n          -current card counter that starts at the first card \n          -turns counter', () =>{
        expect(newRound.currentCard).to.deep.equal(deck[0])
        expect(newRound.turns).to.equal(0)
        expect(newRound.deck).to.deep.equal(deck)
    });
});

describe('takeTurn', () => {
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    let newRound = round(deck);
    it.skip('should increment round instance turn counter by 1',()=>{
        const newRound = round(deck);
        takeTurn('',newRound);
        expect(newRound.turns).to.equal(1);
    });
    it.skip('should queue up the next card for the following turn', ()=>{
        let newRound = round(deck);
        takeTurn('',newRound);

       
        expect(newRound.currentCard).to.deep.equals(deck[1])
        
    });
    it.skip('should evaluate a given guess and store incorrect guesses in the proper array of the round instance',()=>{
        let newRound = round(deck);
        takeTurn('wrong',newRound)
        expect(newRound.incorrectGuesses[0]).to.equals('wrong')
    });
    it.skip('should return evaluation feedback as a string',()=>{
        let newRound = round(deck);
        const newResults = takeTurn('',newRound)
        expect(newResults).to.equal('incorrect!')
    });
});

describe('calculatePercentCorrect', () => {
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    it.skip('should be a function.', ()=>{
        expect(calculatePercentCorrect).to.be.a('function');
    });
    it.skip('should calculate the ratio of correct and incorrect guesses as a percentage', ()=>{
        let newRound = round(deck);
        takeTurn('test',newRound);
        takeTurn('test',newRound);
        takeTurn('evil test',newRound);
        const results = calculatePercentCorrect(newRound);
        expect(results).to.equal('66%');
    });
});

describe('endRound',()=>{
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    let newRound = round(deck);
    takeTurn('test',newRound);
    takeTurn('test',newRound);
    takeTurn('evil test',newRound);
    const results = calculatePercentCorrect(newRound);
    it.skip('should be a function',()=>{
        expect(endRound).to.be.a('function');
    });
    it.skip('should interpret the results of calculatePercentCorrect stored as a property of a round in a message printed to the console',()=>{

        newRound.result = calculatePercentCorrect(newRound);
        const resultMessage = endRound(newRound);
        expect(resultMessage).to.equal('** Round over! ** You answered 66% of the questions correctly!');
    });
});

describe('calculateTime', () => {
    it.skip('should take in a time in two time in ms and return a string with the time in minutes and seconds',() =>{
        const startTime = 0
        const completeTime = 100000
        const totalTime = calculateTime(startTime,completeTime)
        expect(totalTime).to.equal(`1 minutes and 40 seconds`)
    })

})