import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allItems:any[], searchTerm:string, propertyName:string): any[] {
    const result:any=[]

    if(!allItems || searchTerm =="" || propertyName==""){
      return allItems
    }
    allItems.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)
      }
    })


    return result;
  }

}
