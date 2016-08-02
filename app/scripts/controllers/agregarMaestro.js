'use strict';

var app = angular.module('app', ['firebase', 'ngRoute'])
.config(function ($routeProvider) {
		// Aqui agreguen todas las vistas que tendra la pagina
		$routeProvider
		.when('/agregarMaestro',{
			templateUrl: 'views/formMaestros.html',
			controller: 'agregarMaestroController',
			controllerAs: 'vm'
		})
		.when('/agregarMateria',{
			templateUrl: 'views/formMaterias.html',
			controller: 'agregarMateriaController',
			controllerAs: 'vm'
		});
	}); 

//Inicio del controlador para agregar nombre de los profesores
app.controller('agregarMaestroController', ['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');

		vm.anadirMaestro = function(){
			var ja = ref.child(vm.nombreMaestro);

			//Agregamos nombres de los maestros
			var agregar = $firebaseArray(ja);
			vm.Maestros = agregar;
		
			vm.Maestros.$add({
				nombre: vm.nombreMaestro
			});

			//Aqui agregamos maestros a otro Array para de ahi sacar los nombres
			var ja2 = ref.child("TodosMaestros");
			var agregar2 = $firebaseArray(ja2);
			vm.Maestros2 = agregar2;
			vm.Maestros2.$add({
				nombre: vm.nombreMaestro
			});
			vm.nombreMaestro = '';

		};
	}]);
//Fin del controlador de agregar nombres de profesores


//Aqui agregamos materias a los profesores
app.controller('materiaController',['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
		var refMa = new Firebase('https://geeb-e2f11.firebaseio.com/Materias/');
		var mostrarMa = $firebaseArray(refMa);

		vm.moMateria = mostrarMa;

		var child = ref.child("TodosMaestros");
		var moMaestros = $firebaseArray(child);
		vm.mostrarNombres = moMaestros;

		vm.agregarMateria = function(){
			var maestroEscogido = ref.child(vm.maestro);
			var materias = $firebaseArray(maestroEscogido);
			vm.Materias = materias;

			vm.Materias.$add({
				materia: vm.materia
			});
			vm.materia = '';
		};
	}]);
//Fin de agregar materia a los profesores

//Aqui añadimos las materias existentes
app.controller('agregarMateriaController', ['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Materias/');
		vm.Materias = $firebaseArray(ref);
		
		vm.anadirMateria = function(){
			for (var i = 0; i < vm.Materias.length; i++) {
				if(vm.Materias[i] === vm.materia){
					alert("Ya existe esta materia!");
				}
			};
			vm.Materias.$add({
				materia: vm.materia
			});	
			vm.materia = '';

		};
	}]);
//Fin de agregar materias existentes

//Aqui para controlar el menu y sus focus
app.controller('menusController', [
	function(){
		var ck = this;


		ck.ponerLink = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men0").classList.add('acti');
		}

		ck.ponerLink1 = function(){
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men1").classList.add('acti');
		}
		ck.ponerLink2 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men2").classList.add('acti');
		}
		ck.ponerLink3 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men3").classList.add('acti');
		}
		ck.ponerLink4 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men4").classList.add('acti');
		}
		ck.ponerLink5 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			document.getElementById("men5").classList.add('acti');
		}

	}]);
//Fin de modificar el menu