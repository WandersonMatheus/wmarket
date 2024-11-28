import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';
import { FooterComponent } from '../../components/template/footer/footer.component';
import { BannerComponent } from "../../components/template/banner/banner.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
