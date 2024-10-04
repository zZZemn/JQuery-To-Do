$(document).ready(function () {
  var toDos = [];

  const displayToDos = () => {
    var ul = $("#ToDoContainer");

    $(ul).html("");

    for (let i = 0; i < toDos.length; i++) {
      $(ul).append(
        "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
          "<span>" +
          toDos[i] +
          "</span>" +
          "<div><button class='btn btn-sm btn-danger BtnDeleteToDo' data-id='" +
          i +
          "'>Del</button>" +
          "<button class='btn btn-sm btn-success ms-1 BtnEditToDo' data-id='" +
          i +
          "'>Edit</button></div>" +
          "</li>"
      );
    }
  };

  const closeEdit = () => {
    $("#EditContainer").removeClass("d-none");
    $("#EditContainer").addClass("d-none");
  };

  $("#BtnAddToDo").click(function (e) {
    e.preventDefault();

    var inputToDo = $("#InputToDo").val();

    toDos.push(inputToDo);

    displayToDos();
  });

  $(document).on("click", ".BtnDeleteToDo", function (e) {
    e.preventDefault();

    var id = $(this).data("id");
    toDos.splice(id, 1);

    displayToDos();
  });

  $(document).on("click", ".BtnEditToDo", function (e) {
    e.preventDefault();
    var id = $(this).data("id");

    $("#InputEditToDo").val(toDos[id]);

    $("#InputEditTodoId").val(id);

    $("#EditContainer").removeClass("d-none");
  });

  $("#BtnCancelEdit").click(function (e) {
    e.preventDefault();

    closeEdit();
  });

  $("#BtnSaveEdit").click(function (e) {
    e.preventDefault();

    var id = $("#InputEditTodoId").val();
    var editedTodo = $("#InputEditToDo").val();

    toDos[id] = editedTodo;

    closeEdit();

    displayToDos();
  });
});
