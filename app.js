new Vue({
  el: '#app',
  data: {
    classA: 'Ini kelas A',
    classB: 'Ini kelas B',
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