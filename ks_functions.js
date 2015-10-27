
function isValidDate(date)
{
    var matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(date);
    if (matches == null) return false;
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y;
};


function GetPagConten(urlpagi) {

    $('#mdiparent').html('<p style="text-align: center; width:100%; height: 400px"><img src ="Resources/cargando.gif"/></p>');

    $.ajax({
        type: "GET",
        url: urlpagi,
        async: true,
        data: 'html',
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
        },
        error: function (response) {
            alert(response.d);
        }
    });
}

function OnSuccess(response) {

    $('#mdiparent').html(response);

}
;


function GetNaveConten(urlpagi) {

    $('#mdiparent').html('<p style="text-align: center; width:100%; height: 400px"><img src ="Resources/cargando.gif"/></p>');

    $.ajax({
        type: "GET",
        url: urlpagi,
        async: true,
        data: 'html',
        success: OnNaveSuccess,
        failure: function (response3) {
            alert(response3.d);
        },
        error: function (response3) {
            alert(response3.d);
        }
    });
}

function OnNaveSuccess(response3) {

    $('#mdiparent').html(response3);


}
;


function GetPostConten(urlpagi, datapost) {

    $('#mdiparent').html('<p style="text-align: center; width:100%; height: 400px"><img src ="Resources/cargando.gif"/></p>');

    $.ajax({
        type: "POST",
        url: urlpagi,
        data: datapost,
        success: OnPostSuccess,
        failure: function (response2) {

            alert(response2.d);
        },
        error: function (response2) {

            alert(response2.d);
        }
    });
}

function OnPostSuccess(response2) {
    $('#mdiparent').html(response2);


}
;


function GetPostMultiConten(urlpagi, form) {


    var formData = new FormData(document.getElementById(form));
    formData.append("dato", "valor");

    $('#mdiparent').html('<p style="text-align: center; width:100% ; height: 400px"><img src ="Resources/cargando.gif"/></p>');

    $.ajax({
        type: "POST",
        url: urlpagi,
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: OnPostSuccess,
        failure: function (response4) {

            alert(response4.d);
        },
        error: function (response4) {

            alert(response4.d);
        }
    });
}

function OnPostMultiSuccess(response4) {
    $('#mdiparent').html(response4);


}
;


function GetPostUsua(urlpagi, datapost) {

    $.ajax({
        type: "POST",
        url: urlpagi,
        data: datapost,
        success: function (response5)
        {
            $('#nombusua').html(response5);
            var cargo = $('#usua_cargo').val();
            
            var area_desc = $('#hidd_area_desc').val();
            
            $('#area_desc').html(".: "+area_desc+" :.");
            //    alert(cargo);
            if (cargo == 1)
            {
                $('#menualum').css("display", "block");
            }
            else if (cargo == 2)
            {
                $('#menucomi').css("display", "block");
                $('#menuconf').css("display", "block");

            }
                else if (cargo == 5)
            {
                $('#menucomi').css("display", "block");
                $('#menuconf').css("display", "block");

            }
            else if (cargo == 0)
            {
             //  $('#menucomi').css("display", "none");
              //   $('#menuconf').css("display", "none");
             //  $('#menualum').css("display", "none");
            }
        }
        ,
        failure: function (response5) {

            alert(response5.d);
        },
        error: function (response5) {

            alert(response5.d);
        }
    });
}
;


function GetPostEmail(urlpagi, datapost) {

    $.ajax({
        type: "POST",
        url: urlpagi,
        data: datapost,
        success: function (response5)
        {
            $('#respemail').html(response5);
        }
        ,
        failure: function (response5) {

            alert(response5.d);
        },
        error: function (response5) {

            alert(response5.d);
        }
    });
}
;

function GetTableSelect(urlpagi) {

    $.ajax({
        type: "GET",
        url: urlpagi,
        async: true,
        data: "html",
        success: function (response5)
        {
            $('#tableselect').html(response5);
        }
        ,
        failure: function (response5) {
            alert(response5.d);
        },
        error: function (response5) {

            alert(response5.d);
        }
    });
}
;



function FechaHoy() {
    var textfecha;
    var fech = new Date();
    var dia = fech.getDate();
    var m = fech.getMonth() + 1;
    var mes = (m < 10) ? '0' + m : m;
    if (dia < 10) {
        dia = '0' + dia
    }


    var anio = fech.getFullYear();
    textfecha = anio + "-" + mes + "-" + dia;

    return textfecha;


}
;


function HoraHoy() {
    var hora = new Date();

    var h = hora.getHours();
    var m = hora.getMinutes();
    var s = hora.getSeconds();

    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;

    var horah = h + ":" + m + ":" + s;


    return horah;


}
;

function numeros(e) {
    var key = document.all ? key = e.keyCode : key = e.which;
    return ((key > 47 && key < 58 || key == 46 || key == 08));
}

function enteros(e) {
    var key = document.all ? key = e.keyCode : key = e.which;
    return (key > 47 && key < 58 || key == 08);
}

function letras(e) {
    var key = document.all ? key = e.keyCode : key = e.which;
    return ((key < 47 || key > 58));
}

function cargartexto(control)
{
    $("#"+control).html('<strong> Cargando ... </strong>');
}

function GetControl(urlpagi, control) {

 $(control).html('<strong> Cargando ... </strong>');
 
    $.ajax({
        type: "GET",
        url: urlpagi,
        async: true,
        data: "html",
        success: function (response1)
        {

            //  alert(urlpagi);
            // alert(response1);

            $(control).html(response1);
        }
        ,
        failure: function (response1) {
            alert(response1.d);
        },
        error: function (response1) {
            alert(response1.d);
        }
    });
}
;

function GetPOSTControl(urlpagi, datapost, control) {

 $(control).html('<strong> Cargando ... </strong>');
    $.ajax({
        type: "POST",
        url: urlpagi,
        data: datapost,
        success: function (response5)
        {
      //  alert(response5);
            $(control).html(response5);
        }
        ,
        failure: function (response5) {
            alert(response5.d);
        },
        error: function (response5) {

            alert(response5.d);
        }
    });
}
;

