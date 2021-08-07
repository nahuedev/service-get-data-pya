require('dotenv').config();

const latitud = process.env.LATITUD;
const longitud = process.env.LONGITUD;
const resultadosMaximosATraer = process.env.RESULTADOS_MAXIMOS;
const APartirDeCualTraer = process.env.A_PARTIR_DE_CUAL_TRAER;


module.exports = {
    apiPedidoYa:{
        url:process.env.PEDIDO_YA_URL || `https://www.pedidosya.com.uy/mobile/v5/shopList?businessType=RESTAURANT&country=1&includePaymentMethods=VisaNet%2COCA%2CMastercard%20UY%2CTicket%20Restaurant%20Online%2CTicket%20Alimentaci%C3%B3n%20Online%2CCreditel%20UY%2CSpreedly%20UY&max=${resultadosMaximosATraer}&offset=${APartirDeCualTraer}&point=${latitud}%2C${longitud}&sortBy=default&withFilters=true`,
        headers:process.env.PEDIDO_YA_HEADERS || 
        {
            'authority': 'www.pedidosya.com.uy',
            'method': 'GET',
            'path': '/mobile/v5/shopList?businessType=RESTAURANT&country=1&includePaymentMethods=VisaNet%2COCA%2CMastercard%20UY%2CTicket%20Restaurant%20Online%2CTicket%20Alimentaci%C3%B3n%20Online%2CCreditel%20UY%2CSpreedly%20UY&max=150&offset=0&point=-34.9661224%2C-54.9445817&sortBy=default&withFilters=true',
            'scheme': 'https',
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'cookie': '__Secure-peya.sid=s%3A19ce2071-af93-4efa-9ecc-64e91466b1db.qmafONbFVp3hkAA2KR72%2Busyk%2FYeUoULMeHNHNnDkAM; __Secure-peyas.sid=s%3A3a9d1ab9-a1db-4b45-b9ad-b2130bc65dd4.AZWPzMS3%2F7KJh99y0wvXEFalE9cbIsV1pIW8t0wNeGg',
            'pragma': 'no-cache',
            'referer': 'https://www.pedidosya.com.uy/restaurantes?address=Comodoro%20Gorlero&city=Punta%20del%20Este&lat=-34.9661224&lng=-54.9445817',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
        }
    }
  };
  