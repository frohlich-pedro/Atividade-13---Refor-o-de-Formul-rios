const validarFormulario = () => {
    try {
        const nome = document.getElementById('nome').value.trim();
        if (!nome) {
            throw "Nome deve ser preenchido";
        }
    
        const nascimento = document.getElementById('nascimento').value.trim();
        if (!nascimento) {
            throw "Nascimento deve ser preenchido";
        }
    
        const sexo = document.getElementById('sexo').value.trim();
        if (!sexo) {
            throw "Sexo deve ser preenchido";
        }
        
        const email = document.getElementById('email').value.trim();
        if (!email) {
            throw "Email deve ser preenchido";
        }
        
        const telefone = document.getElementById('telefone').value.trim();
        if (!telefone) {
            throw "Telefone deve ser preenchido";
        }
        
        const endereco = document.getElementById('endereco').value.trim();
        if (!endereco) {
            throw "Endereço deve ser preenchido";
        }
        
        const cidade = document.getElementById('cidade').value.trim();
        if (!cidade) {
            throw "Cidade deve ser preenchido";
        }
        
        const estado = document.getElementById('estado').value.trim();
        if (!estado) {
            throw "Estado deve ser preenchido";
        }
        
        const cep = document.getElementById('cep').value.trim();
        if (!cep) {
            throw "CEP deve ser preenchido";
        }
        
        const pais = document.getElementById('pais').value.trim();
        if (!pais) {
            throw "País deve ser preenchido";
        }
        
        const usuario = document.getElementById('usuario').value.trim();
        if (!usuario) {
            throw "Usuário deve ser preenchido";
        }
        
        const senha = document.getElementById('senha').value.trim();
        if (!senha) {
            throw "Senha deve ser preenchido";
        }
        
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();
        if (!confirmarSenha) {
            throw "Confirmação de senha deve ser preenchida";
        }
        
        const cpf = document.getElementById('cpf').value.trim();
        if (!cpf) {
            throw "CPF deve ser preenchido";
        }
        
        const rg = document.getElementById('rg').value.trim();
        if (!rg) {
            throw "RG deve ser preenchido";
        }
        
        const nacionalidade = document.getElementById('nacionalidade').value.trim();
        if (!nacionalidade) {
            throw "Nacionalidade deve ser preenchida";
        }
        
        const estadoCivil = document.getElementById('estadoCivil').value.trim();
        if (!estadoCivil) {
            throw "Estado Civil deve ser preenchido";
        }
        
        const nomeConjuge = document.getElementById('nomeConjuge').value.trim();
        if (!nomeConjuge) {
            throw "Nome de conjuge deve ser preenchido, caso não haja, informar no formulário";
        }
        
        const filhos = document.getElementById('filhos').value.trim();
        if (!filhos) {
            throw "Filhos deve ser preenchido";
        }
        
        const empresa = document.getElementById('empresa').value.trim();
        if (!empresa) {
            throw "Empresa deve ser preenchido, caso não haja, informar no formulário";
        }
        
        const cargo = document.getElementById('cargo').value.trim();
        if (!cargo) {
            throw "Cargo deve ser preenchido";
        }
        
        const setor = document.getElementById('setor').value.trim();
        if (!setor) {
            throw "Setor deve ser preenchido";
        }
        
        const dataAdmissao = document.getElementById('dataAdmissao').value.trim();
        if (!dataAdmissao) {
            throw "Data de admissão deve ser preenchida";
        }
        
        const salario = document.getElementById('salario').value.trim();
        if (!salario) {
            throw "Salario deve ser preenchido";
        }
        
        const escolaridade = document.getElementById('escolaridade').value.trim();
        if (!escolaridade) {
            throw "Escolaridade deve ser preenchido";
        }
        
        const curso = document.getElementById('curso').value.trim();
        if (!curso) {
            throw "Curso deve ser preenchido";
        }
        
        const instituicaoEnsino = document.getElementById('instituicaoEnsino').value.trim();
        if (!instituicaoEnsino) {
            throw "Instituição de Ensino deve ser preenchida";
        }
        
        const anoConclusao = document.getElementById('anoConclusao').value.trim();
        if (!anoConclusao) {
            throw "Ano de conclusão deve ser preenchido";
        }
        
        const habilidades = document.getElementById('habilidades').value.trim();
        if (!habilidades) {
            throw "habilidades deve ser preenchido";
        }
        
        const interesses = document.getElementById('interesses').value.trim();
        if (!interesses) {
            throw "Interesses deve ser preenchido";
        }
    } catch (e) {
        alert(`ERRO: ${e}`);
        return;
    }
    
    return;
}