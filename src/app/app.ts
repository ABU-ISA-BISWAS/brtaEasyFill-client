import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('brtaEasyFill-client');
}

// @Component({
//   selector: 'app-root',
//   template: `<router-outlet></router-outlet>`
// })
// export class AppComponent {}
