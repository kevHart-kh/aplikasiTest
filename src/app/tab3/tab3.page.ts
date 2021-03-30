import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { PhotoService } from '../photo.service';

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

	urlImageStorage: string[] = [];

	constructor(
		private afStorage: AngularFireStorage,
		public photoService: PhotoService) {

	}

	async ngOnInit() {
		await this.photoService.loadFoto();
	}

	async ionViewDidEnter() {
		await this.photoService.loadFoto();
		this.tampilkanData();
	}


	hapusFoto() {
		// var refImage = this.afStorage.storage.ref('imgStorage');
		// refImage.listAll().then((res) => {
		// 	res.items.forEach((itemRef) => {
		// 		itemRef.delete().then(() => {
		// 		this.tampilkanData();
		// 		});
		// 	});
		// });
	}

	uploadFoto() {
		console.log(this.photoService.dataFoto[index].filePath);
		return;

		this.urlImageStorage = [];
		for (var index in this.photoService.dataFoto) {
			const imgFilepath = `imgStorage/${this.photoService.dataFoto[index].filePath}`;

			this.afStorage.upload(imgFilepath, this.photoService.dataFoto[index].dataImage).then(() => {
				this.afStorage.storage.ref().child(imgFilepath).getDownloadURL().then((url) => {
				this.urlImageStorage.unshift(url)
				});
			});
		}
	}

	tampilkanData() {
		// this.urlImageStorage = [];
		// var refImage = this.afStorage.storage.ref('imgStorage');
		// refImage.listAll()
		// .then((res) => {
		// 	res.items.forEach((itemRef) => {
		// 	itemRef.getDownloadURL().then(url => {
		// 		this.urlImageStorage.unshift(url);
		// 	})
		// 	});
		// }).catch((error) => {
		// 	console.log(error);
		// })
	}


}
