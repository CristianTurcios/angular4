import { Injectable } from '@angular/core';

@Injectable()
export class ClothesService {
  public clothe:string = 'Jeans';
  public clothingCollection:Array<string> = ['with pants', 'red T-shirt'];
  constructor() { }

  nameClothes(nameClothes:string){
    return nameClothes;
  }

  nameClothes2():string{
    return this.clothe;
  }

  addClothes(nameClothes:string):Array<string>{
    this.clothingCollection.push(nameClothes);
    return this.getClothes();
  }

  getClothes():Array<string>{
    return this.clothingCollection;
  }

  deleteClothe(index:number){
    this.clothingCollection.splice(index, 1);
    return this.getClothes();
  }
}
