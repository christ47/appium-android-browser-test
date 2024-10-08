class WelcomePage {
    get proceedButton(){return $('button=Proceed')}
    //Methods
    async clickTermsAndConditions(){
        await $('xpath://ion-row/ion-col[1]/div/ion-item[1]/ion-checkbox').click({x: 30})
    }

    async clickPrivacyPolicy(){
        await $('xpath://ion-row/ion-col[1]/div/ion-item[2]').click({x: 30})
    }

    async clickProceed(){
        await $('xpath://ion-button').click()
    }

    async launch(){
        await browser.url('https://order.jdwetherspoon.com/venue/pubs/95/tables')
    }
}

export default new WelcomePage();