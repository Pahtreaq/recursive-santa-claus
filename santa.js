function deliverPresents(houses) {
  //Base case
  //If we have a single house, deliver the presents and print delivered
  if (houses.length === 0) return

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    //Break the Problem down
    //Split the of more than one house into two lists

    //Recall the function on a smaller piece
    //Call deliver presents on both lists
    //description of lists
    var mid = parseInt(houses.length / 2)
    var FirstHalf = houses.slice(0, mid)
    var SecondHalf = houses.slice(mid)
    deliverPresents(FirstHalf)
    deliverPresents(SecondHalf)
  }
}

module.exports = deliverPresents