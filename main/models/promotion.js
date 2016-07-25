/**
 * Created by wangdanna on 16-7-25.
 */
class Promotions{
    constructor(type,barcodes = []){
        this.type = type;
        this.barcodes = barcodes;
    }
    static all(){
        return [
            new Promotions('BUY_TWO_GET_ONE_FREE',['ITEM000000', 'ITEM000001', 'ITEM000005'])
        ];
    }
}
module.exports = Promotions;
