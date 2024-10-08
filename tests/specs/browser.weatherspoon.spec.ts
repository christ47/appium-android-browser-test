import WelcomePage from '../pageobjects/welcome.page.js'
import TablePage from '../pageobjects/table.page.js'
import BasketPage from '../pageobjects/basket.page.js'

import MenuPage from '../pageobjects/menu.page.js'

describe('Weatherspoon Website test', ()=>{
    it('should Add an order to the basket', async()=>{
        await WelcomePage.launch()
        await WelcomePage.clickTermsAndConditions()
        await WelcomePage.clickPrivacyPolicy()
        await WelcomePage.clickProceed()
        await TablePage.enterTableNumber('56')   
        await TablePage.clickContinue()
        await MenuPage.clickFoodMenu()
        await MenuPage.clickMenuIcon()
        await MenuPage.chickenWingBitesAndStripsMenuItem()
        await TablePage.enterTableNumberInOrder()
        await TablePage.clickContinueInOrder()
        await MenuPage.addSecondChickenWingSauce()
        await MenuPage.addItemsToBasket()
        await MenuPage.goToBasket()
        await BasketPage.assetBasketItem()
        await BasketPage.assertBasketQuantity('1')
    })

})