class persondetails{
    constructor(name,age,city,schoolname,schoolpercent,clgname,cgpa,hobby,skills){
    this.name=name;
    this.age=age;
    this.city=city;
    this.schoolname=schoolname;
    this.schoolpercent=schoolpercent;
    this.clgname=clgname;
    this.cgpa=cgpa;
    this.hobby=hobby;
    this.skills=skills;
    }
    getdetails(){
        console.log(`Hi! I'am ${this.name} and I'm ${this.age}.I live in ${this.city}.
                     I have completed my schooling in ${this.schoolname} with ${this.schoolpercent} percentage.I'am  graduated from ${this.clgname}
                     with the ${this.cgpa} cgpa. My hobbies are ${this.hobby}.I have also learnt ${this.skills}.`)
    }
}
var detail = new persondetails("Sarath.N","21","Ooty","Stanes","70","kongunadu arts and science college","7","binge watching and music","Basics of python language")
return(detail.getdetails())