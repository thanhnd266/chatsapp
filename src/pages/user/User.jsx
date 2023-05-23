import BannerImage from "@/components/User/BannerImage";
import Profile from "@/components/User/Profile";
import { UserStyled } from "./styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "@/config/axios";

const User = () => {

  const { id } = useParams();
  const [userPage, setUserPage] = useState()

  useEffect(() => {
    const getUserPage = async () => {
      try {
        const res = await axiosClient.get(`/user/${id}`)
        if(res.status_code === 200) {
          setUserPage(res.data)
        }
      } catch(err) {
        console.log(err)
      }
    }

    getUserPage()
  }, [id])

  return (
    <UserStyled>
      {userPage && <BannerImage userPage={userPage} />}
      {userPage && <Profile userPage={userPage} />}
    </UserStyled>
  );
};

export default User;
