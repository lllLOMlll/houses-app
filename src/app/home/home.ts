import { Component, inject   } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { HousingService } from "../housing";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">     
      <!-- @for (housingLocation of housingLocationList; track $index) { -->
      <!-- ON PEUT UTILISER $index, $count, $first, $last, $odd et $even, mais s'il y a un identifiant unique, mieux vaut l'utiliser -->
      <!-- UTILISER $index pour les listes statiques -->
       @for (housingLocation of housingLocationList; track housingLocation.id) {
      <app-housing-location [housingLocation]="housingLocation" />
      }      
    </section>
  `,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
