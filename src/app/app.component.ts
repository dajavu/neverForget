import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any; 

	user: any = Object;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public storage: Storage,
	) {
		let self = this;
		//判断用户是否登陆，如果没有登陆，跳转到登陆页面，否则到首页
		storage.get('user').then((val) => {
			self.user = JSON.parse(val);
			console.log(self.user)
			if (self.user){   
				this.rootPage = HomePage;
			}else{ 
				this.rootPage = LoginPage;
			}
		});
	}

	//注销
	logout(){
		console.log()
		this.nav.setRoot(LoginPage); 
	}
}
