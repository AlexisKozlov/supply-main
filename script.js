async function loadGoogleSheet() {
    const sheetId = "YOUR_SPREADSHEET_ID";  
    const url = `https://docs.google.com/spreadsheets/d/${141fL5qvope_AdRRT7yIMOBMD4ENFyOG2CGW29RYGEPM}/gviz/tq?tqx=out:json`;

    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substring(47, text.length - 2));
    
    const table = document.getElementById("data-table");
    
    json.table.rows.forEach(row => {
        let tr = document.createElement("tr");
        row.c.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell ? cell.v : "";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", loadGoogleSheet);
