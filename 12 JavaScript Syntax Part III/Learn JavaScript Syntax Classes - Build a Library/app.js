class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(newisCheckedOut) {
        this._isCheckedOut = newisCheckedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(ratings) {
        this._ratings.push(ratings);
    }

    getAverageRating() {
        let ratingsAverage = Math.round(this._ratings.reduce(function(a, b) {
            return a + b;
        }) / this._ratings.length);
        this._ratings = ratingsAverage;
    }
}

class Book extends Media {
    constructor(author, pages, title) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this.pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}


const historyOfEverything = new Book(
  "Bill Bryson",
  544,
  "A Short History of Nearly Everything"
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating;
console.log(historyOfEverything.ratings)


const speed = new Movie(
    'Jan de Bont',
    'Speed',
    166
);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating
console.log(speed.ratings);
