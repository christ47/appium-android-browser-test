class BasketPage{

   async assertBasketQuantity(quantity: string){
        await expect($('xpath://ion-item-sliding/ion-item/div/div/div/h4')).toContain(quantity)
   } 

   async assetBasketItem(){
        await expect($('xpath://ion-grid/div/ion-row/ion-col[1]/ion-text')).toContain('1x Chicken wings')
   }
}

export default new BasketPage()