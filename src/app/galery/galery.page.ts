import { Component, OnInit } from '@angular/core';
import { Database003Service } from '../database003.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  constructor(public bd: Database003Service) { }

  ngOnInit() {
  }

}
