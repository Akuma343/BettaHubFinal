import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type VeiltailFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-veiltail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veiltail.html',
  styleUrl: './veiltail.css'
})
export class Veiltail {
  selectedFish: VeiltailFish | null = null;

  veiltailFish: VeiltailFish[] = [
    {
      id: 1,
      name: 'Veiltail Red Dragon Betta Fish (Female)',
      image: 'images/veiltail-7.webp',
      shortDescription: 'A female red dragon veiltail with bright flowing fins.',
      fullDescription:
        'This female Veiltail Red Dragon Betta Fish features a graceful veiltail shape with bright red dragon-like coloration. Its long fins and vivid tones make it both elegant and visually strong.',
      colorStyle: 'Red Dragon',
      type: 'Veiltail Betta'
    },
    {
      id: 2,
      name: 'Veiltail Gold Betta Fish (Male)',
      image: 'images/veiltail-2.webp',
      shortDescription: 'A golden veiltail betta with long, graceful fins.',
      fullDescription:
        'The Veiltail betta fish is a popular aquarium pet known for its long, flowing tail. Originating from Southeast Asia, particularly Thailand, this variety is admired for its elegant shape and shimmering gold coloration.',
      colorStyle: 'Gold',
      type: 'Veiltail Betta'
    },
    {
      id: 3,
      name: 'Veiltail Red Dragon Betta Fish (Male)',
      image: 'images/veiltail-3.webp',
      shortDescription: 'A veiltail dragon betta with red tones and flowing fins.',
      fullDescription:
        'This Veiltail Red Dragon Betta Fish combines the graceful tail shape of the veiltail variety with bold red dragon-style coloration. Its long fins and striking body color give it a strong and elegant appearance.',
      colorStyle: 'Red Dragon',
      type: 'Veiltail Betta'
    },
    {
      id: 4,
      name: 'Veiltail Black Dragon Betta Fish (Male)',
      image: 'images/veiltail-4.webp',
      shortDescription: 'A dark veiltail dragon betta with bold contrast.',
      fullDescription:
        'Veiltail Black Dragon Betta Fish is known for its long flowing tail and dark dragon-like body tones. The combination of black coloration and metallic texture gives it a dramatic and eye-catching look.',
      colorStyle: 'Black Dragon',
      type: 'Veiltail Betta'
    },
    {
      id: 5,
      name: 'Veiltail Gold Betta Fish (Female)',
      image: 'images/veiltail-5.webp',
      shortDescription: 'A female veiltail betta with soft gold coloration.',
      fullDescription:
        'This female Veiltail Gold Betta Fish features a graceful body shape with soft golden tones and elegant fins. Its calm appearance and warm coloration make it a lovely addition to a display aquarium.',
      colorStyle: 'Gold',
      type: 'Veiltail Betta'
    },
    {
      id: 6,
      name: 'Veiltail Black Dragon Betta Fish (Female)',
      image: 'images/veiltail-6.webp',
      shortDescription: 'A female black dragon veiltail with deep dark tones.',
      fullDescription:
        'This female Veiltail Black Dragon Betta Fish displays a dark body with flowing fins and a dragon-inspired appearance. Its rich black tones and elegant movement create a refined and striking presentation.',
      colorStyle: 'Black Dragon',
      type: 'Veiltail Betta'
    }
  ];

  selectFish(fish: VeiltailFish): void {
    this.selectedFish = fish;
  }
}
