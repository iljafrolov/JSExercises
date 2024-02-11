var array = [2,6,0,666,-6,142,0,1,-10];
array.sort(function(a, b) {
        if(a==0 && b!=0)
            return 1;
        else if(b==0 && a!=0)
            return -1;
        else 
            return 0;
    })
    console.log (array)