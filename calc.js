function myFunction1(element) {
  document.getElementById("res").value=document.getElementById("res").value + element.value;
}

function delfunc() {
	const txt =document.getElementById("res").value;
	const txt2 =txt.slice(0,-1);
	//document.getElementById("test").innerHTML = txt2;
	document.getElementById("res").value = txt2;
}

function solve()
         {
             let x = document.getElementById("res").value
             let y = eval(x)
             document.getElementById("res").value = y
         }

function resfunc()
		{
			document.getElementById("res").value = "";
		}