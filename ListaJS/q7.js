function alunosAprovados(listAlunos){
    
    for(var i = 0; i <listAlunos.length;i++){
        const aluno = listAlunos[i];
        const notas = aluno.notas;

        
        const media = notas.reduce((total, notas) => total + notas, 0)/notas.length;

        if(media >=7){
            console.log(`Nome: ${aluno.nome}`);
            console.log(`Media aritmetrica: ${media.toFixed(2)}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log(); 
        }
    }
}


//Lista:
var alunos = [
    { nome: "Maria Clara", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Victor", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Felipe", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Gabriel Felix", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Julia  ", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];


alunosAprovados(alunos);