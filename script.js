function insert_Row() {
    //Write your code here
  let tbl = document.getElementById("sampleTable");

    tbl.innerHTML = `
        <tr>
            <td>New1 Cell1</td> 
            <td>New1 Cell2</td>
        </tr> ` + tbl.innerHTML;
  
}
