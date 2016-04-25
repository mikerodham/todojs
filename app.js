new Vue({
    el: '#tasks',
    data: {
        tasks: [],
        newTask: ''
    },

    computed: {
        completions: function() {
            return this.tasks.filter(function(task) {
                return task.completed;
            });
        },

        remaining: function() {
            return this.tasks.filter(function(task) {
                return !task.completed;
            });
        },
    },

    filters: {
        inProgress: function(tasks) {
            return tasks.filter(function(task) {
                return !task.completed;
            });
        },

        taskCompleted: function(tasks) {
            return tasks.filter(function(task) {
                return task.completed;
            });
        },
    },

    methods: {
        addTask: function(event) {
            event.preventDefault();

            if (!this.newTask) return;

            this.tasks.push({
                body: this.newTask,
                completed: false,

            });

            this.newTask = '';
        },

        removeTask: function(task) {
            this.tasks.$remove(task);
        },

        editTask: function(task) {
            this.removeTask(task);
            this.newTask = task.body;
            this.$$.newTask.focus();

        },

        toggleTask: function(task) {
            task.completed = !task.completed;
        },

        completeAll: function() {
            this.tasks.forEach(function(task) {
                task.completed = true;
            });
        },

        incompleteAll: function() {
            this.tasks.forEach(function(task) {
                task.completed = false;
            });
        },

        deleteAll: function(tasks) {
            this.tasks.splice(tasks);
        },

    }
});
