import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Electronics',
    children: [
      { name: 'mobiles' },
      { name: 'Home Appliance' },
      { name: 'printer' },
      { name: 'laptop' },
      { name: 'TV' },
      { name: 'Game Console' },
      { name: 'Smart watch' },
    ],
  },
  {
    name: 'Food and Grocery',
    children: [
      {
        name: 'Vegetables',
      },
      {
        name: 'fruits',
      },
    ],
  },
  {
    name: 'Clothings And Apparels',
    children: [
      {
        name: 'Vegetables',
      },
      {
        name: 'fruits',
      },
    ],
  },
  {
    name: 'Home and Lifestyle',
    children: [
      {
        name: 'Vegetables',
      },
      {
        name: 'fruits',
      },
    ],
  },
  {
    name: 'Drinks & beverages',
    children: [
      {
        name: 'Vegetables',
      },
      {
        name: 'fruits',
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  showFiller = true;

  @Input('drawer') drawer: any;
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {}
  private sidebarVisible = new BehaviorSubject<boolean>(true);
  sidebarVisible$ = this.sidebarVisible.asObservable();
  toggle() {
    this.drawer.toggle();
    this.showFiller = false;
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
