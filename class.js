class rectangle{
    constructor(width,length,color){
        this.length = length;
        this.width =width ;
        this.color = color;
}
    area(){
        const area = this.width *this.length;
        return area;


    }
    paint(){
            console.log("The color has been painted to ",this.color);
    }
}
const rect1 = new rectangle(2,5,"pink");
const a = rect1.area();
console.log(a);
const p = rect1.paint();

