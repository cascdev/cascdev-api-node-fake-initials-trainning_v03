const express = require ('express')
const router = express.Router()

const _ctrl = require('../controllers/alunos.controller') // Import dos controllers

// Declarar as Rotas Abaixo
router.get( '/', _ctrl.listarTodos )

router.get( '/:matricula', _ctrl.listarAlunoPorMatricula ) 

router.post( '/',  _ctrl.criarAluno )

router.put( '/:matricula', _ctrl.atualizarDadosDeAluno )

router.delete( '/:matricula', _ctrl.deletarAlunoPorMatricula )

module.exports = router