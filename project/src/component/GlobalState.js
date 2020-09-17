import { gql } from "apollo-boost";
import category from "../component/Profile1"; //user가 선호하는 카테고리 (배열형태)

import name from "../component/Profile2"; //user name
import year from "../component/Profile2"; //user year
import month from "../component/Profile2"; //user month
import day from "../component/Profile2"; //user day
import location from "../component/Profile2"; //user location
import checkState from "../component/Profile2"; //이벤트 프로모션 수신 동의

import career from "../component/Profile3"; //user career
import education from "../component/Profile3"; //user education
import profile from "../component/Profile3"; //user profile description
//user profile image, user portfolio 아직 추가 안함

$user_like_category = category.toString();
$user_name = name;
$user_birthday = year + month + day;
$user_location = location;
$user_career = career;
$user_education = education;

export const user_profile = gql`
  mutation(
    $user_name: String!
    $user_location: String
    $user_like_category: String
    $user_profile_img: String
    $user_birthday: String
    $user_career: String
    $user_education: String
    $user_career_img: [String]
  ) {
    updateUserProfile(
      user_name: $user_name
      user_location: $user_location
      user_like_category: $user_like_category
      user_profile_img: $user_profile_img
      user_birthday: $user_birthday
      user_career: $user_career
      user_education: $user_education
      user_career_img: $user_career_img
    ) {
      error
      status
    }
  }
`;
