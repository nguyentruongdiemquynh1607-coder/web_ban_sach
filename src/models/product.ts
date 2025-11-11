// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Mưa Đỏ",
    price: 153.0,
    description:
      "Những miền cảm xúc đan xen giữa nụ cười - nước mắt, nỗi đau - niềm vui, sự sống - cái chết, những thăng hoa - mất mát, sự hy sinh của những người cha, người chồng, người con, những người lính, những đồng chí, đồng đội đã không tiếc máu xương trong cuộc chiến đấu 81 ngày đêm bảo vệ thành Cổ Quảng Trị",
    category: "Sách",
    image: "https://cdn1.fahasa.com/media/catalog/product/m/u/muado.jpg",
    rating: {
      rate: 5.0,
      count: 1000,
    },
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    price: 113.0,
    description:
      "Đắc nhân tâm của Dale Carnegie là quyển sách của mọi thời đại và một hiện tượng đáng kinh ngạc trong ngành xuất bản Hoa Kỳ",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/d/n/dntttttuntitled.jpg",
    rating: {
      rate: 5.0,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Cây Cam Ngọt Của Tôi",
    price: 79.99,
    description:
      "Nếu tuổi thơ là một món quà, thì với Zezé, đó là một món quà có cả vị ngọt lẫn đắng.",
    category: "Sách",
    image: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_217480.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Nhà Giả Kim",
    price: 112.99,
    description:
      "Santiago – một chàng trai chăn cừu trẻ tuổi, rời quê hương để theo đuổi giấc mơ tìm kho báu ở Kim Tự Tháp Ai Cập. Trên hành trình ấy, anh gặp gỡ nhiều người, từ ông vua thông thái, người buôn pha lê đến Nhà Giả Kim huyền bí. Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg",
    rating: {
      rate: 4.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Đời Thừa",
    price: 158.99,
    description:
      "Trong mảng sáng tác về đề tài tiểu tư sản của Nam Cao, truyện ngắn Đời Thừa có một vị trí đặc biệt. Đời Thừa đã ghi lại chân thật hình ảnh buồn thảm của người tri thức tiểu tư sản nghèo, nhà văn Nam Cao đã phác hoạ rõ nét hình ảnh vừa bi vừa hài của lớp người này trở nên đầy ám ảnh. Giá trị của Đời Thừa không phải chỉ ở chỗ đã miêu tả chân thật cuộc sống nghèo khổ, bế tắc của người trí thức tiểu tư sản nghèo, đã viết về người tiểu tư sản không phải với ngòi bút vuốt ve, thi vị hoá, mà còn vạch ra cả những thói xấu của họ v.v....",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236425834.jpg",
    rating: {
      rate: 5.0,
      count: 1000,
    },
  },
  {
    id: 6,
    title: "Rừng Nauy",
    price: 168.99,
    description:
      "Câu chuyện bắt đầu từ một chuyến bay trong ngày mưa ảm đạm, một người đàn ông 37 tuổi chợt nghe thấy bài hát gắn liền với hình ảnh người yêu cũ, thế là quá khứ ùa về xâm chiếm thực tại.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235242425.jpg",
    rating: {
      rate: 5.0,
      count: 1500,
    },
  },
  {
    id: 7,
    title: "Số Đỏ",
    price: 69.9,
    description:
      "Số đỏ là một tiểu thuyết NXB Văn Học của nhà văn Vũ Trọng Phụng, đăng ở Hà Nội báo từ số 40 ngày 7 tháng 10 1936 và được in thành sách lần đầu vào năm 1938.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604627.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Ngôi Nhà Trên Phố Mango",
    price: 69.99,
    description:
      "Được giới phê bình ca ngợi, được độc giả mọi lứa tuổi yêu thích, được đưa vào chương trình giảng dạy ở mọi cấp từ tiểu học tới đại học và được dịch ra nhiều thứ tiếng trên thế giới, Ngôi nhà trên phố Mango là câu chuyện cuốn hút lạ kỳ về Esperanza Cordero – một cô bé lớn lên tại khu người Mỹ Latinh ở thành phố Chicago.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235241381.jpg",
    rating: {
      rate: 4.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Ngày Xửa Ngày Xưa Có Một Trái Tim Vụn Vỡ",
    price: 65.55,
    description:
      "Nàng Evangeline Fox vốn tin tưởng vào hạnh phúc vĩnh hằng. Cho đến khi nàng hay tin chân ái đời mình đã cùng ai khác lập hôn, ảo mộng của nàng cũng từ đó tan vỡ. Mong muốn ngăn trở đám cưới và hàn gắn trái tim vụn vỡ, Evangeline lập khế ước với Hoàng tử Trái Tim quyến rũ mà tàn độc. Hoàng tử chấp nhận ban cho nàng ước nguyện, đổi lại, hắn yêu cầu nàng phải hy sinh ba nụ hôn với ba kẻ hoàn toàn xa lạ. Nhưng sau nụ hôn giao hẹn đầu tiên, Evangeline hiểu rõ, mặc cả với Thần Mệnh bất tử là một canh bạc vô cùng hiểm ác, bởi Hoàng tử Trái Tim còn đòi hỏi nhiều hơn những gì nàng đã cam kết. Liệu những kế hoạch quỷ quyệt của hắn sẽ dẫn nàng đến với hạnh phúc trường cửu hay bi kịch đau đớn?",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a_1_ng_y_x_a_ng_y_x_a_c_m_t_tr_i_tim_v_n_v_.png?_gl=1*1sk8z1e*_ga*NjAzMjc3NzYzLjE3NjI4MjEzMjI.*_ga_D3YYPWQ9LN*czE3NjI4MjEzMjEkbzEkZzEkdDE3NjI4MjE5OTYkajUwJGwwJGgw*_gcl_aw*R0NMLjE3NjI4MjEzMjUuQ2p3S0NBaUF0OGJJQmhCcEVpd0F6SDF3NlMwUXRjX09oV3RYTmk5Y196XzY2WHBvZFJibHZVaDk5TVJYRHRkUnBEV0ZGOXJVZ2Z5TldSb0NEdTBRQXZEX0J3RQ..*_gcl_au*MTQzNDA2NDI3MC4xNzYyODIxMzIy*_ga_460L9JMC2G*czE3NjI4MjEzMjIkbzEkZzEkdDE3NjI4MjIwMDEkajQ1JGwwJGgxMjc2NjE5NTI3",
    rating: {
      rate: 4.6,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Cuộc Đời Của Pi",
    price: 64.89,
    description:
      "Mọi việc ở đời có bao giờ diễn ra như ta vẫn tưởng, nhưng biết làm sao. Cuộc đời đem cho ta cái gì thì ta phải nhận cái đó và chỉ còn cách làm cho chúng tốt đẹp nhất mà thôi. Cuộc đời của Pi mở đầu với lời chào ấn tượng của tác giả, Yan Martel và hành trình tưởng như bế tắc khi ông mò mẫm đi tìm một câu chuyện cho sự nghiệp của mình. Lời chào ngắn ngủi ấy giúp người đọc hình dung được hoàn cảnh ra đời của cuốn sách và chẳng cần thắc mắc gì nhiều đến bối cảnh của câu chuyện. Và như thế, một Ấn Độ từ những năm 60, 70 của thế kỷ trước sống dậy cùng Pi, cùng vườn thú Poddicherry và cùng những ngày thơ ấu rối rắm và kỳ lạ.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235244603.jpg",
    rating: {
      rate: 4.5,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Thiên Thần Sa Ngã",
    price: 28.99,
    description:
      "Dưới mái vòm tráng lệ của Vương cung thánh đường Thánh Peter, một người phụ nữ xinh đẹp nằm bất động, thân thể dập nát. Cô đã chết. Đang ẩn thân ở Vatican phục chế bức họa kiệt tác của Caravaggio, Gabriel Allon được thư ký riêng của Đức Giáo hoàng yêu cầu âm thầm điều tra cái chết này. Nhà phục chế, điệp viên trứ danh của Israel mau chóng lần ra sự can thiệp của một tổ chức tội phạm quốc tế chuyên buôn bán cổ vật bị cướp. Và đằng sau đó là một âm mưu kinh hoàng có thể nhấn chìm thế giới vào biển lửa.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/n/x/nxbtre_full_12042020_040433.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "1Q84",
    price: 26.85,
    description:
      "Cuối cùng thì Aomame và Tengo có gặp được nhau không? Tim người đọc vừa căng ra vừa thắt lại vì câu hỏi đó. Rốt cuộc, tình yêu của hai người dành cho nhau có đủ sức thắng nổi những lực ác đang bủa vây hai người và từng giây từng phút đe dọa hủy diệt họ? 1Q84 không chỉ là một câu chuyện vừa hấp dẫn vừa khơi gợi suy tư về bản chất của thế giới và mối quan hệ thiện, ác. Nó còn là bài ca tuyệt đẹp về tình yêu. Nó khẳng định rằng, theo nghĩa nào đó, chiến thắng hay thất bại của tình yêu là chiến thắng hay thất bại của điều thiện.",
    category: "Sách",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235238626.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
