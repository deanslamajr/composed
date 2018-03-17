TODO
* need to implement a function that can add note lengths properly
  * according to the designated time signature (might want to lock this to 4/4 initially)



* what is the length of the melody?
  * how much variation?
  * how much speedFeel? (influences note length)
  * what is the key?
  * what is the root note?
  * while (workingMelody <= length of melody)
    * do we want a note or a rest?
      * 80% chance of a note, with smaller variation values has this chance inc/dec dependent on previous choices
    * length of the note/rest?
      * these are influenced by the both the speedFeel and the variation
        * speedFeel => higher speedFeel increases the below percentages for the longer lengths
        * variation => lower variation increases the percentages for lengths that have already occured
      * 1/2 count => 10%
      * dotted 1/4 => 15%
      * 1/4 count => 25%
      * dotted 1/8 => 15%
      * 1/8 count => 25%
      * 1/16 count => 10%
    * if note, what is the pitch?
      * should the note be the root? 20% chance, higher variation === lower chance
      * if no, should the note be in the key? 95% chance
        * if no, pick a note
          * how far from the root?
            * 1-3 steps? => 25%
            * 4-8 steps? 50%
            * 9-11 steps? 25%
        * if yes, pick a note
          * how far from the root?
            * 1 key positions? => 25%
            * 2-4 key positions? 45%
            * 5-7 key positions? 25%
            * octave? => 5%


Good ideas
* at the top of the main while loop, check if staging bucket should be looped
  * if yes, use the staging cukcet as the next note/rest to be added
    * make sure to clip the staging bucket if the it is longer than the length of melody remaining
    * clear stagin bucket before looping again
  * if no, do the usual while loop
    * at the bottom of the loop, add the note/rest to the staging bucket

* while adding a note, decide if it should be connected to the last note
  * 10% chance
  * to be connected means the notes are of the same atomic unit