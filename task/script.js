function SubmitData(event) {
    event.preventDefault();


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let graduation = document.getElementById("graduation").value;

    let eligible;
    if(age>= 18 && graduation ==="yes" ){
        eligible = "eligible";
    }else if(age >= 18 && graduation ==="no"){
        eligible = " no eligible";
    }else{
        eligible = " under age";
    }

    let tablebody = document.getElementById("tablebody");
    tablebody.innerHTML +=
    `
    <tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${graduation}</td>
                <td>${eligible}</td>
    </tr>
    `
    let check_student = age>=18? "adult":"minor";
    console.log(check_student);
      

}