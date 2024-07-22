// Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.


class Movie {

    constructor (title, studio, rating){
    
    this.title = title; //key: value // Leo = title
    
    this.studio = studio;
    
    this.rating = rating;
    
    }
    
    }
    
    const obj = new Movie("leo", "7-Screen Studio", "7.5");

    console.log(obj.title,obj.studio,obj.rating);

    // The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

    class Movie1 {

        constructor (title, studio, rating="pg"){
        
        this.title = title; //key: value // Leo = title
        
        this.studio = studio;
        
        this.rating = rating;
        
        }
        
        }
        
        const obj1 = new Movie1("leo", "7-Screen Studio");
    
        console.log(obj1.title,obj1.studio,obj1.rating);


        //  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.


        class Moviee {
            constructor(title, studio, rating) {
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            }
        
            static getPG(input) {
                let out = input.filter(movie => movie.rating === "PG");
                return out;
            }
        }
        
        let mov1 = new Moviee("Thunivu", "Zee studios", "PG");
        let mov2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
        let mov3 = new Moviee("Kantara", "KRG Studios", "PG");
        let mov4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
        let mov5 = new Moviee("veeram", "Vijaya production", "PG");
        
        let movieArray = [mov1, mov2, mov3, mov4, mov5];
        let pgMovies = Moviee.getPG(movieArray);
        console.log(pgMovies);

        // Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


        class moviee2 {

            constructor (title, studio, rating="PG­13"){
            
            this.title = title; 
            
            this.studio = studio;
            
            this.rating = rating;
            
            }
            
            }
            
            const obj2 = new moviee2("Casino Royale", "Eon Productions", );
            
            
            
            console.log(obj2.title,obj2.studio,obj2.rating);


// 2.Circle

            class Circle{
                constructor(radius,color){
                    this.radius=radius;
                    this.color = color;
                }
                get Radius(){
                    return this.radius
                }
                set Radius(n){
                    this.radius = n;
                }
                get Color(){
                    return this.color;
                }
                set Color(c){
                    this.color = c
                }
                get toString(){
                    return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
                }
                get area(){
                    return Math.PI*Math.pow(this.radius,2)
                }
                get circumference(){
                    return 2*Math.PI*this.radius
                }
            }
            let obj4 = new Circle(1.0,"red") 
            console.log(obj4.Color);
            console.log(obj4.Radius);
            console.log(obj4.toString);
            console.log(obj4.area);
            console.log(obj4.circumference);
            obj4.Radius=3.5
            console.log(obj4.Radius);
            obj4.Color="green"
            console.log(obj4.Color);
    


            

// Write a “person” class to hold all the details

        class Student {

            constructor ( name, age, gender, contact, email, degree="bsc"){
            
            this.name = name; 
    
            this.gender = gender;
    
            this.age = age;
            
            this.contact = contact;
    
            this.email = email;
    
            this.degree = degree;
            
            }
            
            }
            
            const obj5 = new Student ("shyam", "male", "27", "9876543210", "ntshyamsunder96@gmail.com" );
            
            console.log(obj5.name,obj5.gender,obj5.age,obj5.contact,obj5.email,obj5.degree);
            
            



            // write a class to calculate the Uber price.

            const uber = {
                set kiloMeter (km,){    
                   this.price = `${km} km = Rs.${km * 50}` ;
                },
                get kiloMeter(){
                   return this.price;
                }
            }
            
            uber.kiloMeter = (1);
            console.log(uber)