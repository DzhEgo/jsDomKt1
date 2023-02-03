let a = []
for (let i = 0; i < 30; i++){
  a.push(Math.floor(Math.random() * 100))
}

function getNumber(a = 101, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

let table = document.createElement('table')
document.body.appendChild(table)

for (let i = 0; i < 5; i++){
    var tr = document.createElement('tr')
    for (let j = 0; j < 6; j++){      
        let td = document.createElement('td')
        if (a[i * 6 + j] >= 50){
            td.style.backgroundColor = 'orange'
        }
        td.innerHTML = a[i * 6 + j]
        tr.appendChild(td)
    }

  table.appendChild(tr)
}

function addNum(){
    tbl = document.body.firstChild.nextElementSibling.nextElementSibling
    lastRow = tbl.firstElementChild.lastChild.children.length
    console.log(lastRow)
    if (lastRow !== 6){
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber(100)))
    } else {
        tr = tbl.insertRow(-1)
        td = tr.insertCell()
        td.appendChild(document.createTextNode(getNumber(100)))
    }
    if (td.textContent >= 50) {
        td.style.background = 'orange'
    }
}

