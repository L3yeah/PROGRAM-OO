<script>
// lanzar el dado y anotarlo, lanzar el dado y anotarlo y sumar esos dos valores…
//repetir esto 100 veces y decir cuantas veces cayo cada posible suma
let cayo = [0,0,0,0,0,0];
function dado(){
let n = Math.floor((Math.random() * 6) + 1);
  return n;
}
for(let i = 0; i<100; i++){
  let n = dado();
  cayo[n-1]+=1;}
document.write('El numero 1 cayo ' + cayo[0] +' veces. <br>' +
              'El numero 2 cayo ' + cayo[1] +' veces. <br>' +
							'El numero 3 cayo ' + cayo[2] +' veces. <br>' +
							'El numero 4 cayo ' + cayo[3] +' veces. <br>' +
							'El numero 5 cayo ' + cayo[4] +' veces. <br>' +
              'El numero 6 cayo ' + cayo[5] +' veces. <br>');
</script>
