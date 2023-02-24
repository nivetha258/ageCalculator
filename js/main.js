let btnEle = document.getElementById("btn");
document.getElementById("output").style.display = "none";
btnEle.addEventListener("click",function(){
	let date1 = document.getElementById("date1").value
//	let date2 = document.getElementById("date2").value
	
	date1 = new Date(date1)
	date2 = new Date()
	
	console.log(date1,date2,date1-date2);
	
	let difference = Math.abs(date1-date2);
	
	let year,month,week,day,hour,r;
	
	year = Math.floor(difference/(1000*60*60*24*365));	
	r = difference %(1000*60*60*24*365);
	
	month = Math.floor(r / (1000*60*60*24*30));	
	r =  r % (1000*60*60*24*30);
	
	week = Math.floor(r / (1000*60*60*24*7))
	r = r % (1000*60*60*24*7)
	
	day = Math.floor(r / (1000*60*60*24))
	r = r % (1000*60*60*24)
	
	hour =Math.floor( r / (1000*60*60))
	r = r % (1000*60*60)
	
	document.getElementById("year").innerText = year;
	document.getElementById("month").innerText = month;
	document.getElementById("week").innerText = week;
	document.getElementById("day").innerText = day;
	document.getElementById("hour").innerText = hour;
	
	document.getElementById("output").style.display = "block";
})




/*
let num= 1234;
let r= 0;
let odd = 0;
let even = 0;
while(num>0){
	 r = num %10;
	 num = (num - r)/10;
	 if(r %2 == 0 ){
		 even += r
	 }
	 else{
		 odd +=r
	 }
}

console.log(odd - even)


*/