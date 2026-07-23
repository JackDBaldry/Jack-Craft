# Jack Craft Gameplay Testing 

## T1. Game starts correctly (1 mark)

Action: Click Run / start the game.

Expected: Sprites/background appear; no obvious errors; game responds.

Result: 1

## T2. Player controls work (1 mark)

Action: Use movement keys (left/right/up or whatever controls are shown).

Expected: Player moves as intended; movement is repeatable (not “stuck” or drifting).

Result: 1

## T3. Hazards exist and reduce health/lives (2 marks)

Action: Deliberately collide with a hazard (or fall off if that’s the hazard).

Expected: Health/lives decreases by the correct amount; hazard resets or game continues logically.

Marking:

2 = hazard works and effect is correct and consistent

1 = hazard works but inconsistent / wrong amount / unreliable

0 = hazard does not work

Result: 2

## T4. Collectable exists and increases score (2 marks)

Action: Collect the reward.

Expected: Score increases (usually +1); collectable resets or continues logically.

Marking:

2 = score increments correctly and reliably

1 = increments but inconsistent / sometimes fails

0 = no scoring/collectable doesn’t work

Result: 2

## T5. Score/health display updates (1 mark)

Action: After T3 and T4, watch the displayed values.

Expected: On-screen score and health/lives reflect the changes immediately.

Result: 1

## T6. Boundary condition works (1 mark)

Action: Go off-screen / past edge / hit bottom (whichever applies).

Expected: Correct penalty or reset occurs (lose life/health, reposition, etc.).

Result: 1

## T7. Lose condition triggers clearly (1 mark)

Action: Reduce health/lives to 0 (or below).

Expected: Game over/death state appears clearly.

Result: 1

## T8. End-state behaviour is sensible (1 mark)

Action: After lose condition, try moving/collecting/colliding.

Expected: Game is stopped or clearly “ended” (no continued scoring/health changes), or it cleanly restarts if designed that way.

Result: 0

After health hits 0 and death message appears the gameplay continues meaning the score can continue to go up, the health can go into negative and the health can also go back into positive so you un-die. 

## Full Results

T1 1 mark

T2 1 mark

T3 2 marks

T4 2 marks

T5 1 mark

T6 1 mark

T7 1 mark

T8 0 mark

Total = 9/10

## Strengths

Clear player controls

Multiple hazard mechanics

Health and score systems

Sprite movement and respawning

