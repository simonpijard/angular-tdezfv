import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  },
    {
      id: 'popularite',
      value: 'popularite',
    },
    ];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Angular', popularite: 20},
      { position: 2, name: 'Polka', popularite: 10 },
      { position: 3, name: 'Menuiserie', popularite: 12},
      { position: 4, name: 'Portrait', popularite: 10 },
      { position: 5, name: 'Calligraphie', popularite: 5 },
      { position: 6, name: 'Mandarin', popularite: 100000000},
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  position: number,
  name: string,
  popularite: number,
}