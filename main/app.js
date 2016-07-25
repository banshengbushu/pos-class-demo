const CartItem = require('./models/cart-items');
const ReceiptItem = require('./models/receipt-items');
const Receipt = require('./models/receipt');
const Item = require('./models/item');
const Promotion = require('./models/promotion');

function printReceipt(tags) {
    
  const cartItems =CartItem.buildCartItems(tags, Item.all());
  const receiptItems = ReceiptItem.buildReceiptItems(cartItems, Promotion.all());
  const receipt = new Receipt(receiptItems);
  const receiptText = receipt.buildReceiptText();
  console.log(receiptText);
}

exports.printReceipt = printReceipt;
