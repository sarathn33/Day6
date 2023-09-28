class uberdetails{
    constructor(Distance,Rate,Time){
        this.Distance=+Distance;
        this.Rate=+Rate;
        this.Time=+Time;
    }
    getprice(){
    let price=parseInt((this.Rate*this.Distance)+(2*this.Time))
    return price;
    }
}
let ride1 = new uberdetails(6,10,20)
console.log(ride1.getprice())