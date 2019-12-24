
//Loads the data to populate the table

async function loadData(){

    let success=false;
    const response= await fetch('http://localhost:3480/schedules');


    const data= await response.json();


    const tableBody=document.querySelector("#Trans-table > tbody");


    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }


    for (var row in data) {
        const tr=document.createElement("tr");
        if (data.hasOwnProperty(row)) {


            const tdTeacher=document.createElement("td");
            const tdSubject=document.createElement("td");
            const tdRoom=document.createElement("td");
            const tdDate=document.createElement("td");

            tdTeacher.textContent=data[row].teacher;
            tdSubject.textContent=data[row].subject;
            tdRoom.textContent=data[row].room;
            tdDate.textContent=data[row].date;

            tr.appendChild(tdTeacher);
            tr.appendChild(tdSubject);
            tr.appendChild(tdRoom);
            tr.appendChild(tdDate);



            //console.log(data[row]);
            tableBody.appendChild(tr);

            success=true;


        }



    }
    return success;

}



