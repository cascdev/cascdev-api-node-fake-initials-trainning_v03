
let alunosLista = require('../db/mock-alunos.db')

exports.listarTodos = ( req, res ) => res.status(200).json(
	{ 
		ok: true,
		msg: "Lista de Todos os Alunos",
		lista: alunosLista
     })

exports.listarAlunoPorMatricula = ( req, res ) => {	
	
	const matricula = req.params.matricula  
	
	const alunoEncontrado = alunosLista.filter( a => a.matricula == matricula )  
		
	return res.status(200).json({ ok: true, aluno:alunoEncontrado })
	
}
