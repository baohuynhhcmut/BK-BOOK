
const MoreDetail = () => {
    return (
        <div className="grid grid-cols-6 mt-5 mx-auto">
  {/* First empty div (occupies 2 columns) */}
  <div className="col-span-1"></div>

  {/* Content div (occupies 2 columns) */}
  <div className="col-span-4 pl-10">
  <div className="p-3 bg-blue-500">
     <h2 className="text-2xl text-white">Thông tin chi tiết</h2>
  </div>
    <div className="flex">
      <p className="text-black dark:text-gray-400 mt-5 mr-2">Mã Sách:</p>
      <p className="text-blue-500 dark:text-gray-400 mt-5">8935250707640</p>
    </div>
    <div className="flex">
      <p className="text-black dark:text-gray-400 mt-5 mr-2">Nhà Xuất Bản:</p>
      <p className="text-blue-500 dark:text-gray-400 mt-5">IPM, hà Nội</p>
    </div>
    <div className="flex">
      <p className="text-black dark:text-gray-400 mt-5 mr-2">Tác Giả:</p>
      <p className="text-blue-500 dark:text-gray-400 mt-5">REKI KAWAHARA</p>
    </div>
    <div className="flex">
      <p className="text-black dark:text-gray-400 mt-5 mr-2">Năm Xuất Bản:</p>
      <p className="text-blue-500 dark:text-gray-400 mt-5">2022</p>
    </div>
    <div className="flex mb-5">
      <p className="text-black dark:text-gray-400 mt-5 mr-2">Ngôn Ngữ:</p>
      <p className="text-blue-500 dark:text-gray-400 mt-5">Tiếng Việt</p>
    </div>

    <span className="text-black text-xs">
    Dễ thấy Sword Art Online có không gian kể chuyện rất rộng, lại tỉ mỉ đi theo từng tầng, tạo cảm giác tận hưởng rõ rệt cho người chơi và cả người đọc.

Câu chuyện hiện đã đến tầng 7, vẫn là tầng từng trải nghiệm trong giai đoạn chạy thử của SAO, nói cách khác, cho đến đây, Kirito vẫn biết nhiều hiểu rộng hơn Asuna. Thành ra theo thói quen, vừa tới nơi Asuna đã lập tức hỏi cậu xem chỗ ăn chỗ chơi nào ngon. So với các lần trước, lần này Kirito tỏ ra ngần ngừ rõ rệt.

Không phải cậu không muốn cho cô biết, mà là tầng này đã để lại cho cậu dư vị cay đắng đến nỗi tiềm thức luôn muốn chối bỏ hết thông tin. Cho đến lúc sắp ra bãi săn bên ngoài, nhìn thấy có tận hai cổng để đi, Kirito mới khôi phục kí ức. Một cổng ốp phù điêu hình người sang trọng nâng ly rượu, mở ra con đường thênh thang phơi phới. Một cổng là người ăn mặc lam lũ gò mình đi dưới gió táp mưa sa, hứa hẹn hành trình gập ghềnh.

Sau khi nghe giải thích, Asuna chọn đường gió táp mưa sa…

Tập 7 chứa đựng đôi chút suy luận điều tra dựa trên một manh mối vô lý, gợi nhớ không khí tập làm thám tử của Kirito khi gặp án mạng trong khu vực an toàn ở Sword Art Online 008 “Early and Late”.
    </span>
  </div>

  {/* Third empty div (occupies 2 columns) */}
  <div className="col-span-1"></div>
</div>
    );
}

export default MoreDetail;
