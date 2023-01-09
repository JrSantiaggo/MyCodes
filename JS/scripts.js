// interação com um menu
// let items = []
// let escolha

// while(escolha != 3){
//     escolha = Number(prompt(`Olá usuário! Digite o número da opção desejada
//         1. Cadastrar um item na lista
//         2. Mostrar itens cadastrados
//         3. Sair do programa`))

//     if(escolha == 1){
//         let item = prompt("Digite o item")
//         items.push(item)
//     }else if(escolha == 2){
//         if(items.length != 0){
//             alert(items)
//         }else{
//             alert('nenhum item cadastrado')
//         }
//     }else if(escolha == 3){
//         break
//     }else{
//         alert("não existe essa opção")
//     }

// }

let pacientes = [
    {
        nome: "junior",
        idade: 20,
        peso: 70,
    },
    {
        nome: "alany",
        idade: 20,
        peso: 70,
    },
    {
        nome: "laisla",
        idade: 20,
        peso: 70,
    },
    {
        nome: "lorim",
        idade: 20,
        peso: 70,
    },
    {
        nome: "luciene",
        idade: 20,
        peso: 70,
    }
]


for(let nome of pacientes){
    console.log(nome.nome
        )
}