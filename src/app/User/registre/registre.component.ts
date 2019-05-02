import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private service:AuthserviceService) { }

  ngOnInit() {
  }

}
