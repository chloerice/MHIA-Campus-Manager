import { connect } from 'react-redux'

import AllCampuses from '../components/campuses/AllCampuses'

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(AllCampuses)
