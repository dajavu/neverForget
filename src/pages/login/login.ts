import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	animations: [
		trigger('loginInput', [
			transition(':leave',[
				animate('500ms',style({
					opacity:0,
					transform: 'translateY(-100%)',
				}))
			])
		]),
	]
		
})
export class LoginPage {
	public isWelcome = false;

	public user = {
		name: '',
	}

	constructor(public navCtrl: NavController, public storage: Storage) {

	}

	//登陆
	login() {
		//保存用户到localstroge
		this.storage.set('user', JSON.stringify(this.user));

		//显示欢迎页面
		this.isWelcome = true;

		//重新设置根页面
		setTimeout(() => {
			this.navCtrl.setRoot(HomePage);
		}, 3000)
	} 

}
