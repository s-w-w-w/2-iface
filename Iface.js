    /*
    Iface - provide inderface for AndB class
        Properties:
            see constructor() descs    
        Methods:
        constructor() - object instantiation method 
        resetFieldsCallback() - reset all fields to their previous state
        setACallback() - set value of A callback 
        setBCallback() - set value of B callback 
        setBCallback() - set value of B callback 
    */
    class Iface{        

        /* 
        constructor() - object instantiation method 
        */
        constructor(){
             
            self = this;
            
            
            //// state maintenance
            // get hold of controls and instantiate data handling classes
            // a and b state data manipulation class  
            this.ab = new AandB();
            
            ////interface 
            // destination ctrl for a value  
            this.a = document.getElementById('value-a');
            // destination ctrl for b value 
            this.b = document.getElementById('value-b');
            // input ctrl for collection of a value 
            this.inpA = document.getElementById('inp-a');
            // input ctrl for collection of b value
            this.inpB = document.getElementById('inp-b');
            // reset trigger ctrl             
            this.reset = document.getElementById('reset');
            // collection trigger ctrl for a 
            this.setA = document.getElementById('set-a');
            // collection trigger ctrl for b
            this.setB = document.getElementById('set-b');

            // initial reset of values
            this.resetFieldsCallback();

            // activate a-related controls
            this.setA.addEventListener(
                'click',
                function(e){
                    self.setACallback();
                },
                false
            );
            
            // activate b-related controls
            this.setB.addEventListener(
                'click',
                function(e){
                    self.setBCallback();
                },
                false
            );

            // activate reset button
            reset.addEventListener(
                'click',
                function(e){
                    self.resetFieldsCallback();    
                    //return false
                },
                false
            );
        }
        
        /*
        resetFieldsCallback() - reset all fields to their previous state
            Output: True
        */
        resetFieldsCallback() {
            self.ab.reset();
            self.inpA.value = self.ab.getA(); 
            self.inpB.value = self.ab.getB(); 
            self.a.innerHTML = self.ab.getA();
            self.b.innerHTML = self.ab.getB();
            return true;            
        } 

        /*
        setACallback() - set value of A callback
            Output: True
        */        
        setACallback() {
            let valA = self.inpA.value;
            // you might want to do some input validation here !!!
            // set a in the underlying object
            self.ab.setA(valA);
            // set a on the interface 
            self.a.innerHTML = self.ab.getA();
            return true; 
        }       
       
        /*
        setBCallback() - set value of B callback
            Output: True
        */  
        setBCallback(){
            let valB = self.inpB.value;
            // you might want to do some input validation here !!!
            // set a in the underlying object
            self.ab.setB(valB);        
            self.b.innerHTML = self.ab.getB();
            return true
        }                       
                 
    }
