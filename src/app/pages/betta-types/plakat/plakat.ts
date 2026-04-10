import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type PlakatFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-plakat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plakat.html',
  styleUrl: './plakat.css'
})
export class Plakat {
  selectedFish: PlakatFish | null = null;

  plakatFish: PlakatFish[] = [
    {
      id: 1,
      name: 'Yellow Dragon Scale Betta Fish (Male)',
      image: '/images/plakat-1.webp',
      shortDescription: 'A yellow dragon scale betta with metallic shine.',
      fullDescription:
        'Yellow Dragon Scale Betta Fish is known for its vibrant metallic scales that create a shimmering effect. Its dragon-like scaling and bright yellow coloration make it visually striking.',
      colorStyle: 'Yellow Metallic',
      type: 'Plakat Betta'
    },
    {
      id: 2,
      name: 'Red Dragon Scale Betta Fish (Male)',
      image: '/images/plakat-2.webp',
      shortDescription: 'A red dragon scale betta with bold contrast.',
      fullDescription:
        'Red Dragon Scale Betta Fish features a strong red and white color combination with metallic scaling. Its dragon-like appearance gives it a powerful and elegant look.',
      colorStyle: 'Red and White',
      type: 'Plakat Betta'
    },
    {
      id: 3,
      name: 'Dumbo Gold Betta Fish (Male)',
      image: '/images/plakat-3.webp',
      shortDescription: 'A dumbo betta with gold tones and large fins.',
      fullDescription:
        'Dumbo Gold Betta Fish is recognized for its large pectoral fins and shimmering gold coloration. Its unique fin structure creates a flowing, graceful movement.',
      colorStyle: 'Gold',
      type: 'Plakat Betta'
    },
    {
      id: 4,
      name: 'Dumbo White Betta Fish (Male)',
      image: '/images/plakat-4.webp',
      shortDescription: 'A clean white dumbo betta with elegant fins.',
      fullDescription:
        'Dumbo White Betta Fish features a bright white body with large pectoral fins resembling elephant ears. Its clean tone and graceful movement make it visually appealing.',
      colorStyle: 'White',
      type: 'Plakat Betta'
    },
    {
      id: 5,
      name: 'Koi Candy Betta Fish (Male)',
      image: '/images/plakat-5.webp',
      shortDescription: 'A colorful koi betta with candy-like patterns.',
      fullDescription:
        'Koi Candy Betta Fish displays a mix of bright colors such as red, blue, yellow, and white. Its playful color pattern resembles a candy-like appearance.',
      colorStyle: 'Multicolor Candy',
      type: 'Plakat Betta'
    },
    {
      id: 6,
      name: 'Galaxy Koi Nemo Betta Fish (Male)',
      image: '/images/plakat-6.webp',
      shortDescription: 'A galaxy koi betta with star-like patterns.',
      fullDescription:
        'Galaxy Koi Nemo Betta Fish features scattered iridescent scales that resemble a galaxy. Its multi-color pattern and shimmering effect make it highly attractive.',
      colorStyle: 'Galaxy Multicolor',
      type: 'Plakat Betta'
    },
    {
      id: 7,
      name: 'White and Blue Butterfly Betta Fish (Male)',
      image: '/images/plakat-7.webp',
      shortDescription: 'A butterfly betta with white and blue tones.',
      fullDescription:
        'This butterfly betta showcases a clean white and blue color combination. Its smooth gradient and contrast give it a refined and elegant look.',
      colorStyle: 'White and Blue',
      type: 'Plakat Betta'
    },
    {
      id: 8,
      name: 'Marmalade Orange Betta Fish (Male)',
      image: '/images/plakat-8.webp',
      shortDescription: 'A bright orange betta with marmalade tones.',
      fullDescription:
        'Marmalade Orange Betta Fish features a vibrant orange body with a warm tone. Its bright coloration adds energy and life to any aquarium.',
      colorStyle: 'Orange',
      type: 'Plakat Betta'
    },
    {
      id: 9,
      name: 'Dumbo Pineapple Butterfly Betta Fish (Male)',
      image: '/images/plakat-9.webp',
      shortDescription: 'A dumbo betta with pineapple butterfly coloration.',
      fullDescription:
        'Dumbo Pineapple Butterfly Betta Fish combines large pectoral fins with a unique pineapple-like color pattern. Its vibrant tones and elegant movement make it stand out.',
      colorStyle: 'Pineapple Yellow',
      type: 'Plakat Betta'
    }
  ];

  selectFish(fish: PlakatFish): void {
    this.selectedFish = fish;
  }
}
