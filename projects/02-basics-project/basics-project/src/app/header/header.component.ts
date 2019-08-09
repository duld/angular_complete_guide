import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageServece } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() appSelect: EventEmitter<string> = new EventEmitter();

  constructor(private dataStorageService: DataStorageServece) { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.appSelect.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();

  }
}
