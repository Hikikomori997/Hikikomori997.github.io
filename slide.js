var j=1;
function slide()
{
var image=new Array(5)
for(i=1;i<=5;i++)
image[i]="slike/img"+i+".jpg";
j++;
if(j>5)
j=1;
document.getElementById("image").src=image[j];
return;
}
function slideback()
{
var image=new Array(5)
for(i=1;i<=5;i++)
image[i]="slike/img"+i+".jpg";
j--;
if(j<1)
j=5;
document.getElementById("image").src=image[j];
return;
}