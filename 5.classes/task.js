class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        }

   

    fix(){
        this.state = this.state * 1.5;
        }


    set state(_state){
        if(_state < 0){
            this._state = 0;
        } else if(_state > 100){
            this._state = 100;
        } else {
            this._state = _state;
        }
    
    }



    get state(){
        return this._state;
    } 

}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
    
}
    }


class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount,  state, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, state, author){
        super(name, releaseDate, pagesCount,  state, author);
        this.type = 'detective';
    }
}









class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }


addBook(book){
   
    if(book.state > 30){
        this.books.push(book);
    }
}

findBookBy(type, value){ /* тип, значение*/
  let book = this.books.find(book => book[type] === value)
    if (book != undefined){
        return book;
    } else {
        return null;
    } 
}

giveBookByName(bookName){
    let book = this.books.find(book => book.name === bookName)
        if (book != undefined){
            this.books.splice((this.books.indexOf(book)), 1);
            return book;
        } else {
            return null;
    }
}
}



class Student {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }


setSubject(subjectName){
    this.subject = subjectName;
    
  }


    addMark(mark, subject){  /*оценка, предмет*/
     
       if (this.marks[subject] === undefined ) { 
        this.marks[subject] = [mark]
    }
else {
    this.marks[subject].push(mark);
}
};



getAverageBySubject(subject) {
    if(this.marks[subject].length > 0){
    return this.marks[subject].reduce((acc, mark, idx, arr) => {
      if (idx === arr.length - 1){
        return (acc+mark)/arr.length;
      } else {
        return acc + mark;
      }
    }    
   )
 }

else {
    throw new Error('По этому предмету нет оценок');
}
}
  

 
 getAverage() {
averageRating =[];
    for (subj in this.marks){
       averageRating.push(...this.marks[subj])
    }
    array_sum(averageRating); // 15
   /*let s; 
    for (let i = 0; i < averageRating.length; i++){
       s += averageRating[i]
     }
     return s/averageRating.length;*/
}
}
   /* if(this.marks.length > 0){
            return this.marks.reduce((acc, mark, idx, arr) => {
                        if (idx === arr.length - 1){
                        return (acc+mark)/arr.length;
                    } else {
                         return acc + mark;
                        }
                }     
                 )
        } else {
            throw new Error('Нет оценок');
                }
}
}*/
/*
        if(this.mark === undefined){ 
  
    this.mark = [subject];
  } else {
      
    this.mark.push(subject);
  }
};
}


}
*/

    /*
    
    subjectName
    if(this.marks === undefined){ 
        this.marks = [mark];
      } else {
        this.marks.push(mark);
      }
    }
    

    addMarks(...mark) {
    
  
        if(this.marks === undefined){ 
            
            this.marks = [...mark];
          } else {
              
            this.marks.push(...mark);
          }
        };
    

        getAverage() {
    
            return this.marks.reduce((acc, mark, idx, arr) => {
              if (idx === arr.length - 1){
                return (acc+mark)/arr.length;
              } else {
                return acc + mark;
              }
            }     
           )
          }
      
    
          getAverageBySubject(){
            return this.marks.reduce((acc, mark, idx, arr) => {
                if (idx === arr.length - 1){
                  return (acc+mark)/arr.length;
                } else {
                  return acc + mark;
                }
              }     
             ) 
          }


    
   exclude(reason) {
      //ваш код
      delete Student.subject;
      delete Student.marks;
      this.excluded = reason;
    
    };
}

*/