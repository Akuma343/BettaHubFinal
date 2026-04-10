import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type DragonFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-dragon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragon.html',
  styleUrl: './dragon.css'
})
export class Dragon {
  selectedFish: DragonFish | null = null;

  dragonFish: DragonFish[] = [
    {
      id: 1,
      name: 'Red Dragon Scale Betta Fish (Male)',
      image: '/images/dragon-1.webp',
      shortDescription: 'A vibrant red dragon betta with metallic white scaling.',
      fullDescription:
        'Red Dragon Scale Betta Fish is a popular variety of Betta fish known for its vibrant metallic scales that create a shimmering, iridescent effect. The scales have a distinctive dragon-like appearance, which gives this fish its name. It has been selectively bred to achieve a striking red and white color combination, making it a standout addition to any aquarium.',
      colorStyle: 'Red and White',
      type: 'Dragon Betta'
    },
    {
      id: 2,
      name: 'Black Dragon Scale Betta Fish (Male)',
      image: '/images/dragon-2.webp',
      shortDescription: 'A bold black dragon betta with strong metallic contrast.',
      fullDescription:
        'Black Dragon Scale Betta Fish is a stunning variety known for its deep black body paired with bright metallic scaling. The dragon-like scale texture enhances its dramatic appearance. This fish is selectively bred for its striking black and white contrast and is highly valued by betta enthusiasts.',
      colorStyle: 'Black and White',
      type: 'Dragon Betta'
    },
    {
      id: 3,
      name: 'Yellow Dragon Scale Betta Fish (Male)',
      image: '/images/dragon-3.webp',
      shortDescription: 'A bright yellow dragon betta with shimmering scales.',
      fullDescription:
        'Yellow Dragon Scale Betta Fish features a vibrant yellow body with metallic dragon-like scales that shimmer under light. Its bright and cheerful coloration makes it a unique and eye-catching addition to aquariums.',
      colorStyle: 'Yellow Metallic',
      type: 'Dragon Betta'
    },
    {
      id: 4,
      name: 'Red Snow Dragon Scale Betta Fish (Male)',
      image: '/images/dragon-4.webp',
      shortDescription: 'A striking red and white dragon betta with strong contrast.',
      fullDescription:
        'Red Snow Dragon Scale Betta Fish is known for its vivid red and white coloration combined with thick metallic scales. The dragon-like scaling enhances its bold and elegant appearance, making it a favorite among collectors.',
      colorStyle: 'Red and White',
      type: 'Dragon Betta'
    },
    {
      id: 5,
      name: 'Veiltail Red Dragon Betta Fish (Male)',
      image: '/images/dragon-5.webp',
      shortDescription: 'A veiltail dragon betta with flowing fins and red tones.',
      fullDescription:
        'Veiltail Red Dragon Betta Fish is recognized for its long, flowing tail and vibrant red coloration. Originating from Southeast Asia, the veiltail shape gives it a graceful appearance, while its dragon scaling adds a unique texture.',
      colorStyle: 'Red',
      type: 'Dragon Betta'
    },
    {
      id: 6,
      name: 'Veiltail Black Dragon Betta Fish (Male)',
      image: '/images/dragon-6.webp',
      shortDescription: 'A veiltail dragon betta with dark tones and elegant fins.',
      fullDescription:
        'Veiltail Black Dragon Betta Fish combines a flowing veiltail fin with deep black coloration and metallic scaling. Its elegant movement and bold color make it visually striking in any aquarium.',
      colorStyle: 'Black',
      type: 'Dragon Betta'
    },
    {
      id: 7,
      name: 'Veiltail Red Dragon Betta Fish (Female)',
      image: '/images/dragon-7.webp',
      shortDescription: 'A female veiltail dragon betta with soft red tones.',
      fullDescription:
        'This female veiltail dragon betta features a softer red coloration with a graceful tail structure. It retains the metallic dragon scaling while offering a more subtle and balanced appearance.',
      colorStyle: 'Soft Red',
      type: 'Dragon Betta'
    },
    {
      id: 8,
      name: 'Veiltail Black Dragon Betta Fish (Female)',
      image: '/images/dragon-8.webp',
      shortDescription: 'A female dragon betta with dark tones and smooth movement.',
      fullDescription:
        'This female black veiltail dragon betta showcases a darker color palette with elegant fin movement. Its metallic scales add texture and depth to its overall appearance.',
      colorStyle: 'Dark Black',
      type: 'Dragon Betta'
    },
    {
      id: 9,
      name: 'Halfmoon Red Dragon Betta Fish (Male)',
      image: '/images/dragon-9.webp',
      shortDescription: 'A halfmoon dragon betta with wide fins and bright red hues.',
      fullDescription:
        'Halfmoon Red Dragon Betta Fish is an exotic variety known for its wide, 180-degree tail spread and vibrant red coloration. Selectively bred for its unique color genetics, it displays a bold and striking appearance in aquariums.',
      colorStyle: 'Bright Red',
      type: 'Dragon Betta'
    }
  ];

  selectFish(fish: DragonFish): void {
    this.selectedFish = fish;
  }
}
