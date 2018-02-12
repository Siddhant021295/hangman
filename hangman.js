var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var name;
var spaces;
var images=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
var count=1;
var per=0.125
function changeImage()
{
	document.getElementById("color").setAttribute("style",`background-color:rgba(255,0,0,${per})`);
	per=per+0.125;
	document.getElementById("target").src=images[count++];
	if(count==10)
	{
		document.getElementById("target").src=images[count++];
		alert("You Lost");
		reset();
	}
	
}
function getData() {
   	name = document.getElementById("movie").value;
    document.getElementById("movie").value="";
    document.getElementById("movie").disabled=true;
    if(name.length!=0)
    {	
    	console.log(name);
    	var length1=name.length;
    	name= name.toLowerCase();
    	var i;
    	var j;
    	var space=[];
    	var noOfSpaces=[];
    	var noOfwords = name.split(" ");
    	for(i=0;i<noOfwords.length;i++)
    	{
    		for(j=0;j<noOfwords[i].length;j++)
    		{
    			space.push("_");
    		}
    		space=space.join("");
    		noOfSpaces.push(space);
    		space=[];
    	}
    	spaces=noOfSpaces.join(" ")
    	document.getElementById("demo").innerHTML =spaces;
    }
    else
    {
    	alert("Enter Movie First");
    	reset();
    }
}
function onClick(a)
{
	if(name.length!=0)
	{
		document.getElementById(alphabet[a-1]).disabled=true;
		document.getElementById(alphabet[a-1]).setAttribute("class","clicked");
		check(a);
	}
	else
	{
		alert("Enter Movie First");
	}
}
function check(a)
{
	var item = alphabet[a-1];
	var i;
	var flag=0;
	for(i=0;i<name.length;i++)
	{
		if(item==name[i])
		{
			flag=1;
			rewrite(i,item);
		}
	}
	if (flag==0)
	{
		changeImage();
	}
}
function rewrite(i,item) 
{	
		console.log(i);
		spaces=spaces.substring(0,i)+item+spaces.substring(i+1,spaces.length);
		document.getElementById("demo").innerHTML = spaces;
		if(!spaces.localeCompare(name))
		{
			end();
		}
}


function reset()
{
	var a;
	for(a=1;a<=26;a++)
	{
		document.getElementById(alphabet[a-1]).setAttribute("class","");
		document.getElementById(alphabet[a-1]).disabled=false;
	}
	document.getElementById("color").setAttribute("style","background-color:rgba(255,0,0,0)");
	per=0.125;
	document.getElementById("movie").disabled=false;
	name=[];
	spaces=[];
	count=1;
	document.getElementById("target").src=images[0];	
	document.getElementById("demo").innerHTML = spaces;
}


function end() {
    document.getElementById("target").src="won.png";
    name=[];
	spaces=[];
}