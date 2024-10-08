class MenuPage {

    async clickFirstMealInMenu() {
        await $('xpath://*[@id="root"]/ion-app/div[1]/ion-tabs/ion-router-outlet/div/ion-content/ion-item-group[1]/ion-list/ion-item[2]/div[1]/div[1]/div/h4').click()
    }
    async firstFoodOption() {
        await $("xpath://ion-list/ion-item[2]").click();
    }

    async selectNoDrinkWithSteak() {
        await $("xpath://ion-radio[@value=\"noDrink\"]").click();
    }

    async addFirstFoodOption() {
        await $("xpath://ion-radio-group/ion-item[2]/ion-radio/div").click();
    }

    async addSecondFoodOption(){
        await $("xpath://ion-content/ion-radio-group[2]/ion-item[1]/ion-radio/div").click();
    }

    async addItemsToBasket() {
        await $("xpath://ion-footer/div[2]/div/ion-button[1]").click();
    }

    async goToBasket() {
        await $("xpath://ion-footer/div/ion-icon").click();
    }

    async clickFirstFoodMenu() {
        $("xpath://ion-list/ion-item[2]/ion-card").click()
    }
}

export default new MenuPage()