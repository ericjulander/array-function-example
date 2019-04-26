/*ARRAY FUNCTIONS*/
/*
 * Example Processes
 */
function firstThing(){
	console.log("did the first thing")
}
function secondThing(){
	console.log("did the second thing")
}
function thirdThing(){
	console.log("did the third thing")
}
var process = [firstThing, secondThing];
console.log("Hello World!");
/*
 * PUSH
 * 1.) It appends the given object to the end of an array. The paramater(s) are the object(s) which you need to insert into the array.
 * 2.) It modifes the current array.
 * 3.) It returns the new length of the array.
 * 4.) If you were to have a sequence of processes built, you could use this to add a process to the que.
 */
// add a process to the que
function addToQue(processes, process){
	processes.push(process);
}

addToQue(process, thirdThing);


/*
 * POP
 * 1.) It removes and then returns the last object in the array. It has no parameters.
 * 2.) It modifes the current array.
 * 3.) It returns the object which was removed from the array.
 * 4.) If you were to have a sequence of processes built, you could use this as a "undo" button of sorts.
 */
function undo(processes){
	processes.pop();
}
//undo the last step]
undo(process);

/*
 * forEach
 * 1.) It removes and then returns the last object in the array. It has a parameter of a function to run for each element in the array. That function has the parameters of the object and its index.
 * 2.) It does not modify the current array.
 * 3.) It had no return value
 * 4.) If you were to have a sequence of processes built, you could use this to execute all the processes
 */
// execute the "process"
process.forEach(function(pro){
	pro();
});


/*
 * Que person object has:
 * name: name of the person
 * priority: priority in the que
 */
var que = [
{
	name: "eric",
	priority: 1
},
{
	name: "rose",
	priority: 6
},
{
	name: "tangmo",
	priority: 2
},
];

/*
 * shift
 * 1.) It removes and then returns the first object in the array. It does not take any parameters.
 * 2.) It does modify the current array.
 * 3.) It returns the first object in the array
 * 4.) If you were to have a que of people, you could use this to work througb the que one person at a time starting with the first.
 */
function runQueFunction(personData){
	console.log(personData);
}
function processNextPerson(){
	runQueFunction(que.shift());
}
processNextPerson();

/*
 * unshift
 * 1.) It appends the given object to the front of the array and then returns the new length. Its parameter is the object that will be added to the front.
 * 2.) It does modify the current array.
 * 3.) It returns the length of the array
 * 4.) If you were to have a que of people, you could use this to give someone a priority position in the que
 */
 function giveVipAccess(person){
	 que.unshift(person);
 }
 
 giveVipAccess({
	name: "zenok",
	priority: 1
},);
 
 /*
 * slice
 * 1.) It returns a fragment of the array from the provided range (It has to parameters: the start of the range and the ned of it) 
 * 2.) It does not modify the current array.
 * 3.) It returns the length of the array
 * 4.) If you were to have a que of people and wanted to process people within a certain range, you could do that
 */
 function getFirstThree(){
	 return que.slice(0,3);
 }
 
console.log(getFirstThree());

 
 
  /*
 * concat
 * 1.) It merges two or more arrays together. It parameters are the arrays that need merging.
 * 2.) It does not modify the current array.
 * 3.) It returns the merged array
 * 4.) If you were to have 2 ques of people and wanted to combine them, you could use this.
 */
 var que2 = [
{
	name: "spot",
	priority: 3
},
{
	name: "jeffry",
	priority: 2
},
{
	name: "that guy",
	priority: 3
},
{
	name: "that bro",
	priority: 4
},
{
	name: "that man",
	priority: 5
},
{
	name: "that thing",
	priority: 3
},
];
 
 function mergeQues(){
	 return que.concat(que2);
 };
var newQue =  mergeQues();

 /*
 * sort
 * 1.) It returns an array which sorts the objects in the array according to the function provided as a parameter. That function also two parameters which are the elements being compared to eachother.
 * 2.) It does modify the current array.
 * 3.) It returns the sorted array
 * 4.) If you were to have a que of people and wanted to sort them alphabetically, you could use this. You could also use it to sort them aplphabetically in the que.
 */
 //sorts by name
 function sortQueByName(){
	 return newQue.sort();
 }
newQue = sortQueByName();
console.log(newQue)
// sorts by the priority of the que person object
 function sortQueByPriority(){
	return newQue.sort(function(dude,guy){
		if(dude.priority < guy.priority)
			return -1;
		return dude.priority > guy.priority;
	}); 
 };
newQue = (sortQueByPriority());
console.log(newQue)

 /*
 * includes
 * 1.) It returns a boolean determining wether the specified parameter is contained in the array. Its paramter is the object it is searching for.
 * 2.) It does not modify the current array.
 * 3.) It returns a boolean value
 * 4.) You could use this to find a specific person in the que
 */

//takes an array of que persons and returns a name list
function getNameList(que){
	 /*
		* map
		* 1.) It creates a new array where the items are modified according to function provided as a parameter 
		* 2.) It does not modify the current array.
		* 3.) It returns the new array
		* 4.) use this to get an array of the names in the que
      */
	  return que.map(function(quePerson){
		  return quePerson.name;
	  });
}

// returns the position of the named person in the que
function findInQue(name){
	  var names = getNameList(newQue);
	  console.log(names);
	  var position = -1;
	  if(names.includes(name))
		  position = names.indexOf(name);
	  
	return position;
}

console.log("Removing that guy who is que number: "+(findInQue("that guy")+1));


/*
 * splice
 * 1.) Deletes elements in the array. It has 2 parameters the index to start deletion and the range of deletion
 * 2.) It does not modify the current array.
 * 3.) It returns the deleted range
 * 4.) You could use this to remove a specific person from the que
 */
function removeGuyAtQueNumber(index){
	newQue.splice(index, 1);
}
removeGuyAtQueNumber((findInQue("that guy")));

 /*
 * filter
 * 1.) Reduces the array down according to the function you use as a parameter. That function has the parameters of the object and its index.
 * 2.) It does not modify the current array.
 * 3.) It returns the filtered array.
 * 4.) You could use this to find people in the que who are within the first 3 tiers of priority
 */
 function getBeforeTier(tierNumber){
	 var q = newQue.filter( item =>	(item.priority < tierNumber+1));
	 console.log("hello!", newQue, q);
	 return q;
 }
 
 newQue = getBeforeTier(3);
/*
 * every
 * 1.) Determines if every object in the array meets the specified parameters. It has a parameter of a function to run for each element in the array. That function has the parameters of the object and its index.
 * 2.) It does not modify the current array.
 * 3.) It returns a boolean value.
 * 4.) You could use this to double check if the names of the people meet a specific standard
 */
 //determines if the name is dope enough
 function nameIsDope(name){
	 console.log(name);
	 return(name.length < 8)
 }

var nameList = getNameList(newQue);
// tests to see if all the names are dope (meeting my specific dopeness standard)
 if(nameList.every(nameIsDope)){
	 console.log("this is a dope list!");
	 print("Dope List", newQue);
	 //proceed with awesome stuff
 }else{
	 console.log("woah...this aint a dope list bruh");
	 /*
	  * some
	  * 1.) Determines if some objects in the array meets the specified parameters. It has a parameter of a function to run for each element in the array. That function has the parameters of the object and its index. 
	  * 2.) It does not modify the current array.
	  * 3.) It returns a boolean value.
	  * 4.) You could use this to double check if some of the names of the people meet a specific standard
	  */
	  //determines if some of the names meet my "aightness" standard
	  function isAight(name){
		  return name.length >  8; 
	  }
	  
	  if(nameList.some(isAight)){
		  console.log("there are some pretty aight names in this list... I guess it is good enough")
		  print("The Aight List", newQue);
	  }else{
		  console.log("I can't print this!");
	  }
 }
 
     /*
	  * Array.from
	  * 1.) Creates an array out of the given objects. Its parameters are the array of things to complie, and the function to map the array. That functions parameters are the object in the array and its index.
	  * 2.) It does not modify the current array.
	  * 3.) It returns the new array.
	  * 4.) You could use this to modify a string using array functions. For example, I made all these letters uppercase.
	  */
	  /*
	  * Array.join
	  * 1.) Joins an array of items into one string using the string given in the parameter as a separator.
	  * 2.) It does modify the current array.
	  * 3.) It returns the length of the string;
	  * 4.) You can use it to recompile a string after using array functions
	  */
 function makeCaps(string){
	 return Array.from(string, function(ctr){
		 var code = ctr.charCodeAt(0);
		 if(code >= 97)
			 return String.fromCharCode(code-(97-65));
		 else return ctr;
			 
	 }).join("");
 }
 function makeNameLit(name){
	 return Array.from(name.slice(0,8),function(letters){
		 console.log(letters);
		var mod = String.fromCharCode(letters.charCodeAt(0)+1);
		console.log(mod);
		return mod;
	 }).join(""); 
 }
 
 console.log(Array.from(makeCaps(makeNameLit("thesuperrandomnameofawesomeness"))).sort().join(""));
 
 function print(title, que){
	 /*
	  * reduce
	  * 1.) Reduces elements in the array down to one specific item It has a parameter of a function to run for each element in the array. That function has the parameters of the accumuliator, the object, and its index.
	  * 2.) It does not modify the current array.
	  * 3.) It returns the reduced value
	  * 4.) You could use this to print the que info into one string
	  */
	  function compileLine(list, quePerson, index){
		  if(index <= 1){
			  list = ("Que Number | Name<br>--- | ---:<br>"+ list.priority + " | "+list.name);
		  }
		  return list + ("<br>"+ quePerson.priority + " | "+quePerson.name);
	  }
	  
	  var line = que.reduce(compileLine);
	  var out = document.getElementById("md-box");
	  var msg = ("## "+title+"<br>" + line);
	  out.innerHTML = msg;
 }
