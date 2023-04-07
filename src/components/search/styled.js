import styled from "styled-components";

export const SearchConvStyled = styled.div`
  width: 100%;
  margin-bottom: 10px;

  .search-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 8px 10px 0;

    @media screen and (max-width: 992px) {
      justify-content: center;
      margin: 0;
      height: 54px;

      h3 {
        display: none;
      }
    }

    h3 {
      margin: 0;
    }
  }

  .search-element {
    margin-right: 10px;
    width: 100%;
    display: flex;

    @media screen and (max-width: 992px) {
      display: none;
    }
    @media screen and (max-width: 575px) {
      display: flex;
      margin-top: 16px;
    }

    .search-btn {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 6px 16px;
      background-color: #cfcfcf91;
      color: #918f8f;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;

      &:focus {
        box-shadow: unset;
      }
    }

    .search-input {
      width: 100%;
      margin-right: 8px;

      #search-input {
        border: none;
        outline: none;
        padding: 8px 0;
        width: 100%;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #cfcfcf91;
      }

      @media screen and (max-width: 575px) {
        margin-right: 0;
      }
    }
  }

  .btn-new-message {
    @media screen and (max-width: 575px) {
      width: 100%;
      display: flex;
      align-items: center;
    }

    button {
      padding: 4px 8px;
      background-color: #dedee0;
      color: #333;
      border: none;
      outline: none;
      border-radius: 100%;
      cursor: pointer;
      font-size: 18px;

      &:focus {
        box-shadow: none !important;
      }

      &:hover {
        background-color: #cacacc;
      }

      @media screen and (max-width: 992px) {
        .btn-new-message__big {
          display: none;
        }

        .btn-new-message__small {
          display: block;
        }
      }
    }

    .list-user__online {
      display: none;
      overflow-x: scroll;
      overflow-y: hidden;
      margin-left: 4px;

      .onliner-item {
        margin-left: 16px;
        position: relative;
        cursor: pointer;

        img {
          width: 46px;
          height: 46px;
          object-fit: cover;
          border-radius: 100%;
        }

        .item-image__status {
          position: absolute;
          bottom: -4px;
          right: -4px;

          i {
            border-radius: 100%;
            border: 3px solid #fff;
            font-size: 12px;
            margin-right: 2px;
            color: rgb(118, 235, 8);
          }
        }
      }

      @media screen and (max-width: 575px) {
        display: flex;
      }
    }

    .list-user__online::-webkit-scrollbar {
      display: none;
    }
  }
`;
