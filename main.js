var array_of_names = [];
function submit()
{
    for (var j=1; j <= 4; j++){
    var name1 = document.getElementById("student"+j).value;
    array_of_names.push(name1);    
    //unsorted_array.push(name1);\
    console.log ("name1")
    }
    console.log(array_of_names);

    var length_array = array_of_names.length;
    console.log("length_array");
    var display_std = [];
    for(var k=0; k < length_array; k++){
        display_std.push("<h4>Name - "+ array_of_names[k]+ "</h4>");
        console.log("display_array");
        console.log(display_std);
    }
    console.log("display_array");
    document.getElementById("display_array").innerHTML = display_std;
    var remove_commas = display_std.join(" ");
    console.log("remove_commas");
    document.getElementById("display_array_with_no_comma").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    array_of_names.sort();
    console.log(array_of_names);
    var display_array_sorting=[];
    var length_array = array_of_names.length;
    console.log("length_array");
    for(var k=0; k < length_array; k++){
        display_array_sorting.push("<h4>Name - "+array_of_names[k]+"</h4>");
        console.log("display_array_sorting");
    }
    
    var remove_commas = display_array_sorting.join(" ");
    console.log("remove_commas");
    document.getElementById("display_array_with_no_comma").innerHTML = remove_commas;

}

function unsorting()
{
    document.getElementById("display_name").innerHTML = unsorted_array;

}