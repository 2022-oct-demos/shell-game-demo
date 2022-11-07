![wireframe of shell game with html elements outlined](/assets/Screen%20Shot%202022-10-31%20at%2010.12.21%20AM.png)

STATE
wins
total
losses (derived state)

EVENTS

-   button clicks (user guess)
    -   increment total
    -   generate a random location for the pearl (number between 1 and 3)
    -   take that location and add reveal class to img
        -   if lines up with users guess increment the wins
    -   remove the reveal on all shells
