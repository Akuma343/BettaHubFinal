import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type WildFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-wild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wild.html',
  styleUrl: './wild.css'
})
export class Wild {
  selectedFish: WildFish | null = null;

  wildFish: WildFish[] = [
    {
      id: 1,
      name: 'Splenden Hybrid Betta Fish (Male)',
      image: '/images/wild-1.webp',
      shortDescription: 'A hybrid wild betta with vivid blue metallic tones.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant blue colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Blue Metallic',
      type: 'Wild Betta'
    },
    {
      id: 2,
      name: 'Wild Betta Imbellis - South of Thailand (Male)',
      image: '/images/wild-2.webp',
      shortDescription: 'A naturally occurring wild betta from South Thailand.',
      fullDescription:
        'South of Thailand Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly South of Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home The South of Thailand Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Natural Wild Blend',
      type: 'Wild Betta'
    },
    {
      id: 3,
      name: 'Long Southern Red Benjarong Crimson Cheek Wild Betta Fish - Kingdom of Thailand (Male)',
      image: '/images/wild-3.webp',
      shortDescription: 'A rare wild betta with red and crimson cheek tones.',
      fullDescription:
        'Long Southern Red Benjarong Crimson Cheek Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Long Southern Red Benjarong Crimson Cheek Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Red Crimson',
      type: 'Wild Betta'
    },
    {
      id: 4,
      name: 'Copper Alien Wild Betta Fish (Male)',
      image: '/images/wild-4.webp',
      shortDescription: 'A hybrid wild betta with copper metallic coloration.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant copper colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Copper Metallic',
      type: 'Wild Betta'
    },
    {
      id: 5,
      name: 'Blue Mahachaiensis Betta - Thailand Wild Betta (Male)',
      image: '/images/wild-5.webp',
      shortDescription: 'A Thailand wild betta with rich blue natural tones.',
      fullDescription:
        'Mahachai Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Mahachai Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Blue Wild Tone',
      type: 'Wild Betta'
    },
    {
      id: 6,
      name: 'Red Benjarong Crimson Cheek Wild Betta Fish - Kingdom of Thailand (Male)',
      image: '/images/wild-6.webp',
      shortDescription: 'A Thai wild betta with bold red and crimson features.',
      fullDescription:
        'Red Benjarong Crimson Cheek Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Red Benjarong Crimson Cheek Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Red Crimson',
      type: 'Wild Betta'
    },
    {
      id: 7,
      name: 'Hybrid Blue Ocean Wild Betta Fish (Male)',
      image: '/images/wild-7.webp',
      shortDescription: 'A hybrid wild betta with deep ocean-blue iridescence.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant blue colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Ocean Blue',
      type: 'Wild Betta'
    },
    {
      id: 8,
      name: 'Green Alien Wild Betta Fish (Male)',
      image: '/images/wild-8.webp',
      shortDescription: 'A hybrid wild betta with green metallic shine.',
      fullDescription:
        'Green Alien Betta Fish is a hybrid species created by mixing different types of Betta fish to create striking patterns and vibrant colors. Typically, these fish have a green body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Bring home The Green Alien Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Green Metallic',
      type: 'Wild Betta'
    },
    {
      id: 9,
      name: 'Smaragdina Guitar Spade Tail - Thailand Wild Betta (Male)',
      image: '/images/wild-9.webp',
      shortDescription: 'A Thailand wild betta with a unique spade-tail form.',
      fullDescription:
        'Mahachai Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Mahachai Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Green Blue Wild Tone',
      type: 'Wild Betta'
    }
  ];

  selectFish(fish: WildFish): void {
    this.selectedFish = fish;
  }
}
