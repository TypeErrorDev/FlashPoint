# Steps to Get This Project Working

1. **Change Directory to flashpoint**

   - Run `npm i`

2. **Expected Terminal Output**

   - A `leaderboard.db` file should be created in the Backend directory.
   - You should see the following messages in the terminal:

   ```
   > flashpoint@0.0.0 frontend
   > vite
   VITE v5.4.10 ready in 185 ms

    ➜ Local: http://localhost:5173/
    ➜ Network: use --host to expose
    ➜ press h + enter to show help
   ```

![Main Screen](flashpoint/src/assets/Flashpoint.gif)

- If it doesn't, just alt+F4 and skip this project
- If it does populate, go to step 5

4. Enter your name as the Username

## Functionality that works

- As of right now, I have had to hard code the Flashcards and their Decks. Will modify that in the future
- You can go through the flashcards and will either get a Correct/Incorrect response, and either gain points or not if the answer is right/wrong
- When you finish the deck, the score summary will calculate the points/percentage of correct answers
- Your decks card count and total possible points are calculated properly
- You can signout properly
- Working endpoints
  - `/` (🔓) This is the login page
  - `/dashboard` (🔒) This is the dashboard with the decks displayed
  - `/deck/create` (🔒) Deck creation (Not implemented yet)
  - `/deck/:deckId/:deckName` (🔒) View the deck
  - `/settings` (🔒) View the Settings page. Needs more work, kinda useless right now

## Functionality that breaks

- Refreshing the page returns you to the login screen.
- Cannot create new decks/flashcards at the moment
- Settings page is pretty much useless
- Cannot create/edit/delete decks yet
