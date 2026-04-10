import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CrowntailFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-crowntail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crowntail.html',
  styleUrl: './crowntail.css'
})
export class Crowntail {
  selectedFish: CrowntailFish | null = null;

  crowntailFish: CrowntailFish[] = [
    {
      id: 1,
      name: 'Rare Crowntail Mustard Betta Fish (Male)',
      image: '/images/crowntail-1.webp',
      shortDescription: 'A mustard and blue crowntail betta with spiky fins.',
      fullDescription:
        'A siamese betta fish has a slender body with a unique feature — reduced webbing between fin rays, creating a spiky appearance. This variety is bred to have a striking mustard and blue color combination.',
      colorStyle: 'Mustard Yellow and Blue',
      type: 'Crowntail Betta'
    },
    {
      id: 2,
      name: 'Candy Crowntail Betta Fish (Male)',
      image: '/images/crowntail-2.webp',
      shortDescription: 'A colorful crowntail betta with blue and white tones.',
      fullDescription:
        'This crowntail betta features a beautiful blue and white color combination with elegant fins and a balanced body shape. Its shimmering scales and graceful movement make it visually striking.',
      colorStyle: 'Blue and White',
      type: 'Crowntail Betta'
    },
    {
      id: 3,
      name: 'Rare Candy Crowntail Betta Fish (Male)',
      image: '/images/crowntail-3.webp',
      shortDescription: 'A multicolor crowntail betta with candy-like patterns.',
      fullDescription:
        'Rare Candy Crowntail Betta Fish features a slender body and spiky fins caused by reduced webbing. It is selectively bred to display bright multicolor patterns across its body.',
      colorStyle: 'Multicolor',
      type: 'Crowntail Betta'
    },
    {
      id: 4,
      name: 'Rare Bloody Black Crowntail Betta Fish (Male)',
      image: '/images/crowntail-4.webp',
      shortDescription: 'A dark crowntail betta with deep black coloration.',
      fullDescription:
        'This crowntail betta is known for its deep black tones and spiky fin structure. Its iridescent highlights add contrast and depth to its overall appearance.',
      colorStyle: 'Black',
      type: 'Crowntail Betta'
    },
    {
      id: 5,
      name: 'Crowntail Blue Betta Fish (Male)',
      image: '/images/crowntail-5.webp',
      shortDescription: 'A blue crowntail betta with subtle purple tones.',
      fullDescription:
        'A crowntail betta with a slender body and spiky fins, bred to display a blue and purple color combination. Its vibrant tones make it stand out in any aquarium.',
      colorStyle: 'Blue Purple',
      type: 'Crowntail Betta'
    },
    {
      id: 6,
      name: 'Crowntail Red Betta Fish (Male)',
      image: '/images/crowntail-6.webp',
      shortDescription: 'A bright red crowntail betta with spiky fins.',
      fullDescription:
        'This crowntail betta is bred to showcase a strong red coloration. Its spiky fins and vibrant tone create a bold and eye-catching appearance.',
      colorStyle: 'Red',
      type: 'Crowntail Betta'
    },
    {
      id: 7,
      name: 'Crowntail White Betta Fish (Male)',
      image: '/images/crowntail-7.webp',
      shortDescription: 'A clean white crowntail betta with elegant fins.',
      fullDescription:
        'This crowntail betta features a bright white coloration combined with its signature spiky fin structure, giving it a clean and elegant look.',
      colorStyle: 'White',
      type: 'Crowntail Betta'
    },
    {
      id: 8,
      name: 'Crowntail Black Venom Betta Fish (Male)',
      image: '/images/crowntail-8.webp',
      shortDescription: 'A dark crowntail betta with venom-like patterns.',
      fullDescription:
        'This crowntail betta features dark black tones with iridescent highlights that resemble venom-like patterns. Its unique appearance makes it highly distinctive.',
      colorStyle: 'Black Venom',
      type: 'Crowntail Betta'
    },
    {
      id: 9,
      name: 'Crowntail Cow Pattern Betta Fish (Male)',
      image: '/images/crowntail-9.webp',
      shortDescription: 'A multicolor crowntail betta with cow-like patterns.',
      fullDescription:
        'This crowntail betta showcases a multicolor pattern resembling a cow print. Its unique coloration and spiky fins create a striking and playful appearance.',
      colorStyle: 'Multicolor Cow Pattern',
      type: 'Crowntail Betta'
    }
  ];

  selectFish(fish: CrowntailFish): void {
    this.selectedFish = fish;
  }
}
