/*
    AandB - sample state handling class
*/
class AandB{
        static a = '';
        static b = '';
        /*
        Initial state
        */
        constructor(){
            this.reset();
        }
    
        getA(){
            return this.a;
        }
        
        getB(){
            return this.b;
        }
        
        /*
        setA(newValue)    
        */
        setA(newValue){
          this.a = newValue;
          return true  
        }
        
        /*
        setB(newValue)    
        */
        setB(newValue){
          this.b = newValue
          return true
        }
        
        /*
        reset() - reset to default values   
        */
        reset(){
          this.a = this.constructor.a
          this.b = this.constructor.b;
          return true
        }
}
