import { Component, OnInit } from "@angular/core";
import { Observable} from "rxjs/Rx";


@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	public userInput: string = "";
	
	public waitForMe: Observable<boolean>;

	public previousAnswers: string[];

	public ngOnInit(): void {
		this.waitForMe = Observable.timer(5000).map(() => true);
		console.log(this.ngOnInit, this.waitForMe);
		this.previousAnswers = [];
	}

	addToPrevious(answer: string): void {
		this.previousAnswers.push(answer);
	}

}
