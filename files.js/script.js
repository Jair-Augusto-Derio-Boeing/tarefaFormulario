let form = document.getElementById('form')
let campos = document.querySelectorAll('.required')
let emailRegex =  /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
let spans = document.querySelectorAll('.span-required')


const tel = document.getElementById('tel') // Seletor do campo de telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    numberValidate();
})

function setError(index) {

    campos[index].style.border = '4px solid #e63636';
    spans[index].style.display = 'block';

}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0);
        return
    }
    removeError(0)


}
function emailValidate() {
    if (emailRegex.test(campos[1].value)) {
        removeError(1);
        return
    }
    setError(1);
}
function numberValidate() {
    let teste = campos[2].value[0];
    console.log(teste);
    console.log(campos[2].value.length);
    if (campos[2].value.length === 11 && campos[2].value[0] == 4) {
        removeError(2);
        return       
    }
    setError(2);
    
}

//     let data = {
//         nome: name.value,
//         idade: age.value
//     }

//     fetch("https://webhook.site/3199b824-acd0-44f6-9482-6dc31bb7b218", {
//         method: "POST", // verbos https,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Allow-Origin': '*',
//             'Access-Control-Allow-Origin': '*'
//         },
//         body: JSON.stringify(data)
//     });
// }

