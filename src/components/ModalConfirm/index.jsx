import { ModalDelete } from "./styled";

const ModalConfirm = ({ text, ...props }) => {

    return (
        <ModalDelete 
            title="Remove Post" 
            width="600px" 
            centered={false} 
            {...props}
        >
            {text}
        </ModalDelete>
    )
}

export default ModalConfirm;