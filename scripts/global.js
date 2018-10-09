$(function() {
    var url = $.url();
    var file = url.attr("file");
    if(file == ""){
        $("#menu_top").addClass("current");
    }else if(file == "tfugevent.html"){
        $("#menu_event").addClass("current");
    }else if(file == "organization.html"){
        $("#menu_organization").addClass("current");
    }
});
