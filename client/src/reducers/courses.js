import _ from 'lodash'
import {
  FETCH_COURSES, FETCH_COURSE, SAVE_COURSE, DELETE_COURSE,
  CREATE_COURSE, CLEAR_NEW_COURSE
} from 'actions'

export const courses = (state = {
  isFetching: false,
  caughtError: false,
  message: null,
  data: {},
  cached: false
}, action) => {
  switch(action.type) {
    case FETCH_COURSES:
      if(action.courses) {
        state.data = _.mergeWith(state.data, action.courses, (a, b) => {
          if(a && a.cached) return a
          return b
        })
      }

      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: state.data,
        cached: true
      }
    case FETCH_COURSE:
      if(action.course) {
        action.course.cached = true
        state.data[action.course._id] = action.course
      }

      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: state.data,
        cached: state.cached
      }
    case SAVE_COURSE:
      if(action.course) {
        action.course.cached = true
        state.data[action.course._id] = action.course
      }

      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: _.omit(state.data, '-1'),
        cached: state.cached
      }
    case CREATE_COURSE:
      state.data[-1] = {
        _id: -1,
        title: '',
        description: '',
        thumbnail: ''
      }

      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: state.data,
        cached: state.cached
      }
    case DELETE_COURSE:
      if(action.courseId) delete state.data[action.courseId]

      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: state.data,
        cached: true
      }
    case CLEAR_NEW_COURSE:
      return {
        isFetching: action.isFetching,
        caughtError: action.caughtError,
        error: action.error,
        data: _.omit(state.data, '-1'),
        cached: state.cached
      }
    default:
      return state
  }
}
