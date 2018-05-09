import { Component } from '@angular/core';
import { MenuItem } from '../menuItem';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Schaeffler Digital Board';
model = 2;

menuItems: MenuItem[] = [
    {label : "Automotive", link : "Hello", children: [
        {label : "Second Item", link : "Hello"},
        {label : "Third Item", link : "Hello"}
    ]},
    {label : "Industrial", link: "none", children: [
         {label : "Second Item", link : "Hello"},
        {label : "Third Item", link : "Hello"}
     ]
    },
];
}
