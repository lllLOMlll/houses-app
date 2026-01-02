import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- @for (housingLocation of housingLocationList; track $index) { -->
      <!-- ON PEUT UTILISER $index, $count, $first, $last, $odd et $even, mais s'il y a un identifiant unique, mieux vaut l'utiliser -->
      <!-- UTILISER $index pour les listes statiques -->
      <!--@for (housingLocation of housingLocationList; track housingLocation.id) { -->
      @for (housingLocation of filteredLocationList; track $index) {
      <app-housing-location [housingLocation]="housingLocation" />
      }
    </section>
  `,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
