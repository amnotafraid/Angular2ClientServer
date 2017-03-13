import { 
         ChangeDetectionStrategy,
         Component,
         EventEmitter,
         Input,
         OnInit,
         Output
        } from '@angular/core';

@Component({
  selector: 'party-stats',
  templateUrl: './party-stats.component.html',
  styleUrls: ['./party-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent implements OnInit {

  @Input() invited;
  @Input() attending;
  @Input() guests;

  constructor() { }

  ngOnInit() {
  }

}
