export const calculateTotalItem = (newItems, setNumberOfItems) => {
    const total = newItems.reduce((previousVal, currentVal) => {
      return currentVal.count + previousVal;
    }, 0);
    setNumberOfItems(total);
  };
  
  export const calculateTotalPrice = (newItems, setTotalPrice) => {
    const totalPriceOfItems = newItems.reduce((prevVal, currentVal) => {
      return currentVal.price * currentVal.count + prevVal;
    }, 0);
    setTotalPrice(totalPriceOfItems);
  };
  
  export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  