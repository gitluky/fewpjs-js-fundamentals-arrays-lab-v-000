// Write your solution here!

const append = function() {
  const pets = ["Milo", "Otis", "Garfield"];
  return pets.push("Odie");
}

const prepend = function() {
  const pets = ["Milo", "Otis", "Garfield"];
  return pets.unshift("Odie");
}

const removeLast = function() {
  const pets = ["Milo", "Otis", "Garfield"];
  return pets.pop();
}

const removeFirst = function() {
  const pets = ["Milo", "Otis", "Garfield"];
  return pets.shift()
}
