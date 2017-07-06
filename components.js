Vue.component('student-data', {
  props: ['name', 'short-desc', 'idx'],
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">{{ name }}</div>
    <div class="panel-body">
      {{ shortDesc }}
    </div>
    <button type="btn" class="btn btn-sm" @click="killStudent">Delete</button>
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
    @killed="removeStudent">
    </student-data>
  </div>`,
  methods: {
    removeStudent (idx) {
      console.log('removed ', idx)
      this.$emit('someone-killed', idx)
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
  </div>`
})