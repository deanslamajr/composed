// what is the length of the melody?
const melodyLength = '2m'

// how much variation? (1-10)
const variation = 5

// how much speedFeel? influences note length (1-10)
const speedFeel = 5

// @todo what is the key?
// for now, we'll assume Cmajor
// const tonalKey = 'Cmajor'

// what is the root note?
const rootFrequency = 'C'


let currentMelodyLength
let melody = []

const lengthsMap = [
  { chance: 1, length: '1n'},    // whole 1%
  { chance: 4, length: '2n.'},   // dotted half => 3%
  { chance: 13, length: '2n'},   // half => 9%
  { chance: 26, length: '4n.'},  // dotted 1/4 => 13%
  { chance: 51, length: '4n'},   // quarter => 25%
  { chance: 66, length: '8n.'},  // dotted 1/8 => 15%
  { chance: 88, length: '8n'},   // 1/8 => 22%
  { chance: 93, length: '16n.'}, // dotted 1/16 => 5%
  { chance: 100, length: '16n'}, // 1/16 count => 7%
]

function getLength () {
  const roll = Math.random() * 100
  const lengthObject = lengthsMap.find(({ chance }) => roll <= chance)
  return lengthObject.length
}

while (currentMelodyLength < melodyLength) {
  // is the next piece a note or a rest?
  // 80% chance of a note
  // @todo with smaller variation values has this chance inc/dec dependent on previous choices
  const isNote = Math.random() > .2
  console.log(`isNote:${isNote}`)

  // length of the note/rest?
  /**
   * @todo these are influenced by the both the speedFeel and the variation
   * speedFeel => higher speedFeel increases the below percentages for the longer lengths
   * variation => lower variation increases the percentages for lengths that have already occured
   */
  const length = getLength()
  console.log(`length:${length}`)
  // if (!melodyLength) {
  //   melodyLength = Tone.TimeBase(length)
  // } else {
  //   melodyLength.add(length)
  // }

  console.log(`melodyLength:${melodyLength.toNotation()}`)
  
// if note, what is the pitch?
  // should the note be the root? 20% chance, higher variation === lower chance
  // if no, should the note be in the key? 95% chance
    // if no, pick a note
      // how far from the root?
        // 1-3 steps? => 25%
        // 4-8 steps? 50%
        // 9-11 steps? 25%
    // if yes, pick a note
      // how far from the root?
        // 1 key positions? => 25%
        // 2-4 key positions? 45%
        // 5-7 key positions? 25%
        // octave? => 5%
}
  


/**
 * Good ideas
 */
// at the top of the main while loop, check if staging bucket should be looped
  // if yes, use the staging cukcet as the next note/rest to be added
    // make sure to clip the staging bucket if the it is longer than the length of melody remaining
    // clear stagin bucket before looping again
  // if no, do the usual while loop
    // at the bottom of the loop, add the note/rest to the staging bucket

// while adding a note, decide if it should be connected to the last note
  // 10% chance
  // to be connected means the notes are of the same atomic unit

// triplets
// notes outside of the 2 octave range