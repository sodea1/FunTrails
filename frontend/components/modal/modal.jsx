import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateRevContainer from '../reviews/create_rev_container';

function Modal ({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch(modal) {
        case 'create':
            component = <CreateRevContainer />
        case 'edit':
            component = <EditRevContainer />
        default:
            break;
    }

    
    return (
        <div>
            {component}
        </div>
    )
    
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);