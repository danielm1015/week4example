import { Component } from '@angular/core';
import { ContactPage } from "../contact/contact";
import { VipPage } from '../vip/vip';

@Component({
    selector: "page-tabs",
    template: `
        <ion-tabs>
            <ion-tab [root]="contactPage" tabTitle="Contacts" tabIcon="contact"></ion-tab>
            <ion-tab [root]="vipPage" tabTitle="VIP" tabIcon="star"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage{
    contactPage = ContactPage;
    vipPage = VipPage;
}
