import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  img_1: string = 'https://i.postimg.cc/xT4tJq82/Whats-App-Image-2021-03-19-at-6-26-11-PM.jpg';
  img_2: string = 'https://i.postimg.cc/8CWKVD1V/Whats-App-Image-2021-03-19-at-6-22-30-PM.jpg';

  urlToti: string = 'https://totidiversidade.com.br/';
  food: string = 'Tapioca';
  place: string = 'Lagoa Rodrigo de Freitas';
  word: string = 'Saudade';
  activity: string = 'Yoga'



  constructor() { }

  ngOnInit(): void {
  }

}
