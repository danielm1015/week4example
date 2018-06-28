import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeoplePage } from '../people/people';
import { Contact } from '../../data/data.interface';
import data from '../../data/data';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage implements OnInit {
  contactCollection: {category: string, contacts: Contact[], icon: string};
  peoplePage = PeoplePage;
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.contactCollection = data;
  }
  
}