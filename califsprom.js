<script>
//leer 10 calificaciones y mostrar el promedio
//y las calificaciones mayores al promedio.
let calificaciones = [];
var suma = parseInt(0);
let mayores = [];

for(let i = 0; i<10; i++){
  calificaciones[i] = prompt('Ingresa una calificacion:');
}

for(let i = 0; i<10; i++)
  suma = suma + parseInt(calificaciones[i]);
  
let avg = suma/10;
  
for(let i = 0; i<10; i++){
  if(calificaciones[i] > avg)
    mayores.push(calificaciones[i]);
}

document.write('El promedio de las calificaciones es: '+ avg + '. <br> Y las calificaciones mayores al promedio son: ' + mayores);


</script>
