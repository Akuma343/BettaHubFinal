import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SamuraiFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-samurai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './samurai.html',
  styleUrl: './samurai.css'
})
export class Samurai {
  selectedFish: SamuraiFish | null = null;

  samuraiFish: SamuraiFish[] = [
    {
      id: 1,
    name: 'Rare Black Shadow Samurai Halfmoon Betta Fish (Male)',
      image: '/images/samurai-2.webp',
      shortDescription: 'A halfmoon samurai betta with strong contrast and wide tail.',
      fullDescription:
        'The Rare Black Shadow Samurai Halfmoon Betta Fish is a stunning exotic species originating from Thailand. It features a wide halfmoon tail and bold contrasting colors, making it a captivating centerpiece for any aquarium.',
      colorStyle: 'Black and Metallic Contrast',
      type: 'Samurai Betta'
    },
    {
      id: 2,
      name: 'Rare Double Tail Blue Samurai Betta Fish (Male)',
      image: '/images/samurai-3.webp',
      shortDescription: 'A double tail samurai betta with vibrant blue tones.',
      fullDescription:
        'The Rare Double Tail Blue Samurai Betta Fish features a unique double tail structure combined with vibrant blue coloration. Its balanced shape and bold tones create a distinctive and elegant look.',
      colorStyle: 'Blue Metallic',
      type: 'Samurai Betta'
    }
  ];

  selectFish(fish: SamuraiFish): void {
    this.selectedFish = fish;
  }
}
