import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AvatarFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {
  selectedFish: AvatarFish | null = null;

  avatarFish: AvatarFish[] = [
  {
    id: 1,
    name: 'Rare Avatar Black Galaxy Betta Fish (Male)',
    image: '/images/avatar-1.webp',
    shortDescription: 'A dark avatar betta with glowing blue galaxy-like spots.',
    fullDescription:
      'A beautiful and unique variety of the betta fish species featuring a deep black body accented by iridescent blue galaxy-like spots across its fins and body. Carefully bred to achieve a balanced and vibrant color pattern, this fish stands out as a centerpiece in any aquarium.',
    colorStyle: 'Black and Iridescent Blue',
    type: 'Avatar Betta'
  },
  {
    id: 2,
    name: 'Rare Avatar Blue Flame Betta Fish (Male)',
    image: '/images/avatar-2.webp',
    shortDescription: 'A striking avatar betta with bright blue flame accents.',
    fullDescription:
      'This avatar betta showcases a bold black base color enhanced with shimmering blue highlights that resemble flowing flames. Its contrast and glow under lighting make it a captivating addition to any aquarium setup.',
    colorStyle: 'Black with Blue Highlights',
    type: 'Avatar Betta'
  },
  {
    id: 3,
    name: 'Rare Avatar Midnight Star Betta Fish (Male)',
    image: '/images/avatar-3.webp',
    shortDescription: 'A midnight-toned betta with star-like iridescent spots.',
    fullDescription:
      'Featuring a deep midnight black body, this avatar betta is decorated with scattered blue iridescent spots that resemble stars in a night sky. Each fish has a unique pattern, making it truly one of a kind.',
    colorStyle: 'Midnight Black and Blue',
    type: 'Avatar Betta'
  },
  {
    id: 4,
    name: 'Rare Avatar Nebula Betta Fish (Male)',
    image: '/images/avatar-4.webp',
    shortDescription: 'A nebula-inspired betta with glowing blue patterns.',
    fullDescription:
      'This avatar betta displays a nebula-like appearance with glowing blue accents across a dark body. Its smooth movement and shifting colors create a mesmerizing visual effect in aquariums.',
    colorStyle: 'Dark Blue Nebula',
    type: 'Avatar Betta'
  },
  {
    id: 5,
    name: 'Rare Avatar Shadow Glow Betta Fish (Male)',
    image: '/images/avatar-5.webp',
    shortDescription: 'A shadowy betta with glowing blue iridescent details.',
    fullDescription:
      'With a shadow-like black base and subtle glowing blue patterns, this avatar betta offers a mysterious and elegant appearance. Its reflective scales shimmer under aquarium lighting.',
    colorStyle: 'Shadow Black and Blue',
    type: 'Avatar Betta'
  },
  {
    id: 6,
    name: 'Rare Avatar Cosmic Blue Betta Fish (Male)',
    image: '/images/avatar-6.webp',
    shortDescription: 'A cosmic-style betta with vibrant blue galaxy patterns.',
    fullDescription:
      'This avatar betta features a cosmic-inspired look, with bright blue iridescent spots scattered across its dark body. The galaxy-like pattern creates a dynamic and eye-catching presence.',
    colorStyle: 'Cosmic Blue',
    type: 'Avatar Betta'
  },
  {
    id: 7,
    name: 'Rare Avatar Deep Ocean Betta Fish (Male)',
    image: '/images/avatar-7.webp',
    shortDescription: 'A deep-toned betta with ocean-like blue highlights.',
    fullDescription:
      'Inspired by deep ocean colors, this avatar betta combines a dark body with rich blue highlights that shimmer like light underwater. Its calm yet striking appearance makes it a favorite.',
    colorStyle: 'Deep Blue Ocean',
    type: 'Avatar Betta'
  },
  {
    id: 8,
    name: 'Rare Avatar Night Sky Betta Fish (Male)',
    image: '/images/avatar-8.webp',
    shortDescription: 'A night sky betta with glowing scattered blue accents.',
    fullDescription:
      'This avatar betta resembles a night sky filled with glowing blue stars. Its unique pattern and strong contrast make it stand out beautifully in any aquarium.',
    colorStyle: 'Night Sky Blue',
    type: 'Avatar Betta'
  },
  {
    id: 9,
    name: 'Rare Avatar Electric Blue Betta Fish (Male)',
    image: '/images/avatar-9.webp',
    shortDescription: 'A vibrant avatar betta with electric blue highlights.',
    fullDescription:
      'Featuring intense electric blue accents over a dark body, this avatar betta delivers a bold and energetic look. Its vivid coloration makes it one of the most eye-catching varieties.',
    colorStyle: 'Electric Blue',
    type: 'Avatar Betta'
  }
];

  selectFish(fish: AvatarFish): void {
    this.selectedFish = fish;
  }
}
