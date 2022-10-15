//STEP 1
var favMovies = ["Titanic", "Happy Potter", "Zootopia", "Moana", "Pirates of the Caribbean"];
console.log("STEP 1");
console.log(favMovies[1]);

//STEP 2
console.log("");
console.log("STEP 2");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
console.log(movies[0]);

//STEP 3
console.log("");
console.log("STEP 3");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies.splice(2, 0, "Coco");
console.log(movies.length);

//STEP 4
console.log("");
console.log("STEP 4");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
delete movies[0];
console.log(movies);

 //STEP 5
 console.log("");
console.log("STEP 5");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

for(var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

// STEP 6
console.log("");
console.log("STEP 6");
//copying the code from STEP 5 as mentioned in the requirment
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

for(const index in movies) {
    window.console.log(movies[index]);
}

// STEP 7
console.log("");
console.log("STEP 7");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

movies.sort();

for(const index in movies) {
    window.console.log(movies[index]);
}

// STEP 8
console.log("");
console.log("STEP 8");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

console.log("Movies I like:\n");
console.log("");
for(var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

console.log("");
console.log("Movies I regret watching:");
console.log("");
for(var i=0; i< leastFavMovies.length; i++) {
    console.log(leastFavMovies[i]);
}

// STEP 9
console.log("");
console.log("STEP 9");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());


// STEP 10
console.log("");
console.log("STEP 10");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log(movies[movies.length -1]);