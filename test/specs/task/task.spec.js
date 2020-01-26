const TaskPage = require('../../pageObjects/task.page');

describe('TO-DO App Task Cases', function () {

    it("Should be able to add new task successfully", function () {
        browser.pause(3000)
        TaskPage.addNewTodo();
        browser.pause(3000)
    });

    it("Should be able to mark as completed", function () {
        TaskPage.markCompleted();
    });

    it("Should be able to edit task", function () {
        TaskPage.editTodo();
    });

    it("Shoul be able to over write task", function () {
        TaskPage.overwriteTodo();
    });

    it("Should be able to delete task", function () {
        TaskPage.deleteToDo();
    });

});