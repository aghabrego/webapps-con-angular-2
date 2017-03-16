import {Component} from 'angular2/core';
import {Pelicula} from "./Model/Pelicula";


@Component({
    selector: 'my-app',
    templateUrl: 'app/View/DetallePelicula.html',
    styleUrls: ['../build/css/app.min.css']
})

export class AppComponent { 
	public titulo:string = "Pelicula con Angular2";
	public pelicula:Pelicula;
	public mostrarPelicula:boolean;
	public peliculas:Array<Pelicula>;

	constructor() {
		this.mostrarPelicula = false;
		this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

		this.peliculas = [
			new Pelicula(1, "Mad Max: Furia en la carretera", "George Miller", 2015),
			new Pelicula(2, "Star Wars: El Despertar de la Fuerza", "J. J. Abrams", 2015),
			new Pelicula(3, "The Martian", "Ridley Scott", 2015),
			new Pelicula(4, "El renacido", "Alejandro González Iñárritu", 2015)
		];
	}

	public ShowHide(valor) { 
		this.mostrarPelicula = valor;
	}
}