const args = process.argv.slice(2);

// Check if first argument exists without using .length
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}