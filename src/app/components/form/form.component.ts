import { Component, Output, EventEmitter } from '@angular/core';
import { ComponentServiceService } from '../../service/component-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  text = '';
  numRender = 0;
  parrafo = '';

  @Output() eventoHijo = new EventEmitter();

  constructor(private componentService: ComponentServiceService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    // Handle form submission logic here
  }



  onClick(text: string) {
    this.componentService.setList(text);

    this.eventoHijo.emit();
  }
  


    

    

}
