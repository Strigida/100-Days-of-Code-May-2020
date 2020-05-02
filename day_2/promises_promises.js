const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server, and is totally cheating, obviously...
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
  //response and reject are required perameters of a promise, used to handle each scenario
  /*"Promises are most useful when you have a process that takes an unknown amount of time
  in your code (i.e. something asynchronous), often a server request. When you make a server
  request it takes some amount of time, and after it completes you usually want to do something
  with the response from the server. This can be achieved by using the then method. The then method
  is executed immediately after your promise is fulfilled with resolve." 
  - freeCodeCamp */
  if(responseFromServer) {
    resolve(
	    	makeServerRequest.then(result => {
	        	console.log(result);
	      	})
    	);
  } else {  
    reject(makeServerRequest.catch(error => {
      console.log(error);
    })
    );
  }
});