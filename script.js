const contatos = [
    {
        name: 'Lucas',
        phone: '11999999999'
    },
    {
        name: 'Maria',
        phone: '11999999999'}

]
function search(){

    for (const contato of contatos ) {

        if(Input.value === contato.name)
            p.innerHTML =`O telefone de:${contato.name} Phone:${contatos.phone}
        
    }
}