new Vue({
  el: '#app',
  data: {
    msg: 'Hello World!',
    students: [
        {
          name: 'Nugraha',
          shortDesc: 'Masak Burung'
        },
        {
          name: 'Sidik Riders',
          shortDesc: 'Godain Cewek'
        },
        {
          name: 'Jumadi',
          shortDesc: 'Jualan Burung'
        }
      ]
  },
  methods: {
    kuburin (idx) {
      this.students.splice(idx, 1)
    }
  }
})