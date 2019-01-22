import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreGoldService {
  gold: number = 0;
  constructor() { }

  savedGold: number = 0;

  returnGold() {
    return this.gold
  }

  saveGold(gold){
    this.gold += gold;
  }
}
