$(document).ready(function(){
    $("#s1").show();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
    $("#btn1").click(function(){
        $("#s1").show();
        $("#s2").hide();
        $("#s3").hide();
        $("#s4").hide();
        $("#s5").hide();
        $("#s6").hide();
    });
    $("#btn2").click(function() {
        $("#s1").hide();
        $("#s2").show();
        $("#s3").hide();
        $("#s4").hide();
        $("#s5").hide();
        $("#s6").hide();
    });
    $("#btn3").click(function() {
        $("#s1").hide();
        $("#s2").hide();
        $("#s3").show();
        $("#s4").hide();
        $("#s5").hide();
        $("#s6").hide();
    });
    $("#btn4").click(function() {
        $("#s1").hide();
        $("#s2").hide();
        $("#s3").hide();
        $("#s4").show();
        $("#s5").hide();
        $("#s6").hide();
    });
    $("#btn5").click(function() {
        $("#s1").hide();
        $("#s2").hide();
        $("#s3").hide();
        $("#s4").hide();
        $("#s5").show();
        $("#s6").hide();
    });
    $("#btn6").click(function() {
        $("#s1").hide();
        $("#s2").hide();
        $("#s3").hide();
        $("#s4").hide();
        $("#s5").hide();
        $("#s6").show();
    });
});