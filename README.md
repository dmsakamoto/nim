# nim

## Install instructions

`npm install`

Webpack should run as a postinstall. If not, `webpack`

Open `index.html`

## Rules of Nim

"Nim" is a two-player game played with sticks. The sticks are divided into piles.
The players alternate turns. On each player's turn they may remove any number of
sticks from one of the piles, up to the number of sticks remaining in that pile;
but they can only take from a single pile on a given turn.

The goal is to take the last stick. Whoever takes the last stick wins.

So the goal is to make the other person clear out all but one pile, so you can
take all the sticks in that last pile. Etc.

Let's play a game starting from the game state 3, 5, 8. You can go first.
Use your "back" button or "Go" menu or something like that to get back here after
you play.

Choose how many sticks to take from which pile by clicking on one of the Xs. Your
click takes the clicked stick and all sticks to its right.

 1. XXX      (3 sticks)
 2. XXXXX    (5 sticks)
 3. XXXXXXXX (8 sticks)

(* From University of Toronto: http://www.cdf.toronto.edu/~ajr/270/probsess/03/strategy.html *)
