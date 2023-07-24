function validEmail(email)
{
    let emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailcheck.test(email);
}

function validPhoneNumber(phonenumber)
{
    let phonecheck = /^\d{10}$/;
    return phonecheck.test(phonenumber); 
}

module.exports = {
    validEmail: validEmail,
    validPhoneNumber: validPhoneNumber
};