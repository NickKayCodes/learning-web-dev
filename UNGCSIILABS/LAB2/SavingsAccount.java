public class SavingsAccount extends BankAccount {
    private double rate = 2.5; // annual interest rate
    private int savingsNumber = 0;
    private String accountNumber;

    // constructor
    public SavingsAccount(String name, double amount, double rate) {
        super(name, amount);
        accountNumber = getAccountNumber() + "-" + savingsNumber;
        setAccountNumber(accountNumber);
        savingsNumber++;
    }

    public SavingsAccount(SavingsAccount oldAccount, int amount) {
        super(oldAccount, amount);
        savingsNumber++;
    }

    // postInterest method; becomes void since nothing is returned
    public void postInterest() {
        // calculates interest rate per month
        double intrestRate = (rate / 100) / 12;
        // multiples balance by interest rate and applies to current ballence
        setBalance((getBalance() * intrestRate) + getBalance());
    }

    // method overides getAccountNumber from BankAccount
    public String getAccountNumber() {
        accountNumber = super.getAccountNumber(); //+ "-" + savingsNumber;
        savingsNumber++;
        return accountNumber;
    }

}