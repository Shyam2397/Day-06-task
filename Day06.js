// 1. CLASS MOVIE

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating ===undefined){this.rating='PG'}
    }
    display(){
        return(`${this.title},${this.studio},${this.rating}`);
    }
    movieobject(){
        return{title:this.title,studio:this.studio,rating:this.rating}
    }
    getPG(arr){
        let data = arr.filter(flim=>flim.rating=='PG')
        console.log(data.map(b=>b.title))
    }

}

let movie1 = new movie('ayan','abc production','PG')
let movie2 = new movie('singam','yazh production','PG')
let movie3 = new movie('master','a1 production','PG')
let movie4 = new movie('billa','tamil production','PG')
let flim = new movie('Casino Royale','Eon Productions','PG­13')
console.log(movie1.display());
console.log(flim.display())
let arr=[];
arr.push(movie1.movieobject(),movie2.movieobject(),movie3.movieobject(),movie4.movieobject(),flim.movieobject());
console.log(arr)


// 2.  CLASS CIRCLE

const pi=3.1412;
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    
    getRadius(){
        return this.radius*this.radius
    }

    setRadius(){
        return this.setRadius
    }

    getColor(){
        return this.color
    }

    setColor(){
        return this.setColor
    }

    toString(){
        return 'radius :'+ this.radius+','+'color :'+this.color
    }

    getArea(){
        return pi*this.radius*this.radius
    }

    getCircumference(){
        return 2*pi*this.radius
    }

}

let circle1=new circle(1.0,'red')
console.log(circle1)
console.log(circle1.getRadius())
console.log(circle1.setRadius())
console.log(circle1.getColor())
console.log(circle1.setColor())
console.log('circle'+'['+circle1.toString()+']')
console.log(circle1.getArea())
console.log(circle1.getCircumference())



//3.  Write a “person” class to hold all the details.


class person{
    
    constructor(name,age,weight,qualification,course,experience,address,district,state){
        his.name=name;
        this.age=age;
        this.weight=weight;
        this.qualification=qualification;
        this.course=course;
        this.experience=experience;
        this.address=address;
        this.district=district;
        this.state=state;
    }

    details(){
        return(`${this.name},${this.age},${this.weight},${this.qualification},${this.course},${this.experience},${this.address},${this.district},${this.state}`);
    }
}
let person1 = new person('siva','29','78','BE','civil engineering','2','katcheri street','tirchy','tamilnadu')
    console.log(person1.details())




//4) write a class to calculate uber price.

class uberprice{
    constructor(distance){
        this.distance=distance;
    }
    getprice(){
        return this.distance*20
    }
    
}
let uber = new uberprice(100);
console.log(uber.getprice());