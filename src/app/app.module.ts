import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    HomeComponent,
    BudgetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    BsDatepickerModule,
    ProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
