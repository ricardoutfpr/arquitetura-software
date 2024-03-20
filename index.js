import { Aluno } from './classes/aluno.js';
import { Turma } from './classes/turma.js';
import { TurmaPresencial } from './classes/turma-presencial.js';

const aluno = new Aluno({ nome: 'Ricardo França', login: 'ricardofranca@alunos.utfpr.edu.br', ra: 'a2418347' });

const turma = new Turma({ codigo: 'T1', nota: 8 });

const turmaPresencial = new TurmaPresencial({ codigo: 'TP1', nota: 6, frequencia: 'presente' });

console.log(aluno.toString());

console.log(turma.toString());
console.log(turma.aprovado());

console.log(turmaPresencial.toString());
console.log(turmaPresencial.aprovado());
