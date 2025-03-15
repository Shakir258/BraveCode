import React, { useId } from 'react';

// InputBox component jo ek currency input aur dropdown show karta hai
function InputBox({
    label,                 // Label jo input ke upar show hoga
    amount,                // Amount jo input field me dikhana hai
    onAmountChange,        // Function jo amount change hone par call hoga
    onCurrencyChange,      // Function jo currency change hone par call hoga
    currencyOptions = [],  // Available currency options array
    selectCurrency = "usd",// Default selected currency
    amountDisable = false, // Agar true hoga to amount input disable hoga
    currencyDisable = false,// Agar true hoga to currency dropdown disable hoga
    className = "",        // Extra CSS classes jo customize karne ke liye use hongi
}) {
    const amountInputId = useId(); // Unique ID generate karne ke liye useId() hook use kar rahe hain

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount input field */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // Agar true hoga to disable rahega
                    value={amount} 
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>

            {/* Currency selection dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} 
                    onChange={(event) => onCurrencyChange && onCurrencyChange(event.target.value)}
                    disabled={currencyDisable} // Agar true hoga to dropdown disable rahega
                >
                    {/* Currency options map kar rahe hain */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
