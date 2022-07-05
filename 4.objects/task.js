function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const student1 = new Student("Elena","woman",26);
const student2 = new Student("Nikolay","men",27);


Student.prototype.setSubject = function (subjectName) {
    
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
    

if(this.marks === undefined){ 
  
    this.marks = [mark];
  } else {
      
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...mark) {
    
  
  if(this.marks === undefined){ 
      
      this.marks = [...mark];
    } else {
        
      this.marks.push(...mark);
    }
  };


  Student.prototype.getAverage = function () {
    
   
  
    return this.marks.reduce((acc, mark, idx, arr) => {
      if (idx === arr.length - 1){
        return (acc+mark)/arr.length;
      } else {
        return acc + mark;
      }
    }     
   )
  }
  




Student.prototype.exclude = function (reason) {
  //ваш код
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;

};
