class auth{
    contructor(email, password){
        this.email = email;
        this.password = password;
    }

    logged(){
        if (this.email == "ricardo@teste.com" && this.password == "123"){
            return true
        }else{
            return false
        }
    }

};