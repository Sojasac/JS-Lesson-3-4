var addBtn = document.getElementById("add");
addBtn.className = "add-style"
addBtn.addEventListener('click', function(){
    var condModel = new Conditioner("LG");
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
})