
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,litecoin,polkadot,stellar,chainlink,bitcoin-cash,dogecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const currencies = ['bitcoin', 'ethereum', 'ripple', 'cardano', 'litecoin', 'polkadot', 'stellar', 'chainlink', 'bitcoin-cash'];
        let content = '<div class="row">';
        currencies.forEach(currency => {
            content += `
                <div class="col-md-4">
                    <div class="crypto-card p-3 mb-3">
                        <h5 class="currency-title">${currency.charAt(0).toUpperCase() + currency.slice(1)}</h5>
                        <p class="currency-price">${data[currency].usd} USD</p>
                    </div>
                </div>`;
        });
        content += '</div>';
        document.getElementById('cryptoInfo').innerHTML = content;
    });




    
    


