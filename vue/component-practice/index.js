
Vue.component('students-table', {
    props: ['students'],
    template: `
        <table>
            <tr>
                <th>no</th>
                <th>name</th>
                <th>age</th>
                <th></th>
            </tr>
            <tr v-for="(student, index) in students">
                <td>{{ index + 1 }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
                <td><base-button text="delete" v-on:click="deleteStudent(index)" /></td>
            </tr>
        </table>
    `,
    methods: {
        deleteStudent: function(index) {
            this.$emit('delete-student', index);
        }
    }
});

Vue.component('base-button', {
    inheritAttrs: false,
    props: ['text'],
    template: `
        <button v-on="$listeners">{{ text }}</button>
    `
});

const main = new Vue({
    el: '#main',
    data: {
        students: [
            { name: 'John', age: 20 },
            { name: 'Doe', age: 21 },
            { name: 'Allan', age: 22 },
        ]
    },
    methods: {
        deleteStudent: function(index) {
            this.students.splice(index, 1);
        }
    }
})