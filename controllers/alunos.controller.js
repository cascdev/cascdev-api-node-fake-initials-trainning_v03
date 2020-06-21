
let alunosLista = require('../db/mock-alunos.db') //Import do repositório de dados


// Declarar os Controllers abaixo
exports.listarTodos = ( req, res ) => {

    return res.status(200).json(
        { 
            ok: true,
            msg: "Lista de Todos os Alunos",
            lista: alunosLista
        })

}

exports.listarAlunoPorMatricula = ( req, res ) => {	
	
	const matricula = req.params.matricula  
	
	const alunoEncontrado = alunosLista.filter( a => a.matricula == matricula )  
		
	return res.status(200).json({ 
        ok: true, 
        aluno:alunoEncontrado 
    })
	
}

exports.criarAluno = ( req, res ) => {

	const body = req.body
	
    const alunoCriado = {

        nome: body.nome,
        matricula: body.matricula

    }

    alunosLista.push(alunoCriado)
	
	return res.status(201).json({
		alunoCriado,
		listaAtualizada: alunosLista
	})
}

exports.atualizarDadosDeAluno = (req,res) => {

	const matricula = req.params.matricula 

	const body = req.body

	const alunoAtualizado = {

		nome: body.nome,
		matricula: body.matricula

	}
	
    const index = alunosLista.findIndex( a => a.matricula == matricula )

    if( index < 0 ) { // Pequeno exemplo de validação
       return res.status(400).send("Não existe este aluno")
    }
    
	alunosLista[index].nome = alunoAtualizado.nome
	alunosLista[index].matricula = alunoAtualizado.matricula

	return res.status(200).json({ 
        ok: true, msg:"Aluno Atualizado", 
        listaAtualizada: alunosLista 
    })

}

exports.deletarAlunoPorMatricula = ( req, res ) => {	
	
	const matricula = req.params.matricula  

	const idxExcluir = alunosLista.findIndex( a => a.matricula == matricula ) 

	const alunoExcluido = alunosLista[idxExcluir].nome 
	
	alunosLista.splice( idxExcluir, 1 )

	return res.status(200).json({ 
		ok: true,
		msg: `O aluno, ${alunoExcluido}, foi excluido com sucesso!`   ,
		alunos: alunosLista		
	 })
	
}
