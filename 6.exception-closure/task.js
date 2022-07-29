
function parseCount(value){
    parseResult = Number.parseInt(value);

    if(isNaN(parseResult)) { 
        throw new Error('Невалидное значение');
    } 
        return parseResult;
}



    function  validateCount(value){
        
    
    try { 
        return parseCount (value);
    }
    catch(error) {
        return error;
    } 
}








class Triangle {
    constructor(a, b, c){
if ((a + b) < c || (b + c) < a || (a + c) < b){
    throw new Error('Треугольник с такими сторонами не существует');
} 
    this.a = a;
    this.b = b;
    this.c = c;
    }

    getPerimeter (){
      return Number((this.a + this.b + this.c).toFixed(0));
    }
    
    getArea(){
       let p = Number((this.a + this.b + this.c) / 2);
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
        } 
       






function getTriangle (a, b, c) {

     try {
     return new Triangle (a, b, c);
    } catch (error) {
        return {
        getPerimeter() {
        return 'Ошибка! Треугольник не существует';
        },
        getArea (){
        return 'Ошибка! Треугольник не существует';
        }
        }
        }
    }