$(function () {
    $(".boton").click(function () {
        var pokemon = $("input").val();
        console.log(pokemon);

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
            method: "GET",
            xhrFields: {
                responseType: "text"

            },
        statusCode: {
            500: function (xhr) {
                alert(xhr);
            },
            200: function (data) {

                console.log(data)
                $("<img class='photo datos' src='" + data.sprites.front_default + "'/>").prependTo(".container");
                $("<p class='nombre datos'>Nombre: " + data.name + "</p>").prependTo(".container");
                $("<p class='id datos'>Id en pokedex: " + data.id + "</p>").prependTo(".container");
                // $("<p class='tipo datos'>Tipo: " + data.abilities[{0[{ability}]}] + "</p>").prependTo(".container");

            }
        }
        });

    });
});