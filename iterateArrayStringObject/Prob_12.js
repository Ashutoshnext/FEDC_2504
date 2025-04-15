let obj = [
    //     { role: "admin", experience: 7, active: true, department: "IT" }, //Full IT Admin Access
    //     { role: 'admin', experience: 6, active: true }, //Full General Admin Access
    //     { role: 'admin', experience: 4, active: true },//Limited Admin Access
    //     { role: 'admin',  active: false },//Admin Access Revoked
    //     { role: "manager", experience: 4, active: true, department: "sales" }, //Full IT Admin Access
    //     { role: 'manager', experience: 4, active: true,  }, //Full General Admin Access
    //     { role: 'manager', experience: 3, active: true,},//Limited Admin Access
    //     { role: 'manager', active: false, },//Admin Access Revoked
    //     { role: 'user',  active: true, department: 'support' },//Priority Support Access
    //     { role: 'user', active: true,  },//User Access
    //     { role: 'user', active: false, },//User Access
    { role: "admin", experience: 7, active: false, department: "IT" }
    
    ]
    
    for( i=0;i<obj.length;i++){
    let role=obj[i].role;
    let experience=obj[i].experience;
    let active=obj[i].active;
    let department=obj[i].department;
    
    //create job conditions
    
    if(role=='admin' && experience>5 && active==true && department==='IT'){
        console.log('Full IT Admin Access')
    }else if(role=='admin' && experience>5 && active==true){
        console.log('Full General Admin Access');
        
    }else if(role=='admin' && experience<=5 && active==true){
        console.log('limted Admin Access ')
    }else if(role=='admin' && experience<=5 && active==false && department==='IT' ){
        console.log('Admin Access Revoked');
        
    }else if(role=='manager' && experience>3 && active==true && department==='sales' ){
        console.log('Full Sales Manager Access');
        
    }else if(role=='manager' && experience>3 && active==true ){
        console.log('Full Manager Access');
        
    }else if(role=='manager' && experience<=3 && active==true ){
        console.log("Limited Manager Access");
        
    }else if(role=='manager'  && active==false ){
        console.log("Manager Access Revoked");
        
    }else if(role=='user' && active==true && department==='support' ){
        console.log("Priority Support Access");
        
    }else if(role=='user' && active==true){
        console.log("User Access");
        
    }else if(role=='user' && active==false){
        console.log("User Access Revoked");
        
    }
    
    }