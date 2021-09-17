function myFunction(){
    let input, filter, ul, h2, a, i;
    input = document.getElementById('#findRecept');
    filter = input.value.toUpperCase();
    ul = document.getElementById('#searchRecept');
    h2 = ul.getElementsByTagName('h2');
    for (i = 0; i < h2.length; i++) {
        a = h2[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            h2[i].style.display= "";
        }else {
            h2[i].style.display= "none";
        }
    }

}