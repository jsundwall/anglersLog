export class Settings
{
    constructor()
    {
      this.angler_name = true;
      this.datetime = true;
      this.fishing_method = true;
      this.breed = true;
      this.length = true;
      this.weight = false;
      this.weather = false;
      this.location = false;
      this.latitude = true;
      this.longitude = true;
    }

    angler_name: boolean;
    datetime: boolean;
    fishing_method: boolean;
    breed: boolean;
    length: boolean;
    weight: boolean;
    weather: boolean;
    location: boolean;
    latitude: boolean;
    longitude: boolean;

}
