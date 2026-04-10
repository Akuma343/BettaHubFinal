import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AlienFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-alien',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alien.html',
  styleUrl: './alien.css'
})
export class Alien {
  selectedFish: AlienFish | null = null;

  alienFish: AlienFish[] = [
    {
      id: 1,
      name: 'Green Alien Wild Betta Fish (Male)',
      image: 'images/alien-1.webp',
      shortDescription: 'A hybrid alien betta with a vivid green metallic sheen.',
      fullDescription:
        'Green Alien Betta Fish is a hybrid species created by mixing different types of Betta fish to create striking patterns and vibrant colors. Typically, these fish have a green body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Bring home The Green Alien Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Green Metallic',
      type: 'Alien Betta'
    },
    {
      id: 2,
      name: 'Green Mahachaiensis Betta - Thailand Wild Betta (Male)',
      image: 'images/alien-2.webp',
      shortDescription: 'A wild betta from Thailand with bright green-toned features.',
      fullDescription:
        'Mahachai Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Mahachai Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Green Wild Tone',
      type: 'Alien Betta'
    },
    {
      id: 3,
      name: 'Smaragdina Guitar Spade Tail - Thailand Wild Betta (Male)',
      image: 'images/alien-3.webp',
      shortDescription: 'A wild-type betta with a guitar spade tail and natural shine.',
      fullDescription:
        'Mahachai Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Mahachai Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Green Blue Wild Tone',
      type: 'Alien Betta'
    },
    {
      id: 4,
      name: 'Copper Alien Wild Betta Fish (Male)',
      image: 'images/alien-4.webp',
      shortDescription: 'A hybrid alien betta with vibrant copper tones and metallic shine.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant copper colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Copper Metallic',
      type: 'Alien Betta'
    },
    {
      id: 5,
      name: 'Splenden Hybrid Betta Fish (Male)',
      image: 'images/alien-5.webp',
      shortDescription: 'A hybrid betta with bold blue coloration and metallic finish.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant blue colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Blue Metallic',
      type: 'Alien Betta'
    },
    {
      id: 6,
      name: 'Hybrid Blue Ocean Wild Betta Fish (Male)',
      image: 'images/alien-6.webp',
      shortDescription: 'A hybrid wild betta with deep ocean-blue metallic tones.',
      fullDescription:
        'A hybrid species created by mixing different types of Siamese Fighter Fish to create striking patterns and vibrant blue colors. Typically, these fish have a blue body with a vivid metallic sheen, and their stunning iridescence and patterns make them a unique and captivating addition to any aquarium. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Ocean Blue',
      type: 'Alien Betta'
    },
    {
      id: 7,
      name: 'Long Southern Red Benjarong Crimson Cheek Wild Betta Fish - Kingdom of Thailand (Male)',
      image: 'images/alien-7.webp',
      shortDescription: 'A wild betta from Thailand with rich red and crimson tones.',
      fullDescription:
        'Long Southern Red Benjarong Crimson Cheek Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home Long Southern Red Benjarong Crimson Cheek Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Red Crimson',
      type: 'Alien Betta'
    },
    {
      id: 8,
      name: 'Wild Betta Imbellis - South of Thailand (Male)',
      image: 'images/alien-8.webp',
      shortDescription: 'A South Thailand wild betta with natural colorful features.',
      fullDescription:
        'South of Thailand Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly South of Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home The South of Thailand Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Natural Wild Blend',
      type: 'Alien Betta'
    },
    {
      id: 9,
      name: 'Blue Mahachaiensis Betta - Thailand Wild Betta (Male)',
      image: 'images/alien-9.webp',
      shortDescription: 'A Thailand wild betta with bright blue coloration.',
      fullDescription:
        'Mahachai Wild Betta Fish is a collection of Betta species that naturally inhabit the wild habitats of Southeast Asia, particularly Thailand. These species of Betta Fish can still be found in their natural habitats and have been selectively bred by our expert breeders for their brightly colored features like their domesticated counterparts. Addition to any aquarium. Bring home tMahachai Wild Betta Fish today and experience the beauty of this extraordinary creature.',
      colorStyle: 'Bright Blue',
      type: 'Alien Betta'
    },
  ];

  selectFish(fish: AlienFish): void {
    this.selectedFish = fish;
  }
}
