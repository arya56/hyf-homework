var volumeInMeters,gardenSizeInM2;

var evaluation= function (_wideH,_depthH,_hightH,gardenSizeInM2,_customerName,paidPrice) {
    volumeInMeters = _wideH * _depthH * _hightH ;
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
    housePrice > paidPrice ? console.log("Bingo!!! ",_customerName +" paid less than the calculated price") 
    : console.log("Overpriced! ", _customerName +" paid more than the calculated price.") ;
}
evaluation(8,10,10,100,"Peter",2500000);
evaluation(5,11,8,70,"Julia",1000000)