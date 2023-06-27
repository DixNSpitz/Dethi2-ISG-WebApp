import {Day} from "./Day";

export class Plant {
  id: number | undefined;
  name: string | undefined;
  days: Day[] | undefined;
  temperature_min: number | undefined;
  temperature_max: number | undefined;
  light_min: number | undefined;
  light_max: number | undefined;
  water_min: number | undefined;
  water_max: number | undefined;

  public calculateDayMood(day: Day): string {
    let badCount = 0;

    if(day.light_value! < this.light_min! || day.light_value! > this.light_max!) badCount++;
    if(day.temperature_value! < this.temperature_min! || day.temperature_value! > this.temperature_max!) badCount++;
    if(day.water_value! < this.water_min! || day.water_value! > this.water_max!) badCount++;

    if(badCount === 0) return 'positive';
    else if(badCount === 1) return 'neutral';
    else return 'sad';
  }
}
