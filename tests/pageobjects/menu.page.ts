class MenuPage {

    async clickMenuIcon(){
        await $("xpath://ion-list/ion-item[1]/ion-card/ion-img").click()
    }
    async chickenWingBitesAndStripsMenuItem() {
        await $("xpath://ion-list/ion-item[2]").click();
    }

    async addSecondChickenWingSauce() {
        await $("xpath://ion-radio-group/ion-item[2]/ion-radio/div").click();
    }

    async addItemsToBasket(){
        await $("xpath://ion-footer/div[2]/div/ion-button[1]").click();
    }

    async  goToBasket(){ 
        await $("xpath://ion-footer/div/ion-icon").click();
    }

    async clickFoodMenu(){
        $('xpath://*[@id="root"]/ion-app/div[1]/ion-tabs/ion-router-outlet/div/ion-footer/ion-button[1]//button').click()

    }

}

export default new MenuPage()