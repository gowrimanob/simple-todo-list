/*Btn click */
document.getElementById('Btn').addEventListener('click', function () {

    let val = document.getElementById('input').value
    if (val != '') {

        /* Stackbox creation */
        let s_box = document.createElement('div')
        s_box.className = 'Stackbox'

        /* to split each lines */
        let lines = val.split('\n')

        /* To differentiate heading in notes */
        let heading = document.createElement('h4')
        heading.innerText = lines[0]

        /* Create the <p> content below the title */
        let content = document.createElement('p')
        content.innerText = lines.slice(1).join('\n')

        /* del box */
        let dlt = document.createElement('button')
        dlt.className = "DeleteBtn"
        dlt.textContent = "Delete"

        /* append all the contents into the Stackbox (var-->box) */
        s_box.appendChild(heading)
        s_box.appendChild(content)
        s_box.appendChild(dlt)

        /* append all into the container in div of html */
        document.getElementById('container').appendChild(s_box)

        /*effect for Btn*/
        document.getElementById('Btn').innerText = "SAVED ✔"

        document.getElementById('input').value = ''

    }
})
/* mouse_leave from Btn*/
Btn.addEventListener('mouseleave', function () {
    Btn.innerText = 'SAVE'
})

/* DltBtn function */
function deleteStackBox(box) {
    box.remove();
}

dlt.addEventListener('click', function () {
    deleteStackBox(box);
});



