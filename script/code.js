const subjects = ["Python","C++","VB.NET", "JAVASCRIPT","ASSEMBLY"];

 //displaying the last element of array using the at method
 // the -1 is used because it counts back from the last item in the array 
 console.log(subjects.at(-1));

 //accessing the middle element 
 // by declaring a new variable and by using the floor function to round it down
 // then taking the length of the array &  dividing it  by 2 
 // then creating a new var to display the middle element
 let theMiddle = Math.floor(subjects.length / 2);
 let  value = subjects[theMiddle]; 

 console.log(value); // displays the middle element




