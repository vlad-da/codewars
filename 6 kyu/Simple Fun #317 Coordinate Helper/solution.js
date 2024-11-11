function coordinateHelper(cmd){

    const obj = {
        'A': 0,
        'S': 0,
        'D': 0,
        'W': 0,
    }
    
    cmd.forEach(item => {
        
        const tmp =  item.slice(1, item.length);
        if (item[0] === 'A' && !isNaN(tmp) && tmp) {
            obj.A -= parseInt(tmp);
        }
        else if (item[0] === 'S' && !isNaN(tmp) && tmp) {
            obj.S -= parseInt(tmp);
        }
        else if (item[0] === 'D' && !isNaN(tmp) && tmp) {
            obj.D += parseInt(tmp);
        }
        else if (item[0] === 'W' && !isNaN(tmp) && tmp) {
            obj.W += parseInt(tmp);
        } 
    });
    
    return [obj.D + obj.A, obj.S + obj.W]
  }