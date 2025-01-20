//your JS code here. If required.

const button=document.getElementById("btn");

button.addEventListener("click", function (event){

	event.preventDefault();
	
	const ageInput = document.getElementById("age").value;
    const nameInput = document.getElementById("name").value;

	const age = parseInt(ageInput, 10);
    const name = nameInput.trim();

	const agepromise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},1000)
	});

	agepromise
	.then((message)=>{
		alert(message);
	})
	.catch((error) => {
        alert(error);
    });
});