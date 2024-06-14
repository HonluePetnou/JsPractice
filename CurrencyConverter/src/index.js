const codeapi = "da730a09937c7ffe71919a83";
let fullapi = `https://v6.exchangerate-api.com/v6/${codeapi}/latest/USD`;
const codesDevises = [
  'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
  'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL',
  'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY',
  'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP',
  'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK', 'GBP', 'GEL', 'GGP', 'GHS',
  'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF',
  'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD',
  'JPY', 'KES', 'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT',
  'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD',
  'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN',
  'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK',
  'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR',
  'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SOS', 'SRD', 'SSP',
  'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD',
  'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND',
  'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW',
  'ZWL'
];

const fromCurrency = document.querySelector("#section1");
const toCurrency = document.querySelector("#section2");

for (const devise of codesDevises) {
  const option = document.createElement('option');
  option.value = devise;
  option.text = devise;
  fromCurrency.add(option);
}

for (const devise of codesDevises) {
  const option = document.createElement('option');
  option.value = devise;
  option.text = devise;
  toCurrency.add(option);
}

fromCurrency.value = "USD";
toCurrency.value = "EUR";

let convertCurrency = () => {
    let input = document.querySelector("#phone").value;
    const fromv = fromCurrency.value;
    const tov = toCurrency.value;
    let results = document.querySelector("#results")

    if (input.length != 0) {
    console.log(input)
    fetch(fullapi)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromv];
        let toExchangeRate = data.conversion_rates[tov];
        const convertedAmount = (input / fromExchangeRate) * toExchangeRate;
        results.innerHTML=`${input} ${fromv} = ${convertedAmount} ${tov}`
      });
    }else{
        alert("fill the form")
    }

};
document
  .querySelector("#submit")
  .addEventListener("click", convertCurrency)
window.addEventListener("load", convertCurrency)