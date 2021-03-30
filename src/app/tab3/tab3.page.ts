import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';
// import { Varglob } from "../photo.service";

export interface fileFoto {
	name: String,
	path: String
}

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

	status = "Loading . . . ."
	urlImageStorage: string[] = [];

	constructor(
		private afStorage: AngularFireStorage,
		public photoService: PhotoService,
		// public varGlob : Varglob,
		public router: Router) {

	}

	async ngOnInit() {
		await this.photoService.loadFoto();
	}

	async ionViewDidEnter() {
		await this.photoService.loadFoto();
		this.tampilkanData();
	}

	tampilkanData() {
		this.urlImageStorage = [];
		var refImage = this.afStorage.storage.ref('imgStorage');
		refImage.listAll()
		.then((res) => {
			status = ""
			res.items.forEach((itemRef) => {
				itemRef.getDownloadURL().then(url => {
					this.urlImageStorage.unshift(url);
				})
			});
		}).catch((error) => {
			console.log(error);
		})
	}

	bukaFoto(url){
		this.photoService.fotoActive = url
		this.router.navigateByUrl('/tab4')

	}


}
