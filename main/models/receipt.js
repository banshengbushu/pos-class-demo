/**
 * Created by wangdanna on 16-7-25.
 */
class receipt{
    constructor(receiptItems, total, savedTotal){
        this.receiptItems = receiptItems;
        this.total = total;
        this.savedTotal = savedTotal;
    }
}
module.exports = receipt;