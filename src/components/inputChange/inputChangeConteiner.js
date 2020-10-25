import { compose } from 'redux';
import { connect } from 'react-redux';
import View from './inputChange';
import {calculate } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = { calculate }

const InputChangeConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View);

export default InputChangeConteiner;