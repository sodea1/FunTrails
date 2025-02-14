import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateRevContainer from '../reviews/create_rev_container';
import EditRevContainer from '../reviews/edit_rev_container';

function Modal ({ modal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch(modal.formType) {
        case 'create':
            component = <CreateRevContainer />
            break;
        case 'edit':
            component = <EditRevContainer review={modal.review} />
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