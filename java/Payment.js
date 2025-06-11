
import java.util.*;
class Payment {
    void payAmount() {
        
        System.out.println("Payment Done\n");
    }
}


class CreditCardPayment extends Payment {
 
    void payAmount() {
        
        System.out.println("Payment through Credit Card\n");
    }
}


class UPIPayment extends Payment {
    
    void payAmount() {
        
        System.out.println("Payment through UPI.\n");
    }
}

class CashPayment extends Payment {

    void payAmount() {
        System.out.println("Payment through Cash.\n");
    }
}


public class Main {
    public static void main(String[] args) {
        Payment payment;

        payment = new CreditCardPayment();
        payment.payAmount(); 

        payment = new UPIPayment();
        payment.payAmount();  

        payment = new CashPayment();
        payment.payAmount(); }
}
