import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LandingView from "./Landing.view";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingView);