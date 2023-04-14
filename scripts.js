function Contar(){
    const inicio = document.querySelector('input#inicio')
    const fim = document.querySelector('input#fim')
    const passo = document.querySelector('input#passo')

    if(inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        alert('FALTA UM OU MAIS CAMPOS')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Número inválido, iremos considerar o passo 1!')
            p = 1
        }

        if(i < f){
            for(let c = i ; c <= f ; c += p){
                resposta.innerHTML += ` ${c} =>` 
            }
        }else {
            for(let c = i ; c >= f ; c -= p){
                resposta.innerHTML += `${c} =>`
            }
        }
        resposta.innerHTML += 'Fim.'
    }
}