import styled from "styled-components";

export const CustomMessageStyled = styled.div`
    padding: 20px;
    display: inline-flex;
    flex-direction: column;
    align-items: ${(props) => props.$isCurrentUser ? 'end' : 'start'};
    width: 100%;

    .sender-info {
        display: flex;
        align-items: center;
        flex-direction: ${(props) => props.$isCurrentUser ? 'row-reverse' : 'unset'};

        .avatar-chat {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            margin: ${(props) => props.$isCurrentUser ? '0 0 0 8px' : '0 8px 0 0'};
        }
    }

    .media-section {
        margin-top: 10px;
    }
`;

export const CustomChatMessage = styled.div`
    background: ${(props) => props.$isCurrentUser ? '#1877f2' : '#d9d9d9'};
    color: ${(props) => props.$isCurrentUser ? '#fff' : '#333'};
    border-radius: 8px;
    margin-top: 10px;
    padding: 8px;
    display: inline-block;
    margin-left: 20px;

    p {
        margin: 0;
    }
`;