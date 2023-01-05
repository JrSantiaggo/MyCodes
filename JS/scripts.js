function Person(name, age, acao){
    this.name = name,
    this.age = age,
    this.acao = acao
}

let junior = new Person("junior", 20, (anos)=>{
    alert(`programando desde os ${anos} anos de idade`)
})

junior.acao(16)