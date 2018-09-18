function chooseCity() {
    var div = document.getElementById("sityChoice");
    var checkList = document.getElementsByName("options");
    var city, map_code;
    div.style.display = 'none';
    for (var i = 0; i < checkList.length; i++) {
        if (checkList[i].checked) {
            city = checkList[i].id;
        }
    }

    if (city == 'tumen') {
        document.getElementById('ekaterinburg_map').style.display='none';
        document.getElementById('tumen_map').style.display='block';
    }
}