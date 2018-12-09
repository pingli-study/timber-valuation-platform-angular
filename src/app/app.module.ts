import { AuthService } from './core/auth.service';
import { PriceListService } from './price-list.service';
import { PriceListFormService } from './price-list-form.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { LoginModule } from "./login/login.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceListFormComponent } from './price-list/price-list-form/price-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        UserProfileComponent,
        PriceListComponent,
        PriceListFormComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        CoreModule,
        ExamplesModule,
        LoginModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'timber-eveluation-platform'), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
        ReactiveFormsModule

    ],
    providers: [
        AuthService,
        AuthGuard,
        PriceListService,
        PriceListFormService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
