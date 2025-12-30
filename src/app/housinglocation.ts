// CET INTERFACE DEVRAIT ÊTRE DANS UN DOSSIER NOMMÉ "Models"

export interface HousingLocationInfo  {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}
