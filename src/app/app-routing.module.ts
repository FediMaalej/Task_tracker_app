import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./app.routes";

const route: Routes = routes;

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
