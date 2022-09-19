let alunos = [
    ['Samuel', 'samuel@email.com', '85 8888888'],
    ['Bruno', 'bruno@email.com', '85 8888888'],
    ['Matheus', 'matheus@email.com', '85 8888888'],
    ['Marcelo', 'marcelo@email.com', '85 8888888'],
];

function cadastrar() {
    event.preventDefault()
    alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`])
}

function atualizarLista() {
    tabela_alunos.innerHTML = '';
}

function novo() {
    pagina_novo.style.display = 'block'; //mostrar
    pagina_listar.style.display = 'none'; //esconder
}

function listar() {
    pagina_listar.style.display = 'block'; 
    pagina_novo.style.display = 'none'; 


    atualizarLista()
    alunos.forEach(function (cadaAluno) {
        tabela_alunos.innerHTML += `
            <tr>
                <td>${cadaAluno[0]}</td>
                <td>${cadaAluno[1]}</td>
                <td>${cadaAluno[2]}</td>
                <td></td>
            </tr>
        `;
    });
}