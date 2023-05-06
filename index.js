var couchdb_url =
  "http://127.0.0.1:5984/instituciones/_design/design/_view/view"

$(document).ready(() => {
  $("#all_button").click(() => {
    handleRequest(couchdb_url);
  });

  $("#canton_button").click(() => {
    handleRequest(couchdb_url + `?key="${$("#canton").val().toUpperCase()}"`);
  });

  $("#limit_button").click(() => {
    handleRequest(couchdb_url + `?limit=${$("#limit").val().toUpperCase()}`);
  });
});


function handleRequest(requestUrl) {
    emptyInputAndData()
    ajaxRequest(requestUrl);
}

function ajaxRequest(requestUrl) {
  jQuery.ajax({
    url: requestUrl,
    dataType: "json",
    success: (data) => {
      var rows = data.rows;

      $.each(rows, (index, institucion) => {
        addInstitucion(institucion);
      });
    },
    error: (xhr, err) => {
      console.log("", xhr, error);
    },
  });
}

function addInstitucion(institucion) {
  var AMIE = institucion.value["AMIE"];
  var nombre_institucion = institucion.value["Nombre_Institucion"];
  var provincia = institucion.value["Provincia"];
  var codigo_provincia = institucion.value["Codigo_Provincia"];
  var codigo_canton = institucion.value["Codigo_Canton"];
  var canton = institucion.value["Canton"];
  var codigo_parroquia = institucion.value["Codigo_Parroquia"];
  var parroquia = institucion.value["Parroquia"];
  var zona_administrativa = institucion.value["Zona_Administrativa"];
  const row = `
  <tr>
    <td>${AMIE}</td>
    <td>${nombre_institucion}</td>
    <td>${provincia}</td>
    <td>${codigo_provincia}</td>
    <td>${codigo_canton}</td>
    <td>${canton}</td>
    <td>${codigo_parroquia}</td>
    <td>${parroquia}</td>
    <td>${zona_administrativa}</td>
  </tr>
`;
  $("#data tbody").append(row);
}

function emptyInputAndData() {
    $("#data tbody").empty();
    $("input").val("")
}