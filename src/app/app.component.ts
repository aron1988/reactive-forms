import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pb:FormBuilder){}
  registrationForm = this.pb.group({
    username:[''],
    password:[''],
    confirmPassword:[''],
    adrress : this.pb.group({
      city:[''],
      state:[''],
      postalCode:['']

    }
      
    )


  })



//   registrationForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//     confirmPassword: new FormControl(''),
//     adrress : new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl('')
//   })
// })
loadApiData(){
  return this.registrationForm.patchValue({
    username:'aron',
    password:'8888',
    confirmPassword:'9999'

  })
}
}