<script type="text/javascript" charset="utf-8">
    function one(id){
        var op = document.getElementById(id).innerHTML;
        if (op.length == 0 || op.length == 2){
            document.getElementById(id).innerHTML += "1";
        }
    };

    function zero(id){
        var op = document.getElementById(id).innerHTML;
        if (op.length == 0 || op.length == 2){
            document.getElementById(id).innerHTML += "0";
    };

    function add(id){
        var op = document.getElementById(id).innerHTML;
        if (op.length == 1){
            document.getElementById(id).innerHTML += "+";
        }
    };

    function equals(id){
        var op = document.getElementById(id).innerHTML;
        if (op.length == 3){
            var nums = op.split("+");
            var addition = parseInt(nums[0]) + parseInt(nums[1]);
            if (addition == 2){
                addition = 0;
            }
            document.getElementById(id).innerHTML += "=" + addition;
        }
    };

    function clearDisplay(){
        var display = document.getElementById("display");
        display.removeChild(display.firstChild);
    };
</script>
