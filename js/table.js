//prevent submission of the form so the page does not reload, but the validation works.
window.addEventListener('load', function() {
    document.getElementById('tablegen').addEventListener('submit', function(e) {
        e.preventDefault();
    })
});

//Form validation script provided by Bootstrap
//https://getbootstrap.com/docs/5.2/forms/validation/
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//getting the input from the button
document.getElementById('generate').addEventListener('click', generateTable);
function generateTable() {
    var tMin = document.querySelectorAll('input')[0].value;  //top min value
    var tMax = document.querySelectorAll('input')[1].value;  //top max value
    var bMin = document.querySelectorAll('input')[2].value;  //bottom min value
    var bMax = document.querySelectorAll('input')[3].value;  //bottom max value

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');
    const tblhead = document.createElement('thead');

    tbl.classList.add('table', 'table-sm', 'align-middle', 'table-bordered', 'table-striped-columns');
    tblhead.classList.add('table-dark', 'table-borderless');
    for (let row = bMin - 1; row <= bMax; row++) {
        const irow = document.createElement('tr');
        //generating the columns
        for (let col = tMin - 1; col <= tMax; col++) {
            const cell = document.createElement('td');
            if (row == bMin - 1) {
                cell.classList.add('table-dark');
                const cellText = document.createTextNode(col);
                cell.appendChild(cellText);
                irow.appendChild(cell);
            } else if (col == tMin - 1) {
                cell.classList.add('table-dark');
                const cellText = document.createTextNode(row);
                cell.appendChild(cellText);
                irow.appendChild(cell);
            } else {
                const cellText = document.createTextNode((col * row));
                cell.appendChild(cellText);
                irow.appendChild(cell);
            }
    }
    tblBody.appendChild(irow);
}
tbl.appendChild(tblBody);
document.getElementById('multTable').appendChild(tbl);
}
