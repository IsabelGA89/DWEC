var miFecha = new Date();

miFecha.setFullYear(2010,0,14); //fija la fecha a 14 de Enero de 2010
miFecha.setDate(myDate.getDate()+5); //aumenta la fecha guardada en 5 días

var miFecha = new Date(); //vamos a hacer una comparación de fechas
miFecha.setFullYear(2021,0,14);
var hoy = new Date();
if (miFecha>hoy)
{
    alert("Hoy es antes del 14 de Enero del 2010");
}
else
{
    alert("Hoy es después del 14 de Enero de 2010");
}