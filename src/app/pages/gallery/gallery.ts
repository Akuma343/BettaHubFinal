import { Component } from '@angular/core';

type GalleryItem = {
  src: string;
  title: string;
  alt: string;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedItem: GalleryItem | null = null;

  galleryItems: GalleryItem[] = [];

  constructor() {
    const items: GalleryItem[] = [
      ...this.makeItems('alien', 9, 'Alien Betta'),
      ...this.makeItems('avatar', 9, 'Avatar Betta'),
      ...this.makeItems('crowntail', 9, 'Crowntail Betta'),
      ...this.makeItems('dragon', 9, 'Dragon Betta'),
      ...this.makeItems('dumbo', 9, 'Dumbo Betta'),
      ...this.makeItems('giant', 9, 'Giant Betta'),
      ...this.makeItems('halfmoon', 9, 'Halfmoon Betta'),
      ...this.makeItems('koi', 9, 'Koi Betta'),
      ...this.makeItems('plakat', 9, 'Plakat Betta'),
      ...this.makeItems('samurai', 2, 'Samurai Betta'),
      ...this.makeItems('veiltail', 6, 'Veiltail Betta'),
      ...this.makeItems('wild', 9, 'Wild Betta')
    ];

    this.galleryItems = this.shuffle(items);
  }

  openPreview(item: GalleryItem): void {
    this.selectedItem = item;
  }

  private makeItems(prefix: string, count: number, label: string): GalleryItem[] {
    const items: GalleryItem[] = [];

    for (let i = 1; i <= count; i++) {
      items.push({
        src: `/images/${prefix}-${i}.webp`,
        title: `${label} ${i}`,
        alt: `${label} image ${i}`
      });
    }

    return items;
  }

  private shuffle(items: GalleryItem[]): GalleryItem[] {
    const array = [...items];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
}
