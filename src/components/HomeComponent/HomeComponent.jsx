import { useEffect } from "react";
import { Link } from "react-router-dom";
function HomeComponent() {
  useEffect(() => {}, []);
  return (
    <div>
      메인 페이지입니다
      <Link to="/post/1">링크</Link>
    </div>
  );
}
export default HomeComponent;
