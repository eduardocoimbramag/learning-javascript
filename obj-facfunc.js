function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falaNome() {
            return `oi, meu nome: ${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa('Eduardo', 'Coimbra');

console.log(p1.falaNome());