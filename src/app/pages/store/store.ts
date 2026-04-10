import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.html',
  styleUrls: ['./store.css']
})
export class Store {

  selectedStore: any = null;

  constructor(private sanitizer: DomSanitizer) {}

  stores = [
  {
    id: 1,
    name: 'Aqua World',
    image: 'images/aquaworld.jpg',
    location: 'Manila, Philippines',

    shortDescription:
      'Popular aquarium shop offering betta fish, tanks, filters, and starter kits.',

    description:
      'A popular aquarium shop offering high-quality betta fish, aquarium tanks, filters, and beginner-friendly starter kits. Great for new hobbyists.',

    mapUrlRaw:
      'https://www.google.com/maps?q=Manila,Philippines&output=embed',

    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Manila+Philippines',

    tags: ['Aquarium', 'Fish', 'Supplies']
  },

  {
    id: 2,
    name: 'Betta Haven',
    image: 'images/bettahaven.jpg',
    location: 'Cebu City, Philippines',

    shortDescription:
      'Specializes in rare betta fish varieties and aquatic plants.',

    description:
      'Specializes in rare betta fish varieties including koi, halfmoon, and wild types. Also offers live aquatic plants and aquascaping supplies.',

    mapUrlRaw:
      'https://www.google.com/maps?q=Cebu+City,Philippines&output=embed',

    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Cebu+City+Philippines',

    tags: ['Betta Fish', 'Plants', 'Rare Types']
  },

  {
    id: 3,
    name: 'Blue Life Hub',
    image: 'images/bluelife.jpg',
    location: 'Davao City, Philippines',

    shortDescription:
      'Aquarium equipment, filters, heaters, and water treatment solutions.',

    description:
      'Complete aquarium equipment store offering filters, heaters, water conditioners, and full tank setup solutions for fish keepers.',

    mapUrlRaw:
      'https://www.google.com/maps?q=Davao+City,Philippines&output=embed',

    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Davao+City+Philippines',

    tags: ['Equipment', 'Water Care', 'Accessories']
  }
];
  selectStore(store: any) {
    this.selectedStore = {
      ...store,
      safeMapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(store.mapUrlRaw)
    };
  }

  clearSelectedStore() {
    this.selectedStore = null;
  }

  // =========================
  // OPEN GOOGLE MAPS (APP OR BROWSER)
  // =========================
  openGoogleMaps() {
    if (!this.selectedStore) return;
    window.open(this.selectedStore.googleMapsUrl, '_blank');
  }

  // =========================
  // FULL SCREEN MAP
  // =========================
  openFullscreenMap() {
    if (!this.selectedStore) return;

    const url = this.selectedStore.mapUrlRaw.replace('&output=embed', '');
    window.open(url, '_blank');
  }
}
