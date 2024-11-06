var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "birthday cake", image: "https://images.unsplash.com/photo-1727807233023-f97a5664d4b8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "moon", image: "https://media.istockphoto.com/id/1465620151/photo/smiling-young-man-texting-on-mobile-phone-leaning-on-her-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRGu6u4Lq1EIfOp5D52MrLo8rstjbsZ0gxypUOz_c74="},
    {name: "car", image: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "old car", image: "https://images.unsplash.com/photo-1463462927315-fb10af2c68d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "girl in car", image: "https://media.istockphoto.com/id/1133366361/photo/woman-driving-car.webp?s=2048x2048&w=is&k=20&c=o58coct-ybMJst72Po1ForcJpjOhTOaVHa4O5Vk78sM="},
    {name: "car with man", image: "https://media.istockphoto.com/id/1465620151/photo/smiling-young-man-texting-on-mobile-phone-leaning-on-her-car.jpg?s=2048x2048&w=is&k=20&c=I_xZ6FEs8rFgE7GD_ie_Co67drnHjBk0jBD_JdQC0-c="},
    {name: "man", image: "https://media.istockphoto.com/id/1177420911/photo/portrait-of-indian-man-wearing-suit-standing-near-his-luxury-black-car-and-talking-on.jpg?s=612x612&w=0&k=20&c=f3YXApnCy-VPSzFdQusFoOLIgvrXPDjhAybBsHHvnHQ="},
]


function showTheCards(){
    var clutter =""
    var i = 1
    arr.forEach(function(val){
        clutter += `<div class="box"><img class="cursor-pointer" src="${val.image}">
        </div>`
        console.log(i++);
    })
    document.querySelector(".container").innerHTML = clutter;
}


function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();

showTheCards()