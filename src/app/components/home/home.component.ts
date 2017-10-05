import { Component } from '@angular/core';
import { ClothesService} from '../../services/clothes.Service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [ClothesService]
})

export class HomeComponent{
  public title:string = 'Pagina principal';
  public listClothes:Array<string>;
  public clothe:string;
  constructor(private _ClothesService: ClothesService){}

  ngOnInit(){
    // console.log(this._ClothesService.nameClothes('T-shirt'));
    // console.log(this._ClothesService.nameClothes2());
    this.listClothes = this._ClothesService.getClothes();
  }

  addClothes(){
    this._ClothesService.addClothes(this.clothe);
    this.clothe = '';
  }

  deleteClothe(index:number){
    this._ClothesService.deleteClothe(index);
  }
}
