$(function () {
    $(".boton").click(function () {
        var pokemon = $("input").val().toLowerCase();
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


                    $("<img class='photo datos' src='" + data.sprites.front_default + "'/>").appendTo(".info");
                    $("<p class='name datos'>Nombre: " + data.name + "</p>").appendTo(".info");
                    $("<p class='id datos'>Id en pokedex: " + data.id + "</p>").appendTo(".info");

                    var tipos = data.types.length
                    for (var x = 0; x < tipos; x++) {
                                $('<li class="list">&nbsp;'  + data.types[x].type.name + '</li>').appendTo(".lista");$(".lista").css("display", "flex");
                    }
                    $("<p class='height datos'>Altura: " + (data.height * 0.1) + "</p>").appendTo(".info");

                }
            }
        });

    });
});