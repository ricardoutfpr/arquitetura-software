import { Turma } from './turma.js';

class TurmaPresencial extends Turma {
    #frequencia = "AA04";

    constructor({ codigo, nota, frequencia}) {
        super({ codigo, nota });
        this.#frequencia = frequencia;
        TurmaPresencial.#todos.push(this);
    }

    get frequencia() { return this.#frequencia };

    aprovado() {
        return this.nota >= 6 && this.#frequencia !== "falta";
    }

    toString() {
        return `Turma Presencial ${this.codigo} - ${this.nota} - ${this.#frequencia}`;
    }

    static #todos = [];
    static getTodos() { return TurmaPresencial.#todos };
}

export { TurmaPresencial };