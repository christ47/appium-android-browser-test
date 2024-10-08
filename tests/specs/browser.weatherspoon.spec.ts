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
        await MenuPage.clickFirstFoodMenu()
        await MenuPage.clickFirstMenuIcon()
        await MenuPage.chickenWingBitesAndStripsMenuItem()
        await TablePage.enterTableNumberInOrder()
        await TablePage.clickContinueInOrder()
        await MenuPage.addFirstFoodOption()
        await MenuPage.addSecondFoodOption()
        await MenuPage.addItemsToBasket()
        await MenuPage.goToBasket()
        await BasketPage.assetBasketItem('Classic 8oz sirloin steak')
        await BasketPage.assertBasketQuantity('1')
    })
})