var listUser=[];

class User {
    constructor(email,password, nom, prenom, isConnected) {
        this.email = email;
        this.password = password;  
        this.nom = nom;
        this.prenom=prenom;
           
        this.isConnected = isConnected;
    }
}


function linkInscription(){
    document.getElementById("loginSection").style.display='none';
    document.getElementById("SignUpSection").style.display='block';  
}


function inscription()
{
    let email=document.getElementById("emailInscription").value;
    let password=document.getElementById("passwordInscription").value; 
    let nom=document.getElementById("nomInscription").value;
    let prenom=document.getElementById("prenomInscription").value;
    let isConnected=false;

    var newUser= new User(email,password,nom,prenom,isConnected);
    listUser.push(newUser);

    document.getElementById("loginSection").style.display='block';
    document.getElementById("SignUpSection").style.display='none';
}

function SeConnecter(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    for(user of listUser){
        console.log(user)
        if(user.email==email){
            if(user.password==password){
                user.isConnected=true;
                document.getElementById('infoSection').style.display='block';
                document.getElementById('loginSection').style.display='none';
                document.getElementById('hello').innerHTML="Bienvenue M.  "+" "+user.prenom +" "+user.nom;
                document.getElementById("logout").style.display='block';
                              
            }
        }
    }
}

function deconnecter(){
    document.getElementById("infoSection").style.display='none';
    document.getElementById("loginSection").style.display='block';  
    
}

