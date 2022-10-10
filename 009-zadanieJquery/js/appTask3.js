$(document).ready(function(){
    $("#classDisplay5").click(function(){
        if(this.checked)
        {
            $(".editingText").addClass("display-5");

        }
        else
        {
            $(".editingText").removeClass("display-5");

        }
    });

    $("#classP3").click(function(){
        if(this.checked)
        {
            $(".editingBox").addClass("p-3");
        }
        else
        {
            $(".editingBox").removeClass("p-3");
        }
    });

    $("#classMonospace").click(function(){
        if(this.checked)
        {
            $(".editingText").addClass("font-monospace");
        }
        else
        {
            $(".editingText").removeClass("font-monospace");
        }
    });

    $("#classMonospace").click(function(){
        if(this.checked)
        {
            $(".editingText").addClass("font-monospace");
        }
        else
        {
            $(".editingText").removeClass("font-monospace");
        }
    });

    $("#classTextCenter").click(function(){
        if(this.checked)
        {
            $(".editingText").addClass("text-center");
        }
        else
        {
            $(".editingText").removeClass("text-center");
        }
    });

    $(".changeColor").click(function(){
        let bgColor = $(this).val();
        if(bgColor)
        {
            $(".editingBox").removeClass("bg-default bg-primary bg-secondary bg-info bg-success bg-warning bg-danger bg-dark")
            $(".editingBox").addClass(bgColor);
            bgColor = "";
        }
        
    });

    $(".changeTextColor").click(function()
    {
        let textColor = $(this).val();
        if (textColor)
        {
            $(".editingText").removeClass("text-default text-primary text-secondary text-info text-success text-warning text-danger text-dark text-light");
            $(".editingText").addClass(textColor);
        }
    });
});