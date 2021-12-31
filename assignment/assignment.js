

let fullName = (fname="firstName" , lname="lastName") => {
    var name = fname+ " "+lname;
    return name;
}

var fn = fullName("Rogers".charAt(0),"Waters".charAt(0));
document.write(fn);


