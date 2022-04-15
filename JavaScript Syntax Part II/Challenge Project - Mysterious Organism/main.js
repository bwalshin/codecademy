// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  // console.log(`DNA Bases: ${dnaBases}`);
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  console.log(`New Strand: ${newStrand}`);
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random * this.dna.length);
      let newBase = returnRandBase();
      if (this.dna.randomIndex === newBase) {
        newBase = returnRandBase();
      } else {
        this.dna.randomIndex = newBase;
        return this.dna;
      }
    },
    compareDNA(otherOrganism) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr.idx === otherOrganism.dna.idx) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(
        `${this.specimenNum} and ${otherOrganism.specimenNum} have ${percentageTo2Deci} DNA in common`
      );
    },
    willLikelySurvive() {
      const orgDNASurvival = this.dna.filter((el) => el === "C" || el === "G");
      return orgDNASurvival.length / this.dna.length >= 0.6;
    },
  };
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen);