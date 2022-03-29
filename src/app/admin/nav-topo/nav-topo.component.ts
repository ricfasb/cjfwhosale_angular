import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-topo',
  templateUrl: './nav-topo.component.html',
  styleUrls: ['./nav-topo.component.scss']
})
export class NavTopoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  orders() {
    this.router.navigate(['/admin/orders']);
  }

  newOrder() {
    this.router.navigate(['/admin/new-order']);
  }

}
