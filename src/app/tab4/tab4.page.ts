import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  url : string
  constructor(
    public photoService:PhotoService
  ) { 
    this.url = photoService.fotoActive 
  }

  ngOnInit() {
  }

}
