class circle{
    constructor(diameter,radius,color){
        this.diameter=diameter;
        this.radius=radius;
        this.color=color;
    }
    getCircle(){
        return(`The radius of the circle is  ${this.radius} and the color of the circle is ${this.color}`)
    }
    getArea(){
        let area = Math.PI*(this.radius*this.radius)
        return(`The Area of the circle is ${area.toFixed(2)}`)
    }
    getRadius(){
        let rad = this.diameter/2
        return(`The radius of the circle is ${rad}`)
    }
    setchangeradius(newdiameter){
        this.diameter=newdiameter;
    }
    getCircumference(){
        let circumference = 2*Math.PI*this.radius
        return(`The circumference of the circle is ${circumference.toFixed(2)} `)
    }
    getColor(){
        let color = "red"
        return(`The color of the circle is ${this.color}`)
    }
    setcolor(newcolor){
        this.color=newcolor;
    }
}
    
let Cirandclr = new circle(3,5.27,"Green")    
let area1 = new circle(3,4)
let circum = new circle(3,8)
let circleclr = new circle(3,2,"red")
circleclr.setcolor("skyblue")
let rad1 = new circle(2,"pink",5)
rad1.setchangeradius(10)
console.log(Cirandclr.getCircle())
console.log(area1.getArea())
console.log(circum.getCircumference())
console.log(circleclr.getColor())
console.log(rad1.getRadius())