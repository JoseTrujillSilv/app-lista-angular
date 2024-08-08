import { Component, ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ComponentServiceService } from '../../service/component-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  id:number;
  mensaje: string;

  @ViewChild('tbody')tbody!:ElementRef;

  constructor(private componentService: ComponentServiceService,private renderer2:Renderer2) {
    this.mensaje='';
    this.id=0;
  }
  parrafoFuction(){
    console.log(this.componentService.getList())
  }  

  recibirEvento() {
    this.id++;
    const tr = this.renderer2.createElement('tr');
    const td1 = this.renderer2.createElement('td');
    const td2 = this.renderer2.createElement('td');
    const id = this.renderer2.createText(this.id.toString());
    const text = this.renderer2.createText(this.componentService.getList());
    this.renderer2.appendChild(td1,id);
    this.renderer2.appendChild(td2,text);
    this.renderer2.appendChild(tr,td1);
    this.renderer2.appendChild(tr,td2);

  // Append h1 to tbody
  this.renderer2.appendChild(this.tbody.nativeElement, tr);
  }
}

