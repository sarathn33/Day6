class movie {
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;                   
    this.rating=rating;
    }
    getPG(){

        if(this.rating==null){
            this.rating='PG' 
        }
        return(`The Title of the movie is ${this.title} and the studio is ${this.studio}.The Rating given to the flim is ${this.rating}`)
}
}
    var movie1= new movie("Sardhar","Ish studio","11PG")    
    var movie2= new movie("Casino Royale","Eon Productions","PG13")
    var movie3= new movie("Arogara","Senthilmurugan Productions")  
console.log(movie3.getPG())   
console.log(movie1.getPG())
console.log(movie2.getPG())

