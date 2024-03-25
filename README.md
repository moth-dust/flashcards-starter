# FlashCards Gwyneth Patrick, Turing FE 2401.
## Abstract
A CLI flashcard game that processes a deck of cards into a series of mnultiple choice questions, complete with a timer and percent score calculator.

## Setup

Clone or fork and clone this repo to your personal machine.

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

Running `node index.js` from the root of this repository should result in the following message being displayed in your terminal: 

```bash
Your project is running...
Welcome to FlashCards! You are playing with 30 cards.
```
Followed by the 1st question from the deck.

## Interacting with the program.

To answer the question use your up and down arrow keys to navigate the multiple choice answers, you may also type the integer associated with the answer you'd like to select. In either case, upon selecting your answer, submit with the return/enter key. You should recieve feedback on this answer and the next card will be drawn, repeating this interaction until the deck is out of cards. You will then get a message reporting a score in the form of a percentage. 


![flash cards example image](https://i.imgur.com/H0dQGla.png) 

---

## Note on Test Files
UPDATE: The tests now function with the current version, but for grading purposes the message below will be temporarily left in for grading purposes before being removed.

The test files are depricated and will not work in the current version of the main branch as of writing this. They did at one point pass and work as expected, and these can be observed functioning by pulling from the branch "feature/deck-and-round". The tests were originally written with the idea objects would be cloned and the clones returned when finished, though this caused problems with the action based approach of interacting with objects in the pre-existing utils.js file; it was decided this approach should take priority.

## Running Tests

Run the test suite using the command:

```bash
npm test
```
Tests are skipped by default in the main branch, but left unskipped in the afformentioned branch since checking out that branch mostly exists to verify previous versions as passing.

## Learning goals
The goal of this project was to to start entering data handling and back end interaction that does not use the DOM to drive events. In this case these events were driven by CLI that was given to us ready to use.

## Challenges
The biggest challenge with this project was understanding the process and output of code I understood well enough to understand its outputs, but did not understand every detail of its function. I also really only understood this after making the first version of the functions and tests I wrote. This is because once connected to the pre-made file I began having to resolve a sequence of errors that eventually led the program to a functioning state, and it was only because of these errors that I .

## Wins.
Conversely, resolving these errors took relatively little time and it made me feel as though I'm really starting to get a handle on common js errors and how to fix them even when there are gaps in knowledge of how the code I did not write is working. Additionally even though it ended up not being useful, I was proud of the work I did understanding calculation based functions when manipulating objects in js.
