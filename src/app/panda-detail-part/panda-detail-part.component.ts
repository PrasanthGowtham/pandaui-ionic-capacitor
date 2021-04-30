import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panda-detail-part',
  templateUrl: './panda-detail-part.component.html',
  styleUrls: ['./panda-detail-part.component.scss'],
})
export class PandaDetailPartComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  nextpage() {
    this.route.navigate(['/priceData']);
  }

}
