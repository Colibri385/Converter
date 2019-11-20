"use strict"

const url = "http://data.fixer.io/api/latest?access_key=a80eb4b78bbd1a9de41ee1a66f7b55b2&base=EUR&symbols=EUR,USD,KHR"


function recuperervaleur () {
    $.ajax({
        url,
        type: "GET",
        success : function (res, status, req) {
                   
                    console.log(res);
                    

            var  rates = res.rates
            ,    amount = document.getElementById("fromAmount").value
            ,    from = document.getElementById("from").value
            ,    to = document.getElementById("to").value

           var result  = amount * rates[to] / rates[from]
           document.getElementById("toAmount").value = result
        
        }




})
};


