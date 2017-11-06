import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService) { }
  checked = new FormControl(this.service.authorized);
  
  ngOnInit() {
    this.checked.valueChanges.subscribe(
      authorized => this.service.authorized = authorized
    );
  }

}
