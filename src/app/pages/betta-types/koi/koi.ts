import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type KoiFish = {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  colorStyle: string;
  type: string;
};

@Component({
  selector: 'app-koi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './koi.html',
  styleUrl: './koi.css'
})
export class Koi {
  selectedFish: KoiFish | null = null;

  koiFish: KoiFish[] = [
    {
      id: 1,
      name: 'Yellow Tiger Koi Galaxy Prakat Betta Fish (Male)',
      image: 'images/koi-1.webp',
      shortDescription: 'A koi galaxy betta with yellow, blue, and black tiger-like patterning.',
      fullDescription:
        'Yellow Tiger Koi Galaxy Halfmoon Prakat Betta Fish (HMPK) is a stunning exotic species originating from Thailand. Our breeder has specially bred this fish with unique color genes that lend it striking yellow blue and black hues on its body, making it a captivating sight that is sure to catch the eye of any observer. The scattered iridescent scales of the Betta resemble the patterns of a tiger, adding to its allure. Add the Yellow Tiger Koi Galaxy Halfmoon Prakat Betta Fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Yellow, Blue, Black',
      type: 'Koi Betta'
    },
    {
      id: 2,
      name: 'Koi Galaxy Halfmoon Prakat Betta Fish (Male)',
      image: 'images/koi-2.webp',
      shortDescription: 'A galaxy koi betta with spotted Japanese koi-inspired patterns.',
      fullDescription:
        'Koi Galaxy Halfmoon Prakat Betta Fish (HMPK) is a stunning exotic species that originates from Thailand. Our breeder has specially bred this fish with unique color genes that create the same erratically spotted patterns as Japanese koi fish. Its ornate Japanese fan-style fins and striking multi-colored appearance make it a captivating sight that is sure to catch the eye of any observer. The scattered iridescent scales of the Betta resemble the patterns of koi fish, adding to its allure. Add The Koi Galaxy Halfmoon Prakat Betta Fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Multicolor Galaxy',
      type: 'Koi Betta'
    },
    {
      id: 3,
      name: 'Halfmoon Koi Candy Betta Fish (Male)',
      image: 'images/koi-3.webp',
      shortDescription: 'A candy-style koi betta with bright yellow, red, and blue tones.',
      fullDescription:
        'A stunning exotic species originating from Thailand. Our breeder has specially bred this fish with unique color genes that lend it striking yellow, red and blue hues on its body, reminiscent of a delightful candy treat. This fascinating fish derives its name from its resemblance to a confectionery delight. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Yellow, Red, Blue',
      type: 'Koi Betta'
    },
    {
      id: 4,
      name: 'Crowntail Galaxy Koi Nemo Betta Fish (Male)',
      image: 'images/koi-4.webp',
      shortDescription: 'A crowntail koi betta with galaxy scales and nemo-style coloration.',
      fullDescription:
        'The Crowntail Galaxy Koi Nemo Betta Fish unique feature is its spiky appearance, which is due to the lack of webbing between the rays on its fins. Our breeder has created a one-of-a-kind Crowntail Betta with stunning Japanese koi-like colors and patterns. The scattered iridescent scales on this Betta create the same striking patterns as Japanese koi fish. Add the captivating Crowntail Galaxy Koi Nemo Betta Fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Galaxy Nemo Multicolor',
      type: 'Koi Betta'
    },
    {
      id: 5,
      name: 'Koi Copper Betta Fish (Male)',
      image: 'images/koi-5.webp',
      shortDescription: 'A koi betta with warm copper tones and metallic shine.',
      fullDescription:
        'The giant betta fish is a type of betta fish that is larger than the standard variety. It is believed to have originated in Thailand, where many of the most successful and well-known giant betta breeders are located, and where the majority of giant betta fish sold internationally come from. selectively bred by our breeders to have a sparkly copper color on its body. Add the giant betta fish to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Copper',
      type: 'Koi Betta'
    },
    {
      id: 6,
      name: 'Rare Koi Multicolors Betta Fish (Male)',
      image: 'images/koi-6.webp',
      shortDescription: 'A rare koi betta with bright multicolor candy-like tones.',
      fullDescription:
        'A stunning exotic species originating from Thailand. Our breeder has specially bred this fish with unique color genes that lend it striking multicolors hues on its body, reminiscent of a delightful koi treat. This fascinating fish derives its name from its resemblance to a confectionery delight. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Multicolor',
      type: 'Koi Betta'
    },
    {
      id: 7,
      name: 'Rare Koi Multicolors Betta Fish (Male)',
      image: 'images/koi-7.webp',
      shortDescription: 'A multicolor koi betta with bright ornamental patterning.',
      fullDescription:
        'A stunning exotic species originating from Thailand. Our breeder has specially bred this fish with unique color genes that lend it striking multicolors on its body, reminiscent of a delightful koi treat. This fascinating fish derives its name from its resemblance to a confectionery delight. Buy live rare and premium betta fish for sale to your aquarium today and experience the beauty of this magnificent creature.',
      colorStyle: 'Multicolor',
      type: 'Koi Betta'
    },
    {
      id: 8,
      name: 'RARE White Star Galaxy Koi Plakat Betta Fish (Male)',
      image: 'images/koi-8.webp',
      shortDescription: 'A galaxy plakat koi betta with silver-white star-like spots.',
      fullDescription:
        'Discover our RARE White Star Galaxy Koi Plakat Betta Fish (Male) — a stunning specimen with a deep navy-black body adorned with scattered silver-white star-like spots across its fins and body. Selectively bred by expert breeders in Thailand, this short-finned plakat betta showcases exceptional contrast and rare coloration. Each fish is unique, healthy, and shipped safely. Add this live rare betta fish to your aquarium and experience the elegance of Thailand finest betta breeding.',
      colorStyle: 'White Star Galaxy',
      type: 'Koi Betta'
    },
    {
      id: 9,
      name: 'RARE Blue Star Galaxy Koi Plakat Betta Fish (Male)',
      image: 'images/koi-9.webp',
      shortDescription: 'A rare plakat koi betta with blue and teal galaxy-like spots.',
      fullDescription:
        'Introducing our RARE Blue Star Galaxy Koi Plakat Betta Fish (Male) — a breathtaking specimen featuring a jet-black body covered in brilliant iridescent blue and teal star-like spots, reminiscent of a galaxy sky. This premium quality male plakat betta is hand-selected by expert breeders in Thailand and is known for its short, powerful fins and exceptional color saturation. Each fish is unique, healthy, and ready to become the centerpiece of your aquarium. Buy live rare betta fish from Thailand with confidence — we guarantee safe delivery and top-tier livestock quality.',
      colorStyle: 'Blue Teal Galaxy',
      type: 'Koi Betta'
    }
  ];

  selectFish(fish: KoiFish): void {
    this.selectedFish = fish;
  }
}
