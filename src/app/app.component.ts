import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ClimbAway';
  user : any ;
  isLogged: boolean = false;
  constructor(private router: Router, private sharedService: SharedService, private refresh:ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.user.url_photo = '';
    // this.user.first_name = '';
    // this.user.last_name = '';
     setInterval(() => {
      if(this.sharedService.getAddUsuario()){
        this.isLogged = true;
        this.getUser();
       }else{
          this.isLogged = false;
       }
      this.refresh.detectChanges();
    }, 1000);
   
  }

  logout(){
    localStorage.removeItem('addUsuario');
    this.router.navigate(['']);
  }

  getUser(){
    this.user=this.sharedService.getAddUsuario();
    //alert(this.user.url_photo);
  }
  nextPage(rute: String){
    this.router.navigate([rute]);
  }
}
