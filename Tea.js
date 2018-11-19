

function caj(slika,naziv,cena,poreklo)
{
this.slika=slika;
this.naziv=naziv;
this.cena=cena;
this.poreklo=poreklo;

this.tabela=function()
{
return "<input type='button' onClick='color(1)' value='black'>"
+"<input type='button' onClick='color(2)' value='white'>"
+"<table border='1' align='center' id='table'><tr><td colspan='2'><img id='img' src='slike/"+this.slika+".jpg'</td></tr>"
+"<tr><th>Naziv:</td><td>"+this.naziv+"</td></tr>"
+"<tr><th>Cena:</td><td>"+this.cena+"</td></tr>"
+"<tr><th>Poreklo:</td><td>"+this.poreklo+"</td></tr>"
+"</table>"
}
}

function tea()
{
var black=new caj("b","Black Tea",650,"kina");
var green=new caj("g","Green Tea",500,"india");
var white=new caj("w","White Tea",800,"kina");
var red=new caj("r","Red Tea",550,"afrika");

var izbor=document.getElementById("izbor");
var rb=izbor.selectedIndex;
if(rb==0){
alert(izbor[0].value);
document.getElementById("polje").innerHTML="Please choose a kind of tea";
}
else
{
var obj=eval(izbor[rb].value);

document.getElementById("polje").innerHTML=obj.tabela();
}
return;
}

function color(c)
{
var obj=document.getElementById("table");
switch(c)
{
case 1:
{
obj.style.background="black";
obj.style.color="white"; 
}
break;
case 2:
{
obj.style.background="white";
obj.style.color="black";
}
break;

}
return;
}

