/**
  * Write a loop that makes seven calls to console.log to output the following triangle:
  *
  * #
  * ##
  * ###
  * ####
  * #####
  * ######
  * #######
  *
  * This is an exercise in Chapter 2 of Eloquent JavaScript
  *
  */

var line = '';
for (var i = 0; i < 7; i++) {
    line += '#';
    console.log(line);
}
