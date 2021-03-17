rdbPercent.onchange=function(){
  pgbPercent.value = parseInt($("#rdbPercent_" + rdbPercent.value).val())
}

sldPercent_input.onchange=function(){
  pgbPercent.value = sldPercent.getValue()
}

hmbName.onclick=function(x){
    if (typeof(x) == "object") {
        return;
    }
    if (x == "Maxwell") {
        lblName.value = 'My first name is Maxwell!'
    }
    if (x == "Benjamin") {
        lblName.value = 'My middle name is Benjamin!'
    }
    if (x == "Schutze") {
        lblName.value = 'My last name is Schutze!'
    }
}

pgbPercent.onclick=function(){
  alert(`The percentage is ${pgbPercent.value}%.`)
}
