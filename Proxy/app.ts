import { PaymentProxy } from "./src/payment-proxy";

const paymentProxy = new PaymentProxy();

console.log(paymentProxy.pay(true))
console.log(paymentProxy.pay(false))