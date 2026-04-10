import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type DumboFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-dumbo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dumbo.html',
  styleUrl: './dumbo.css'
})
export class Dumbo {
  selectedFish: DumboFish | null = null;

  dumboFish: DumboFish[] = [
    {
      id: 1,
      name: 'Dumbo Yellow Pineapple Betta Fish (Male)',
      image: '/images/dumbo-1.webp',
      shortDescription: 'A bright dumbo betta with yellow pineapple tones and large pectoral fins.',
      fullDescription:
        'Dumbo Yellow Pineapple Betta Fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling yellow pineapple color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo Yellow Pineapple Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Yellow Pineapple',
      type: 'Dumbo Betta'
    },
    {
      id: 2,
      name: 'Dumbo Halfmoon Gold Butterfly Betta Fish (Male)',
      image: '/images/dumbo-2.webp',
      shortDescription: 'A dumbo halfmoon betta with gold butterfly tones and elegant fins.',
      fullDescription:
        'The Dumbo Halfmoon Gold Butterfly Betta fish is a stunning exotic species originating from Thailand, selectively bred by our breeders to have a perfect gold color on its body. Its striking half-moon shaped tail and vibrant colors make it a captivating addition to any aquarium. Bring home The Dumbo Halfmoon Gold Butterfly Betta fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Gold Butterfly',
      type: 'Dumbo Betta'
    },
    {
      id: 3,
      name: 'Dumbo Lavender Butterfly Betta Fish (Male)',
      image: '/images/dumbo-3.webp',
      shortDescription: 'A soft lavender dumbo betta with butterfly patterning.',
      fullDescription:
        'Dumbo Lavender Butterfly Betta Fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling Dumbo Lavender Butterfly Betta Fish color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo Lavender Butterfly Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Lavender Butterfly',
      type: 'Dumbo Betta'
    },
    {
      id: 4,
      name: 'Dumbo Pineapple Butterfly Betta Fish (Male)',
      image: '/images/dumbo-4.webp',
      shortDescription: 'A dumbo betta with pineapple butterfly coloring and broad fins.',
      fullDescription:
        'Dumbo Pineapple Butterfly Betta Fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling Dumbo Pineapple Butterfly Betta Fish color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo Pineapple Butterfly Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Pineapple Butterfly',
      type: 'Dumbo Betta'
    },
    {
      id: 5,
      name: 'Dumbo Lavender Betta Fish (Male)',
      image: '/images/dumbo-5.webp',
      shortDescription: 'A lavender dumbo betta with broad fins and an elegant look.',
      fullDescription:
        'The Dumbo Lavender Betta Fish is a stunning exotic species originating from Thailand, selectively bred by our expert breeders to have shorter tails and broad with a spectacular lavender color on its body, long pectoral fins that resemble the ears of an elephant, making them look like they are flying through the water. This unique feature gives the fish a striking appearance that is sure to captivate any observer. Add the Dumbo Lavender Betta Fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Lavender',
      type: 'Dumbo Betta'
    },
    {
      id: 6,
      name: 'Dumbo White Betta Fish (Male)',
      image: '/images/dumbo-6.webp',
      shortDescription: 'A clean white dumbo betta with distinctive elephant-ear fins.',
      fullDescription:
        'The Dumbo Betta fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling white color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo White Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'White',
      type: 'Dumbo Betta'
    },
    {
      id: 7,
      name: 'Dumbo Gold Betta Fish (Male)',
      image: '/images/dumbo-7.webp',
      shortDescription: 'A sparkling gold dumbo betta with large pectoral fins.',
      fullDescription:
        'Dumbo Gold Betta Fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling Dumbo Gold Betta Fish color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo Gold Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Gold',
      type: 'Dumbo Betta'
    },
    {
      id: 8,
      name: 'Dumbo Gold Butterfly Betta Fish (Male)',
      image: '/images/dumbo-8.webp',
      shortDescription: 'A dumbo betta with gold butterfly tones and bright elegant fins.',
      fullDescription:
        'Dumbo Gold Betta Fish gets its name from its large, distinctive pectoral fins that resemble the ears of an elephant, selectively bred by our breeders to have a perfect sparkling Dumbo Gold Betta Fish color on its body. These fins give the fish a unique and striking appearance that has made them a popular choice for aquarium enthusiasts. Bring home The Dumbo Gold Betta Fish today and experience the beauty of this magnificent creature.',
      colorStyle: 'Gold Butterfly',
      type: 'Dumbo Betta'
    },
    {
      id: 9,
      name: 'Dumbo Mulberry Betta Fish (Male)',
      image: '/images/dumbo-9.webp',
      shortDescription: 'A rich mulberry dumbo betta with flowing movement and broad fins.',
      fullDescription:
        'The Dumbo Mulberry Betta Fish is a stunning exotic species originating from Thailand, selectively bred by our expert breeders to have shorter tails and broad with a spectacular lavender color on its body, long pectoral fins that resemble the ears of an elephant, making them look like they are flying through the water. This unique feature gives the fish a striking appearance that is sure to captivate any observer. Add the Dumbo Mulberry Betta Fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Mulberry',
      type: 'Dumbo Betta'
    }
  ];

  selectFish(fish: DumboFish): void {
    this.selectedFish = fish;
  }
}
