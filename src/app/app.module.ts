import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SidebarModule, TreeViewModule} from "@syncfusion/ej2-angular-navigations";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {ComboBoxModule, DropDownListModule, MultiSelectModule} from "@syncfusion/ej2-angular-dropdowns";
import {ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule} from "@syncfusion/ej2-angular-buttons";
import {MaskedTextBoxModule, TextBoxModule} from "@syncfusion/ej2-angular-inputs";
import {DatePickerModule, TimePickerModule} from "@syncfusion/ej2-angular-calendars";
import { AppRoutingModule } from './app-routing.module';
import {CalendarComponent} from "./CoursesSpace/calendar/calendar.component";
import {ToastModule} from "@syncfusion/ej2-angular-notifications";
import {ListFomateurComponent} from "./CoursesSpace/list-fomateur/list-fomateur.component";
import {AddFomateurComponent} from "./CoursesSpace/add-fomateur/add-fomateur.component";
import {FormationComponent} from "./CoursesSpace/formation/formation.component";
import {ListeFormationComponent} from "./CoursesSpace/liste-formation/liste-formation.component";
import {QuizComponent} from "./CoursesSpace/quiz/quiz.component";
import {CoursesFormComponent} from "./CoursesSpace/courses-form/courses-form.component";
import {HomeComponent} from "./BackEnd/home/home.component";
import {FooterComponent} from "./BackEnd/footer/footer.component";
import {CartComponent} from "./CoursesSpace/cart/cart.component";
import {NavbarComponent} from "./BackEnd/navbar/navbar.component";
import {LayoutComponent} from "./BackEnd/layout/layout.component";
import {SidbarComponent} from "./BackEnd/sidbar/sidbar.component";
import {WelcomeComponent} from "./CoursesSpace/welcome/welcome.component";
import {QuestionComponent} from "./CoursesSpace/question/question.component";
import {AddEditFormerComponent} from "./CoursesSpace/add-edit-former/add-edit-former.component";
import {CalendarCoursesComponent} from "./CoursesSpace/calendar-courses/calendar-courses.component";
import {VideoplaylistComponent} from "./CoursesSpace/videoplaylist/videoplaylist.component";
import {MapComponent} from "./CoursesSpace/map/map.component";
import {DashboardComponent} from "./BackEnd/dashboard/dashboard.component";
import {LoginComponent} from "./BackEnd/login/login.component";
import {RoutComponent} from "./CoursesSpace/chat/rout/rout.component";
import {RegisterComponent} from "./BackEnd/register/register.component";
import {NavbarFComponent} from "./FontEnd/navbar-f/navbar-f.component";
import {HomeFComponent} from "./FontEnd/home-f/home-f.component";
import {FooterFComponent} from "./FontEnd/footer-f/footer-f.component";
import {BlogFormationComponent} from "./CoursesSpace/blog-formation/blog-formation.component";
import {LayoutFComponent} from "./FontEnd/layout-f/layout-f.component";
import {PortfelioFormDetailsComponent} from "./CoursesSpace/portfelio-form-details/portfelio-form-details.component";
import {BlogDetailsComponent} from "./CoursesSpace/blog-details/blog-details.component";
import {PortfelioFormComponent} from "./CoursesSpace/portfelio-form/portfelio-form.component";
import {UserViewComponent} from "./CoursesSpace/user-view/user-view.component";
import {VerificationAcountComponent} from "./CoursesSpace/verification-acount/verification-acount.component";
import {UserListComponent} from "./CoursesSpace/user-list/user-list.component";
import {UsersComponent} from "./CoursesSpace/chatClent/users/users.component";
import {ChatComponent} from "./CoursesSpace/chatClient/chat/chat.component";
import {TeamComponent} from "./CoursesSpace/team/team.component";
import {E404Component} from "./FontEnd/e404/e404.component";
import {QestionQuizCoursesComponent} from "./CoursesSpace/qestion-quiz-courses/qestion-quiz-courses.component";
import {CalendarFrontComponent} from "./CoursesSpace/calendar-front/calendar-front.component";
import {MyCoursesComponent} from "./CoursesSpace/my-courses/my-courses.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {HttpClientModule} from "@angular/common/http";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxPaginationModule} from "ngx-pagination";
import {GoogleLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {ChangeBgDirective} from "./change-bg.directive";
import {GoogleChartsModule} from "angular-google-charts";
import {RecurrenceEditorModule, ScheduleAllModule, ScheduleModule} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ListFomateurComponent,
    AddFomateurComponent,
    ChangeBgDirective,
    FormationComponent,
    ListeFormationComponent,
    QuizComponent,
    CoursesFormComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    NavbarComponent,
    LayoutComponent,
    SidbarComponent,
    WelcomeComponent,
    QuestionComponent,
    AddEditFormerComponent,
    CalendarCoursesComponent,
    VideoplaylistComponent,
    MapComponent,
    DashboardComponent,
    LoginComponent,
    RoutComponent,
    RegisterComponent,
    HomeFComponent,
    BlogFormationComponent,
    NavbarFComponent,
    FooterFComponent,
    LayoutFComponent,
    BlogDetailsComponent,
    PortfelioFormComponent,
    PortfelioFormDetailsComponent,
    UserViewComponent,
    MyCoursesComponent,
    CalendarFrontComponent,
    QestionQuizCoursesComponent,
    E404Component,
    TeamComponent,
    ChatComponent,
    UsersComponent,
    UserListComponent,
    VerificationAcountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    GoogleChartsModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    SidebarModule,
    TreeViewModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgxQRCodeModule,
    HttpClientModule,
    VgOverlayPlayModule,
    NgxPaginationModule,
    VgBufferingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ScheduleAllModule,
    RecurrenceEditorModule,
    ScheduleModule,
    DialogModule,
    ComboBoxModule,
    DropDownListModule,
    MultiSelectModule,
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
    MaskedTextBoxModule,
    TextBoxModule,
    DatePickerModule,
    TimePickerModule,
    ToastModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '340122199327-o9gdlce1uan9k434s0rf5lr75oi5ccb0.apps.googleusercontent.com' // add web app client id
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
