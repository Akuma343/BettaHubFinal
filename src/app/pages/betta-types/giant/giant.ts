import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type GiantFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-giant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './giant.html',
  styleUrl: './giant.css'
})
export class Giant {
  selectedFish: GiantFish | null = null;

  giantFish: GiantFish[] = [
    {
      id: 1,
      name: 'Rare Giant Antique Betta Fish (Male)',
      image: 'images/giant-1.webp',
      shortDescription: 'A larger giant betta with antique-inspired tones and iridescent color.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Antique Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 2,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-2.webp',
      shortDescription: 'A giant betta with vibrant multi-color fins and body tones.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 3,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-3.webp',
      shortDescription: 'A large giant betta with shimmering multi-color patterns.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 4,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-4.webp',
      shortDescription: 'A bold giant betta with colorful iridescent fin highlights.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 5,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-5.webp',
      shortDescription: 'A premium giant betta with rich body color and mixed iridescence.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 6,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-6.webp',
      shortDescription: 'A large colorful giant betta with bright reflective fins.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 7,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-7.webp',
      shortDescription: 'A strong-bodied giant betta with vibrant mixed color display.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 8,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-8.webp',
      shortDescription: 'A colorful giant betta with impressive size and bright fins.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    },
    {
      id: 9,
      name: 'Rare Giant Multicolors Betta Fish (Male)',
      image: 'images/giant-9.webp',
      shortDescription: 'A rare giant betta with multi-color iridescence and bold presence.',
      fullDescription:
        'Discover our unique selection of betta fish that are larger than the standard variety. These fish are believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located. The majority of giant betta fish sold internationally also come from Thailand. Our betta fish have striking coloration and are adorned with iridescent multicolors on their fins and bodies. Our breeders have selectively crafted a perfect color on their bodies. Buy a rare and premium pair of betta fish from Thailand and marvel at the beauty of these magnificent creatures.',
      colorStyle: 'Multicolor',
      type: 'Giant Betta'
    }
  ];

  selectFish(fish: GiantFish): void {
    this.selectedFish = fish;
  }
}
