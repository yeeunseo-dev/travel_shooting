import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import supabase from "../../util/supabase/supabaseClient";
import PostDetail from "./PostDetail";
import Slider from "./Slider";
import Travel from "./Travel";
const Container = styled.div`
  display: grid;
  grid-template-rows: 700px 1fr;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas: "slider" "post travel";
  gap: 25px;

  div:nth-child(1) {
    grid-column: 1/3;
  }
`;

function PostComponent() {
  const [postDetailDatas, setPostDetailDatas] = useState({});
  const [postImages, setPostImages] = useState([]);
  const [postTags, setPostTags] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("POST")
        .select("*")
        .eq("id", postId);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setPostDetailDatas(data[0]);

        setPostImages(data[0].postImage.split(","));
      }
    };
    const tagFetchData = async () => {
      const { data, error } = await supabase
        .from("TAGS")
        .select("*")
        .eq("postId", postId);
      if (error) console.error(error);
      else {
        console.log(data);
        setPostTags(data);
      }
    };
    fetchData();
    tagFetchData();
  }, [postId]);
  return (
    <Container>
      <Slider postImage={postImages} />
      <PostDetail postDetailData={postDetailDatas} postTags={postTags} />
      <Travel />
    </Container>
  );
}

export default PostComponent;
