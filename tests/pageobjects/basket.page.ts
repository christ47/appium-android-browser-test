class BasketPage{

   async assetBasketItem(text: string){
        await expect(await $('xpath://*[@id="course-group-10"]/div/ion-list/ion-item-sliding/ion-item/div/ion-grid/ion-row/ion-col[1]/h4/span').getText()).toContain(text)
   }
}

export default new BasketPage()