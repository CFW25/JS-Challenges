Write a regular expression that ensures the word "end" is inside of another word (eg."bending"). Non-word characters such as !,?,etx cannot be boundaries

"The end of the story." ➞ false 
"Endings are pointless." ➞ false 
"Let's send!" ➞ false 
"We viewed the rendering at the end." ➞ false 
"Sometimes bending the rules is good." ➞ true

Cannot use \w,*,.,+. Should be case sensitive.