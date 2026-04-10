import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type HalfmoonFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-halfmoon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './halfmoon.html',
  styleUrl: './halfmoon.css'
})
export class Halfmoon {
  selectedFish: HalfmoonFish | null = null;

  halfmoonFish: HalfmoonFish[] = [
    {
      id: 1,
      name: 'Rare Halfmoon Platinum Butterfly Betta Fish (Male)',
      image: 'images/halfmoon-1.webp',
      shortDescription: 'A platinum butterfly halfmoon betta with multi-color accents.',
      fullDescription:
        'The Rare Halfmoon Platinum Butterfly Betta Fish is a stunning exotic species originating from Thailand, selectively bred by our breeders to have a perfect blue, yellow and black on its body. Its striking half-moon shaped tail and vibrant colors make it a captivating addition to any aquarium.',
      colorStyle: 'Blue, Yellow, Black',
      type: 'Halfmoon Betta'
    },
    {
      id: 2,
      name: 'Halfmoon White Betta Fish (Male)',
      image: 'images/halfmoon-2.webp',
      shortDescription: 'A clean white halfmoon betta with elegant tail spread.',
      fullDescription:
        'Halfmoon White Betta Fish is a stunning exotic species originating from Thailand, selectively bred to have a perfect sparkling white color. Its wide half-moon tail and pure tone make it visually striking.',
      colorStyle: 'White',
      type: 'Halfmoon Betta'
    },
    {
      id: 3,
      name: 'Halfmoon Blue Mustard Betta Fish (Male)',
      image: 'images/halfmoon-3.webp',
      shortDescription: 'A halfmoon betta with mustard yellow and blue tones.',
      fullDescription:
        'The Halfmoon Blue Mustard Betta Fish is a stunning exotic species originating from Thailand, selectively bred to have a perfect mustard and blue color combination. Its wide tail and contrasting colors make it stand out.',
      colorStyle: 'Mustard Yellow and Blue',
      type: 'Halfmoon Betta'
    },
    {
      id: 4,
      name: 'Rare Halfmoon Ruby Red Butterfly Betta Fish (Male)',
      image: 'images/halfmoon-4.webp',
      shortDescription: 'A ruby red butterfly halfmoon betta with vibrant contrast.',
      fullDescription:
        'Halfmoon Ruby Red Butterfly Betta Fish is a stunning exotic species originating from Thailand, selectively bred to have a rich ruby red color. Its butterfly pattern and wide tail make it highly attractive.',
      colorStyle: 'Ruby Red',
      type: 'Halfmoon Betta'
    },
    {
      id: 5,
      name: 'Halfmoon Blue Butterfly Betta Fish (Male)',
      image: 'images/halfmoon-5.webp',
      shortDescription: 'A blue butterfly halfmoon betta with elegant tail spread.',
      fullDescription:
        'The Halfmoon Blue Butterfly Betta Fish is a stunning exotic species originating from Thailand, selectively bred to have a perfect blue coloration. Its butterfly pattern enhances its visual appeal.',
      colorStyle: 'Blue',
      type: 'Halfmoon Betta'
    },
    {
      id: 6,
      name: 'Halfmoon Butterfly Mustard Betta Fish (Male)',
      image: 'images/halfmoon-6.webp',
      shortDescription: 'A mustard butterfly halfmoon betta with strong contrast.',
      fullDescription:
        'The Halfmoon Butterfly Mustard Betta Fish features a striking combination of mustard yellow and blue tones. Its wide tail and vibrant colors make it a favorite among hobbyists.',
      colorStyle: 'Mustard Yellow and Blue',
      type: 'Halfmoon Betta'
    },
    {
      id: 7,
      name: 'Halfmoon Platinum Betta Fish (Male)',
      image: 'images/halfmoon-7.webp',
      shortDescription: 'A platinum halfmoon betta with a bright metallic body.',
      fullDescription:
        'Halfmoon Platinum Betta Fish is selectively bred to have a sparkling white platinum body. Its metallic shine and wide tail make it elegant and eye-catching.',
      colorStyle: 'White Platinum',
      type: 'Halfmoon Betta'
    },
    {
      id: 8,
      name: 'Halfmoon Yellow Betta Fish (Male)',
      image: 'images/halfmoon-8.webp',
      shortDescription: 'A bright yellow halfmoon betta with vibrant tone.',
      fullDescription:
        'The Halfmoon Yellow Betta Fish features a strong yellow coloration and wide tail spread. Its vibrant appearance makes it a lively addition to any aquarium.',
      colorStyle: 'Yellow',
      type: 'Halfmoon Betta'
    },
    {
      id: 9,
      name: 'Halfmoon Blue Betta Fish (Male)',
      image: 'images/halfmoon-9.webp',
      shortDescription: 'A blue halfmoon betta with subtle purple tones.',
      fullDescription:
        'Halfmoon Blue Betta Fish is selectively bred to have a sparkling blue body with slight purple tones. Its wide tail and smooth coloration create a calm yet striking look.',
      colorStyle: 'Blue Purple',
      type: 'Halfmoon Betta'
    }
  ];

  selectFish(fish: HalfmoonFish): void {
    this.selectedFish = fish;
  }
}
