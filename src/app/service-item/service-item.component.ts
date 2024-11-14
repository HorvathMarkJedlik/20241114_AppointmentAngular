import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css',
})
export class ServiceItemComponent {
  @Input() itemss!: Service;
  @Output() selectionChanged = new EventEmitter<void>();

}
