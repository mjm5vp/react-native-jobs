import _ from 'lodash'
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';


export default function(state = [], action) {
  console.log('at reducer')
  switch (action.type) {
    case LIKE_JOB:
      console.log('LIKE_JOB reducer')
      return _.uniqBy([action.payload, ...state ], 'jobkey')
    case CLEAR_LIKED_JOBS:
      return []
    default:
      return state
  }
}
