import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	templateUrl: 'home.html',
	animations:[
		trigger('cardShow', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'translateX(200%)'
				}),
				animate('500ms', style({
					opacity: 1,
					transform: 'translateX(0)'
				}))
			]),
		]),
	]

})
export class HomePage {
	private user:any;
	testName;

	private remindList:any[] = new Array(3);

	constructor(public navCtrl: NavController) {
		this.testName = 'test';
	}

	

}
