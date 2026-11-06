abstract class EntidadeEscolar {
    abstract obterFuncao(): string;
}

class Pessoa extends EntidadeEscolar {
    private _nome: string;

    constructor(nome: string) {
        super();
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public seApresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }

    public obterFuncao(): string {
        return "Membro da escola";
    }
}

class Aluno extends Pessoa {
    private _nota: number;

    constructor(nome: string, nota: number) {
        super(nome);
        this._nota = nota;
    }

    public override seApresentar(): void {
        console.log(`Olá, sou o aluno ${this.nome} e tirei nota ${this._nota}.`);
    }

    public override obterFuncao(): string {
        return "Estudante";
    }
}

class Professor extends Pessoa {
    private _disciplina: string;

    constructor(nome: string, disciplina: string) {
        super(nome);
        this._disciplina = disciplina;
    }

    public override seApresentar(): void {
        console.log(`Olá, sou o professor ${this.nome} e leciono ${this._disciplina}.`);
    }

    public override obterFuncao(): string {
        return "Docente";
    }
}

const listaPessoas: Pessoa[] = [
    new Aluno("Maria", 9.5),
    new Professor("Carlos", "Programação Orientada a Objetos")
];

for (const pessoa of listaPessoas) {
    pessoa.seApresentar(); 
    console.log(`Função: ${pessoa.obterFuncao()}\n`);
}
