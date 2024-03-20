class Aluno {

    constructor({ nome, login, ra }) {
        this.nome = nome;
        this.login = login;
        this.ra = ra;
        Aluno.#todos.push(this);
    }

    toString() {
        return `Aluno ${this.nome} - ${this.login} - ${this.ra}`;
    }

    static #todos = [];
    static getTodos() { return Aluno.#todos };
}

export { Aluno };