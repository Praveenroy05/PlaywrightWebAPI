const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "praveentest@gmail.com",
    password : "Testing@123",
    productName:"ADIDAS ORIGINAL"
    }

}

)




