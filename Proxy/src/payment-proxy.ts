import { Payments } from "./external-payments";

export class PaymentProxy{

    private paymentService = new Payments();

    pay(isUserAuthenticated){
        if(isUserAuthenticated){
            return this.paymentService.pay()
        }else{
            return 'user not authenticated'
        }
    }
}