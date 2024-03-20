class Turma {
    #codigo = "AA04";
    #nota = 10;

    constructor({ codigo, nota }) {
        this.#codigo = codigo;
        this.#nota = nota;
        Turma.#todos.push(this);
    }

    get codigo() { return this.#codigo };
    get nota() { return this.#nota };

    aprovado() {
        return this.#nota >= 6;
    }

    toString() {
        return `Turma ${this.#codigo} - ${this.#nota}`;
    }

    static #todos = [];
    static getTodos() { return Turma.#todos };
}

export { Turma };