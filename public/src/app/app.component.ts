import { Component, OnInit } from '@angular/core';
import { StoreGoldService } from './store-gold.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    gold: number;
    goldStrings = [];

  locations = [{
    name: "Farm",
    earning: "Earns 2-5 gold",
    minGold: 2,
    maxGold: 5
  },
  {
    name: "Cave",
    earning: "Earns 5-10",
    minGold: 5,
    maxGold: 10
  },
  {
    name: "House",
    earning: "Earns 7-15 gold",
    minGold: 7,
    maxGold: 15,
  },
  {
    name: "Casino",
    earning: "Earn or lose up to 100 gold",
    minGold: 0,
    maxGold: 100
  }]
  
constructor(private _StoregoldService: StoreGoldService){}
  ngOnInit(){
    this.gold = this._StoregoldService.returnGold()
  }

  earnGold(location){
    if(location.name == "Casino"){
      let randomNumber: number = Math.floor((Math.random() * location.maxGold) + location.minGold);
      randomNumber *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      this._StoregoldService.saveGold(randomNumber)
      this.gold = this._StoregoldService.returnGold()
      this.goldStrings.unshift(`You earned ${randomNumber} amount of gold.`)
    }else {
      let randomNumber: number = Math.floor((Math.random() * location.maxGold) + location.minGold);
      this._StoregoldService.saveGold(randomNumber)
      this.gold = this._StoregoldService.returnGold()
      this.goldStrings.unshift(`You earned ${randomNumber} amount of gold.`)
    }

  }

}
