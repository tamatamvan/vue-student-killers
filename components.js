Vue.component('student-data', {
  props: ['name', 'short-desc', 'idx'],
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">{{ name }}</div>
    <div class="panel-body">
      <strong>Hobby:</strong> {{ shortDesc }}
    </div>
    <div class="panel-footer">
      <button type="btn" class="btn btn-xs btn-danger" @click="killStudent"><span class="glyphicon glyphicon-remove"></span>Kill</button>
    </div>
  </div>`,
  methods: {
    killStudent () {
      console.log(this.idx)
      this.$emit('killed', this.idx)
    }
  }
})

Vue.component('app-container', {
  props: ['msgChild', 'students'],
  template: `
  <div class="col-md-6">
    <h1>{{ msgChild }}</h1>
    <student-data
    v-for="(student, index) in students" 
    :name="index+1 + '. ' + student.name" 
    :short-desc="student.shortDesc" 
    :idx="index"
    :key="index"
    @killed="kuburin">
    </student-data>
  </div>`,
  methods: {
    kuburin (idx) {
      this.students.splice(idx, 1)
    }
  }
})

Vue.component('app-container1', {
  props: ['msgChild', 'students'],
  template: `
  <div class="col-md-6">
    <h1>{{ msgChild }}</h1>
    <student-data
    v-for="(student, index) in students" 
    :name="index+1 + '. ' + student.name" 
    :short-desc="student.shortDesc" :idx="index ":key="index">
    </student-data>
  </div>`,
  methods: {
    kuburin (idx) {
      this.students.splice(idx, 1)
    }
  }
})