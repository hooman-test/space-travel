import {Direction} from './Direction';
import {LifeForm} from './LifeForm';

export class Shuttle {
  id: number;
  direction?: Direction;
  currentCapacity?: number;
  currentWeight?: number;
  currentPlanet?: string;
  nextDestination: string;
  passengers: Array<LifeForm>;

  constructor(response) {
    this.id = response.id;
    if (response.direction && response.direction === 'COME_NEAR') {
      this.direction = Direction.Near;
    } else {
      this.direction = Direction.Far;
    }
    this.currentCapacity = response.currentCapacity;
    this.currentWeight = response.currentWeight;
    this.currentPlanet = response.currentPlanet;
    this.nextDestination = response.nextDestination;
    this.passengers = response.passengers;
  }
}
