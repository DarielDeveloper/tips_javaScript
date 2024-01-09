1.//Trabajo con Object
const user = {
  name: 'Dariel',
  edad: 32
}
//Sin destructuring
const name0 = user.name;
const age0 = user.edad;
//Usando destructuring
//Se usa cuando las variables que se quieren definir sean el mismo nombre de las propiedades del object
const { name, edad } = user;

2. //Valores por defecto
//Establecer valores por defecto para los parametros de la funcion si no se proporciona ninguno. Esto evita tener que predefinir los valores cada vez.
function greet(name = 'estraño') {
  console.log('Hola' + name);

}

greet(); //Hola extraño
greet('Juan') //Hola Juan

3.//Usar Template Literals
//Hace  que la concatenacion de cadenas sea mas limpia, ya que se utilizan signos de contraccion y ${expresion} en lugar de signo mas.
// sin template
const greeting = 'Hola ' + name + ' tienes' + edad + ' años.'
// con template
const greeting1 = `Hola  ${name} tienes ${edad} años.`

4.// Array Destructuring
//Arry destructuring funciona de forma similar a la desestructuracion de objetos, permitiendo extraer elementos de matrices en variables.
const fruits = ['apples', 'oranges', 'bananas'];
//Sin destructuring
const fruta = fruits[0];
//Con destructuring
const [frut1, frut2] = fruits;

5.//Array Methods
//JavaScript dispone de practicos array methods que nos ayudan a escribir codigo mas limpio. Map,Filter,Find,Reduce,etc. Puede evitar muchos bucles y hacer que el codigo sea mas expresivo.
//Ejemplo:
const evenNumbers = fruits.filter(fr => fr.length > 5);

6.//Operador Ternario
//Permite escribir sentencia if/else en una sola linea de forma mas sencilla.
// Sin operador
let message;
if (isLoggedIn) {
  message = 'Bienvenido';

} else {
  message = 'Por favor inicia sesion';
}
//Con operador
message = isLoggedIn ? 'Bienvenido' : 'Por favor inicia sesion';

7.//Object Methods
//Proporciona a los objectos metodos integrados como object.keys(),object.values(), josn.stringify(), etc. Su uso evita reimplementar tareas repetitivas.
//Obtener las keys
const keys = Object.keys(user);
//Obtener values
const values = Object.values(user);
//Convierte un Objeto a json
const json = JSON.stringify(user);
