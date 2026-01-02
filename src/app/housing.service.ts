// C'EST UN SERVICE!

import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housinglocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    // HELPFUL: For this example, the code uses fetch. For more advanced use cases consider using HttpClient provided by Angular.
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    // HELPFUL: For this example, the code uses fetch. For more advanced use cases consider using HttpClient provided by Angular.
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Home application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
