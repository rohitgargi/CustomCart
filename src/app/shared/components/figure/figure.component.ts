import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app-figure',
    templateUrl:'./figure.component.html',
    styleUrls:['./figure.component.scss'],
    encapsulation: ViewEncapsulation.None
    
})


export class FigureComponent{
    @Input('url') url:string;
    @Input('class') class :string;
    @Input('alt') alt :string;
    @Input('dynamicClass') dynamicClass: string;
}