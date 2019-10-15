$(document).ready(function() {
    $("#section").on("click", "li", function(e){
        $(".content").removeClass("expand")
        $(this).find("+ .content").addClass("expand")
    })
})
