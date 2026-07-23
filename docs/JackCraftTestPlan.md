# Jack Craft Test Plan

## Test No:  1

Test:  Does the Fox lose 10 health when touching a Rock?

Expected Result:  TRUE – Health decreases by 10.

Actual Result:  TRUE


## Test No:  2

Test:  Does the Fox lose 10 health when touching the Bear?

Expected Result:  TRUE – Health decreases by 10.

Actual Result:  TRUE


## Test No:  3

Test:  Does the Fox lose 10 health when touching the Arrow?

Expected Result:  TRUE – Health decreases by 10.

Actual Result:  TRUE


## Test No:  4

Test:  Test  Does collecting a Carrot increase the score by 1?

Expected Result:  TRUE – Score increases by 1.

Actual Result:  Actual Result  TRUE


## Test No:  5

Test:  Does collecting a Carrot increase health by 10 (up to a maximum of 100)?

Expected Result:  TRUE – Health increases but never exceeds 100.

Actual Result:  TRUE


## Test No:  6

Test:  When health reaches 0, does the "You Died" screen appear?

Expected Result:  TRUE – Black background with "You Died" is displayed.

Actual Result:  TRUE


## Test No:  7

Test:  If health is greater than 0, does the normal game continue?

Expected Result:  TRUE – Main background and gameplay remain active.

Actual Result:  TRUE


## Test No:  8

Test:  Does the Fox stay within the left and right screen boundaries?

Expected Result:  TRUE – Fox cannot move off-screen.

Actual Result:  TRUE


## Test No:  9

Test:  Does the Fox jump only when on the ground?

Expected Result:  TRUE – Jump only works when the Fox is on the ground.

Actual Result:  TRUE


## Test No:  10

Test:  Does health remain at 100 after collecting a carrot while already at full health?

Expected Result:  TRUE – Health stays at 100.

Actual Result:  TRUE


## Test No:  11

Test:  Does the player win when the score reaches 50?

Expected Result:  TRUE – A win screen or victory state should be displayed.

Actual Result:  FALSE


## Test No:  12

Test:  Does the player lose if they die before reaching 50 points?

Expected Result:  TRUE – The game should recognise this as a loss before the target score is reached.

Actual Result:  FALSE


## Evaluation / Improvements

Tests 11 and 12 both failed because the win/loss conditions are not explicitly programmed into the current version of the game. Although the game ends when the player's health reaches 0 by displaying the "You Died" screen, there is no code that checks whether the player has reached the target score of 50 or whether they died before achieving it.
This could be improved in a second version of the game by adding:
A condition that checks if score >= 50 and displays a You Win screen.
A condition that checks if health <= 0 && score < 50 and displays a Game Over / You Lose screen based on the intended game rules.

