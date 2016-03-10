import { connect } from 'react-redux'
import Result from '../components/Result'
import { closeBox } from '../redux/modules/quiz'
import { resultProps } from '../redux/select'

export default connect(resultProps, { closeBox })(Result)
