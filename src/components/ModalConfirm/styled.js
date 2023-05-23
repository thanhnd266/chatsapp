import styled from "styled-components";
import BaseModal from "../BaseModal";


export const ModalDelete = styled(BaseModal)`
    .ant-modal-body {
        padding: 10px 20px !important;
    }

    .ant-modal-footer {
        .ant-btn-primary {
            background-color: #dd0d0f;
            border-color: #dd0d0f;
        }
    }
`;