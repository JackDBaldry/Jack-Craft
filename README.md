# Jack Craft

Edexcel iGCSE coursework graphical game project in JavaScript.

This project is a simple survival and collection game created using Code.org GameLab and JavaScript. The player controls a fox, collecting carrots to increase their score and restore health while avoiding hazards such as rocks, arrows, and a bear. The project demonstrates core game programming concepts including conditionals, functions, sprites, collision detection, keyboard event handling, health systems, scoring, and game-over states. It was created as a practical demonstration of how these programming concepts can be combined to build an interactive 2D game.


## Features

**Sprites**

This screenshot shows how the fox was created and how you can edit the fox.

<img width="2532" height="757" alt="Foxsprite1" src="https://github.com/user-attachments/assets/5d48bf81-e8b6-494a-8e2d-3b356deb692c" />

This screenshot shows how sprites are declared in the code.


SUGGESTED CHANGE

This code shows how the fox, rock and bear sprites are created, assigned animations and scaled for the game.

<img width="1265" height="415" alt="Foxsprite2" src="https://github.com/user-attachments/assets/9fc3add2-f3fb-48e0-8975-93939c2f2d7a" />

**Collisions**

This shows the code for how collisions work.

SUGGESTED CHANGE

This code detects a collision between the fox and a rock, reduces the player's health, and repositions the rock.

<img width="676" height="180" alt="Collision" src="https://github.com/user-attachments/assets/fbd858f4-7388-4178-98a0-85fce7a626f7" />

**Player Scores and Health**

This shows what it looks like to have a bad score and low health (so the player is losing).

<img width="368" height="367" alt="Badscore" src="https://github.com/user-attachments/assets/94d6e037-47d3-4aa8-b0da-59d5c92904f3" />

This shows what it looks like to have a good score and high health (so the player is winning).

<img width="373" height="381" alt="Goodscore" src="https://github.com/user-attachments/assets/9d762781-d34b-4ce7-8842-1a2e6d0788bc" />

## Code

[code/JackCraft.js](code/JackCraft.js) – JavaScript code


## Documentation

**Flowchart**

[docs/JackCraftFlowchart.png](docs/JackCraftFlowchart.png) – Logic Flowchart of Gameplay


**Testing**

[docs/JackCraftTesting.md](docs/JackCraftTesting.md) - Gameplay Test Results

[docs/JackCraftTestPlan.md](docs/JackCraftTestPlan.md) - Test Plan Results

[docs/BlackBoxTesting.md](docs/BlackBoxTesting.md) - Black Box Testing Results


## Gameplay

[Screenshots of Gameplay (raw images)](images)

**Screen Capture of Gameplay**

Gameplay of the user winning (getting 50 score) https://www.youtube.com/watch?v=Lxd8FEWpnGU&list=PLBwSCtBQjqoQ

Gameplay of the user losing (Health reaches 0) https://www.youtube.com/watch?v=pMBQ2m92CQ8&list=PLBwSCtBQjqoQ&index=2


## Challenges and Reflections

TO DO

* First large javascript project. Since it was my first javascript project, it made it difficult. Code.org showed me how to use javascript and all the different aspects which is what helped me the most.
  
* First graphical games using sprites, event handling, collisions, etc. Since I had no experience with sprites, event handling, collisions, etc, I again had to learn how to use them in the way that was applicable for this project. Code.org also helped when it came to this as it was set out and explained in a way that was easy to understand.
  
* Testing using a gameplay checklist and test plan. I used a gameplay checklist and a test plan to make sure I added all the features in the code and to then check they all worked in the correct way.

* What I would do differently next time. For my next project, I would make sure that at the very start, I had more of a plan and I better written of idea of what I wanted the project to look like at the end.


SUGGESTED CHANGES

 
This was my first large JavaScript project, which was an interesting challenge. I learned the fundamentals of graphical game development during a Code.org course called [Self Paced Introduction to Game Lab](https://studio.code.org/courses/csd3-virtual/units/1). It showed me how to use JavaScript skills I had learned on other Code.org courses as well as new skills to develop this interactive program.
  

Since I had no experience with sprites, event handling, collisions, and other graphical game techniques I had to learn how to implement these features effectively within my own game. The Code.org course helped with this because the concepts were explained clearly and easy to understand.
  
I used a gameplay checklist and a test plan to make sure I had implemented all the required features and that they worked correctly. I followed the Edexcel framework to do this.

I can see some things I would like to adapt in my next project. I will make sure that at the very start to have a more thorough plan and more detailed design of what I want the project to look like at the end. This will make testing simpler and allow me to ensure I reach all of my goals clearly. Overall I really enjoyed designing the game and I look forward to the next one.


## License

This project is licensed under the Apache License 2.0 – see the [LICENSE](LICENSE) file for details.
