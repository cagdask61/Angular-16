import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StateService } from "src/app/services/state.service";


@Component({
    standalone: true,
    imports: [
        RouterOutlet
    ],
    selector: 'app-signals',
    template: `
        <h4 class="text-center mt-2 mb-2" >
            <span style="background-color: #303030;" class="pt-1 pb-1 pl-1 pr-1 rounded">
              State :  <span class="text-bold">{{stateService.getName()}}</span>
            </span>
        </h4>
        <router-outlet></router-outlet>
    `
})
export default class SignalsComponent {

    readonly stateService: StateService = inject(StateService);
}