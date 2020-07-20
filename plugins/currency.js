import Vue from 'vue'

Vue.filter('formatAmount', value => {
  return new Intl.NumberFormat().format(value)
})
