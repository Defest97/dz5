import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-photos',
  templateUrl: './city-photos.component.html',
  styleUrls: ['./city-photos.component.css']
})
export class CityPhotosComponent {
  id = 0;
  photos = [
    {
      src: 'https://moemisto.ua/img/cache/event_huge/event/0003/64/585ab88e98d1d34ce64d16b2904b4a619521118e.jpeg?hash=2018-12-05-14-32-59'
    },
    {
      src: 'https://a.d-cd.net/-KAAAgOJIOA-1920.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Спасо-Преображенський_собор_%28Житомир%29_.JPG'
    },
    {
      src: 'https://s.0412.ua/section/newsIcon/upload/images/news/icon/000/052/537/11911587232628546604718543189422044151133572o_5f609cd4655f0.jpg'
    },
    {
      src: 'https://freshnews.zt.ua/upload/iblock/cbc/cbc34cf7161669dbd0443db9443d0c8f.jpg'
    },
    {
      src: 'https://avatars.mds.yandex.net/i?id=83dc5b108eb24e9d2f83c16538cf57b5a67abc50-9148232-images-thumbs&n=13'
    },
  ]
  
  constructor(private rout: ActivatedRoute) {
    rout.params.subscribe(params=>this.id=params['id']);
    this.loadPhotos();
  }
  loadPhotos() {
    if (this.id &&this.id<6)
    {
     return [this.photos[this.id-1]];
    }
    return this.photos
  }
}
