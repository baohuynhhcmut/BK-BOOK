
import HeaderUser from "../../components/Header user";
import DetailBook from "../../components/Book detail";
import MoreDetail from "../../components/More detail/index.";
import Comment from "../../components/Comment";

const BookDetail = () => {
    return (
        <div className="flex flex-col ">
            <HeaderUser />

            <DetailBook />

            <MoreDetail />

            <Comment />
        </div>
    );
}

export default BookDetail;
