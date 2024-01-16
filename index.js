class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        /*switch(this.tipo){
                case "mago":
                    ataque = "magia"
                case "guerreiro":
                    ataque = "espada"
                case "monge":
                    ataque = "artes marciais"
                case "ninja":
                    ataque = "shuriken"
                default:
                    ataque = "indefinido"
            }*/

        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }
        
        console.log(`\nO ${this.tipo} atacou usando ${ataque}`)
     }
 }

let heroi1 = new hero("Harry Potter", 24, "mago")
let heroi2 = new hero("Aquaman", 35, "guerreiro")
let heroi3 = new hero("Shaolin", 19, "monge")
let heroi4 = new hero("Jackie Chan", 47, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()