var exp=""
function display(a)
{
if(a!="=" && a!='c')
{
	exp=exp+a;

document.getElementById('val').value=exp;
}

if(a=='c')
{
	exp=" ";

document.getElementById('val').value=" ";
}
if(a=='=')
{
	document.getElementById('val').value=eval(exp);


}


	}

