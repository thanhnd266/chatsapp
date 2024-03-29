import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }

  .app-name {
    font-size: 30px;
    cursor: pointer;

    h2 {
      color: #001529;
      font-weight: 700;
      margin: 0;
    }
  }

  .nav-additional {
    display: flex;

    .nav-noti {
      font-size: 24px;
      margin: 0 40px;
      padding: 0 20px;
      cursor: pointer;
      border-radius: 6px;
      color: #918f8f;

      @media screen and (max-width: 992px) {
        margin: 0 10px;
      }

      &:hover {
        background-color: rgb(233, 230, 230);
      }
    }

    .nav-user {
      display: flex;
      align-items: center;

      .nav-user-dropdown {
        .nav-user-info {
          cursor: pointer;

          img {
            margin-right: 6px;
            border-radius: 50%;
            overflow: hidden;
            width: 36px;
            height: 36px;

            @media screen and (max-width: 575px) {
              margin-right: 20px;
            }
          }

          .btn-user-dropdown {
            background-color: unset;
            color: #918f8f;
            border: none;
            font-size: 18px;

            @media screen and (max-width: 575px) {
              display: none;
            }

            &:focus {
              box-shadow: unset;
            }

            &:after {
              content: "";
              margin-left: 0.8rem;
            }
          }
        }

        .btn-mobi__menu {
          border-radius: 4px;
          background: #f0f2f5;
          color: #333;
          padding: 2px 12px;
          display: none;

          @media screen and (max-width: 575px) {
            display: block;
          }
        }

        .nav-user-additional {
          margin-top: 10px;
          background-color: #f0f2f5;

          button {
            cursor: pointer;

            &:hover {
              background-color: #001529;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
