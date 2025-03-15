import React, { useEffect, useState } from 'react';

// Custom hook jo currency data ko fetch karta hai
function useCurrencyInfo(currency) {
    // State variable jo API se fetched data ko store karega
    const [data, setData] = useState({});

    // useEffect hook jo currency change hone par API ko call karega
    useEffect(() => {
        // API se data fetch kar rahe hain
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json()) // Response ko JSON me convert karte hain
            .then((data) => setData(data.rates)) // Sirf 'rates' ko store karte hain
            .catch((error) => console.error('Error fetching data:', error)); // Error handling
    }, [currency]); // Dependency array me 'currency' hai, taaki currency change hone par data update ho

    // Console me data ko check karne ke liye
    console.log(data);

    // Data ko return karte hain taaki baaki components use kar sakein
    return data;
}

export default useCurrencyInfo;
