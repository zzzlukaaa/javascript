
class AlarmClock { 
    constructor () {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    addClock(time, callback, id) { 
      if (id === undefined) { 
        throw new Error('Невозможно идентифицировать будильник. Параметр id не был передан');
      }
  
      if (this.alarmCollection.some(clock => clock.id === id)) { 
        return console.error('Будильник с таким id уже существует');
      }
      
      return this.alarmCollection.push({id, time, callback}); 
    }
  
    removeClock(id) { 
      let idIndex = this.alarmCollection.findIndex(clock => clock.id === id);
  
      if (idIndex === -1) {
      return false
      }
      
      this.alarmCollection.splice(idIndex, 1)
      return true;  
    }
  
    getCurrentFormattedTime() { 
      let currentDate = new Date(),
        currentHours = (currentDate.getHours() < 10) ? '0' + currentDate.getHours() : currentDate.getHours(),
        currentMinutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
  
      return this.currentTime = currentHours + ':' + currentMinutes;
    }
  
    start() {    
      if (this.timerId === null) {
        this.timerId = setInterval(() => {  
          this.alarmCollection.forEach(ring => {
            if (ring.time == this.getCurrentFormattedTime()) {
              return ring.callback();
            }
          })
        }, 1000);
      }
  
      return console.log('Будильник включен');    
    }
  
    stop() {
      if(this.timerId !== null) {
        clearInterval(this.timerId);
        return this.timerId = null;
      }
  
      return console.log('Будильник выключен');
    }
  
    printAlarms() {
      console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length)
      this.alarmCollection.forEach(ring => console.log('Будильник №' + ring.id + ' заведен на ' + ring.time));
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }  
  }