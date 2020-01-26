const Page = require('./page');
const data = require('../data/test_data');

const TaskPage = Object.create(Page, {

    /*** define elements ***/

    addNew_Button: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.ImageButton');
            return selector;
        }
    },

    title_Input: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.EditText[1]');
            return selector;
        }
    },

    desc_Input: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.EditText[2]');
            return selector;
        }
    },

    save_Button: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.ImageButton');
            return selector;
        }
    },

    completed_CheckBox: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout/android.widget.CheckBox');
            return selector;
        }
    },

    list_Button: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout/android.widget.TextView');
            return selector;
        }
    },

    edit_Button: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.ImageButton');
            return selector;
        }
    },

    delete_Button: {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/androidx.appcompat.widget.ah/android.widget.TextView');
            return selector;
        }
    },

    addNewTodo: {
        value: function () {
            this.addNew_Button.click();
            this.title_Input.addValue(data.title.text);
            this.desc_Input.addValue(data.desc.text);
            this.save_Button.click();

        }
    },

    markCompleted: {
        value: function () {
            this.completed_CheckBox.click();
        }
    },

    editTodo: {
        value: function () {
            this.list_Button.click();
            this.edit_Button.click();
            this.desc_Input.addValue(data.desc.text_edit);
            this.save_Button.click();
        }
    },

    overwriteTodo: {
        value: function () {
            this.list_Button.click();
            this.edit_Button.click();
            this.desc_Input.setValue(data.desc.text_overwrite);
            this.save_Button.click();
        }
    },

    deleteToDo: {
        value: function () {
            this.list_Button.click();
            this.delete_Button.click();
        }
    }

});

module.exports = TaskPage;