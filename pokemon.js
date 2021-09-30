/* POO: paradigma basado en el mundo real
1) el nombre de la clase debe comenzr con mayusculas 
2) para definir una clase se usa la palabra reservada class*/
class Pokemon {
    #name = ''; /* atributos, si se le coloca el # son daots reservados a loa que no peudes acceder fuera del objeto, intentas leer el contenido y te va  amarcar error, solo se puede acceder desde los emtodos extablecidos set y get*/
    #type = ''; /* si no se pone el # es un dato publico al que se puede acceder fuera del objeto */
    #evolutions = [];

    /* metodo constructor ayuda a inicializar los objetos, si no se coloca por defecto se inicia un constructor vacio, es una funcion pero en este paradigma se llama metodo :v */
    /* this indica a que valor esta haciendo referencia, en ese caso a los atributos de la clase, es recomendado su uso*/

    constructor(name, type, evolutions) { /* necesita 3 parametros que se le dan a la hora de crear un n uevo objeto */
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;

    }

    /* metodos genericos: 
    set: asigna valores pero no los devuelve fuera de la funcion, l0o recomendabke es que sea un metodo por cada valor
    da mas control sobre losd datos
    */
    set name(name) { /* asi se llamara fuera del objeto */
        if (name == '') {
            this.#name = 'No existe';
        } else {
            this.#name = name;

        }

    }
    set type(type) {
        this.#type = type;
    }
    set evolutions(evolutions) {
        this.#evolutions = evolutions;
    }

    /* metodo get sirve para obtener los valores 
    no necesita parametros*/
    get name() {
        return this.#name;

    }
    get type() {
        return this.#type;

    }
    get evolutions() {
        return this.#evolutions;

    }

    /* metodos de la clase pokemon */
    attack() {
        return `${this.#name}, esta atacando`;
    }

    /* evolution = 0, se esta agregando un valor por efecto en caso de que no se reciba el parametro , la variable evolution es dif a evolutions
    este metodo va  arecibir un parametro y va  validar que la opcion exista*/
    evolve(evolution = 0) {
        /* EVOLVE es dif a evolve */
        /* const EVOLVE = this.evolutions[evolution];  *//* se hace referencia a otro atributo, se le manda el parametro evolution, hace referencia al elemento 0 del arreglo evolutions 
        evolution es como un contador*/
        const EVOLVE = this.#evolutions[evolution] || ''; /* si no existe el valor  evolutions[evolution] se le asigna el valor '' por defecto */
        let message = 'No puedo evolucionar';
        if (EVOLVE) {/* si EVOLVE no esta vacio */
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;

    }

}
/* herencia: hacer una clase de otra clase, la clase padre es pokemon (super clase), typefire es el hijo :v hereda atributos y metodos
no se puede heredar cosas de dos padres, solo de uno */
class TypeFire extends Pokemon {
    /* para rellenar constructor delpadre: */
    constructor(name, evolutions) {
        /* este constructor pide 2 parametros, no pide el tipo, directamnte se establece porque esta clase solo es de tipo fuego :v
        para llenar el constructur de una clase hijo se coloca la palabra suer adentro del cosntructor */
        super(name, 'fire', evolutions); /* ya no se necesitan los # */

    }

    message() {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const charmander = new TypeFire('Charmander', ['Charmeleon', 'Charizard']);
console.log(charmander.message());/* ya que message es una funcion, hay que colocar los parentesis () */

charmander.name = 'gato';
console.log(charmander.message());







/* como crear objetos de una clase: crear instancias */

/* const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);

const Squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise']); */
/* es posible crear un nuevo pokemon sin darle parametros, solo no tendra valores en los atributos */

/* para usar los metodos y atributos:
cada objeto es independiente y  responsable de sus atributos*/
/* console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0)); *//* ahora que el pokemon evoluciono sera Charmeleon */
/* console.log('-----------------------------');
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0)); */

/* los metofos nos proporcionan un mayr control de los atributos que podemos cambiar */