import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PlaceOrderService } from '../services/place-order/place-order.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.css']

})
export class CreditCardComponent {

    public creditCardForm: FormGroup;
    response: any = null;

    constructor(
        formBuilder: FormBuilder,
        public placeOrderService: PlaceOrderService
    ) {
        this.creditCardForm = formBuilder.group({
            name: ['', Validators.required],
            number: ['', Validators.required],
            cvc: ['', Validators.required],
            expiry: ['', Validators.required],
        });
    }

    submit(value) {
        console.log(value);
        this.response = this.placeOrderService.placeOrder(value).pipe(
            (res) => res,
            catchError((x) => of(x))
        );
    }
}

