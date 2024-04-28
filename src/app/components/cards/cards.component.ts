import { ImagesService } from './../../services/images.service';
import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.dto'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  public cards!: Image[];

  constructor(private imageService: ImagesService){}

  ngOnInit(): void {
      this.imageService.getAllImages().subscribe((cards) => {
        this.cards = cards;
      });
  }
}
