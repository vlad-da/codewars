var Vector = function (components) {
  
  this.components = components;
  
  this.add = function(b) {
    
    if(this.components.length !== b.components.length) {
      throw "error";
    };
    
    const arrAdd = [];
    this.components.forEach((el, index) => {
      arrAdd.push(this.components[index] + b.components[index]);
    });
    
     return new Vector( arrAdd );
  };
  
  this.subtract = function(b) {
    
    if(this.components.length !== b.components.length) {
      throw "error";
    };
    
    const arrSubtract = [];
    this.components.forEach((el, index) => {
      arrSubtract.push(this.components[index] - b.components[index]);
    });
    
     return new Vector( arrSubtract );
  };
  
  this.dot = function(b) {
    if(this.components.length !== b.components.length) {
      throw "error";
    };
    const arrDot = [];
    this.components.forEach((el, index) => {
      arrDot.push(this.components[index] * b.components[index]);
    });
    const g = arrDot.reduce((acc, cur) =>  acc + cur, 0);
     return g;
  };
  
  this.norm = function() {
    return Math.sqrt( this.components.reduce( function(a,b){
      return a + Math.pow( b, 2 );
    }));
  };
    
  this.equals = function( b ) {
    if ( this.components.length !== b.components.length ) {
      return false;
    }

    for ( var i = 0; i < this.components.length; i++ ) {
      if ( this.components[ i ] !== b.components[ i ] ) {
        return false;
      }
    }

    return true;
  };

  this.toString = function(){
    return '(' + this.components.join(',') + ')';
  };
  
};