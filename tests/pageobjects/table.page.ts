class TablePage {

    async enterTableNumber(tableNumber: string) {
        await $('xpath://*[@id="ion-input-0"]').setValue('56')
    }

    async clickContinue(){
        await $("xpath://ion-footer/ion-button[2]").click();
    }
    
    async launch(){
        await browser.url('https://order.jdwetherspoon.com/venue/pubs/95/tables')
    }
    async enterTableNumberInOrder(){
        const els1 = await driver.$$("xpath://*[@id=\"ion-input-1\"]");
        await els1[0].addValue("56");
        const el3 = await driver.$("xpath://ion-footer/ion-button[1]"); 
        await el3.click();
    }
}

export default new TablePage();