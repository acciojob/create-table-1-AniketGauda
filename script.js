function insert_Row() {
    //Write your code here
  let tbl = document.getElementById("sampleTable");

    tbl.innerHTML = `
            <td>New Cell1</td> 
            <td>New Cell2</td>` + tbl.innerHTML;
  
}
