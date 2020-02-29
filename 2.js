ffunction is_username_valid(username){
    const username_valid = /^[0-9]+[a-z]+[0-9]$/g
    const awal_akhir_username_harus_angka = /^(.)[a-z]+\1$/g
    
   return username_valid.test(username) && awal_akhir_username_harus_angka.test(username) && username.length >= 5 && username.length <= 8
}

function is_password_valid(password){
    const pass_number = password.match(/[0-9]+/)[0].length
    const pass_string = password.match(/[a-z]+/)[0].length
    
    if (password.match(/^(?=.{0,}[0-9])[a-z0-9\W]{7,11}$/) && password.match(/\-{0,}/) && pass_number == pass_string) {
        return true
    }else{
        return false
    }
}
