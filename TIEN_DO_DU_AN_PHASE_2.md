# Báo Cáo Tiến Độ Dự Án - Phase 2 (Cập nhật UI/UX SaaS)

*Thời gian: Tháng 4 năm 2026*

Tài liệu này ghi nhận những thay đổi và cải tiến mới nhất được thực hiện trong **Giai đoạn 2** của quá trình phát triển UI/UX dành cho AI Study Assistant. Mục tiêu của bản cập nhật này là tinh chỉnh giao diện Glassmorphism ban đầu để đạt tiêu chuẩn của một **SaaS Dashboard chuyên nghiệp, dễ sử dụng, khả năng tiếp cận (accessibility) cao và có độ tương phản tốt**.

---

## 1. Cải Tiến Hệ Thống Design & CSS (`globals.css`)
- **Giảm tải Gradient (Gradient Overload):** Thuần hóa background `bg-ethereal` có màu sắc quá gắt bằng cách giảm độ mờ (opacity trần) của các radial-gradient. Kết quả mang lại một lớp nền pastel mượt mà, giúp các nội dung chính trên màn hình nổi bật, không gây xao nhãng.

## 2. Thư Viện Icon Tiêu Chuẩn (Lucide React)
- **Thay thế hoàn toàn Material Symbols dạng Text:** Lỗi hiển thị icon bằng chuỗi văn bản thuần túy (ví dụ: `book_5`, `smart_toy`) đã được loại bỏ.
- Đã cài đặt thư viện `lucide-react`. Toàn bộ giao diện được đồng bộ bằng vector SVG icon sắc nét, hoạt động ổn định trên mọi môi trường và tự động thích ứng với theme sáng/tối.

## 3. Nâng Cấp Giao Diện Thành Phần (Components)

### A. Sidebar (`Sidebar.tsx`)
- **Tone màu thanh lịch:** Chuyển từ background tối thẫm sang lớp phủ sáng trong suốt `bg-white/70 dark:bg-slate-900/70` sử dụng thuộc tính kính mờ `backdrop-blur-xl`.
- **Trạng thái Active rõ ràng:** Cải thiện việc nhận diện menu hiện hành thông qua border và màu nhấn mạnh.
- **Tiêu chuẩn điểm chạm:** Các link điều hướng đều có vùng chạm tối thiểu từ `44px` trở lên để đảm bảo tính tiện lợi trên màn hình cảm ứng/chuột.

### B. Topbar / Navbar (`Navbar.tsx`)
- **Khung Tìm Kiếm (Search Bar):** 
  - Khắc phục lỗi khó nhìn bằng cách bổ sung viền `border-slate-300` tĩnh.
  - Bổ sung `focus ring` (viền sáng phát quang) báo hiệu trực quan khi người dùng nhấp vào.
  - Điều chỉnh độ tương phản của chữ placeholder (ví dụ: "Search your library...") dễ đọc hơn.
- **Icon Buttons:** Vùng bấm cho chuông báo và lịch sử tối ưu `44px` kết hợp hiệu ứng bo tròn và đổ bóng shadow nhẹ, tăng tính sinh động.

### C. Giao Diện Chức Năng Cốt Lõi (`ActionCard.tsx`)
- **Khắc phục độ tương phản và Blur:** Effect kính mờ (Glassmorphism) giờ đây **chỉ áp dụng cho màu nền (background)**. Nội dung bên trên background (Title, Description) đã đạt chỉ số OPACITY là 100%, có màu sắc đậm rõ chuẩn WCAG >= 4.5:1.
- **Cấu trúc phân cấp chữ (Visual Hierarchy):** Tăng cỡ chữ và độ in đậm của tiêu đề chính so với mô tả phụ, định hướng được luồng đọc mắt của người dùng.
- **Call-to-Action (CTA):** Chữ "arrow_forward" kém chuyên nghiệp được thay hoàn toàn bằng icon mũi tên `<ArrowRight>` tương tác cao. Khi người dùng di chuột qua (hover), mũi tên tự động nổi bật và trượt nhẹ về phía trước, gia tăng tỷ lệ CTR.

## 4. Tái Cấu Trúc Khung Nhập Liệu Chat AI (`page.tsx`)
- **Tương tác nhóm (Input Group):** Chuyển từ một vùng không rõ ràng thành một khối khung nhập liệu (Form) thống nhất.
- Nút Send giờ được đưa sát vào cạnh trong của Input, bo góc mềm mại thành một tổng thể hoàn chỉnh.
- Mọi thành phần đều có border mềm và focus tương tự thanh tìm kiếm Navbar, khẳng định rõ khả năng tương tác.
- **Tính đồng nhất thuật ngữ (UX Writing):** Các Action Card đã được chuẩn hóa lại tên gọi thành động từ hành động nhất quán: `Upload File`, `Summarize Documents`, `Generate Quiz`, `Chat with Documents`.

---

## Tóm Lại
Sau đợt refactor này, bảng điều khiển (Dashboard) không những giữ được linh hồn "Glassmorphism" hiện đại ban đầu, mà còn **đáp ứng trọn vẹn yêu cầu về Usability (khả năng sử dụng), Readability (dễ đọc) và Accessibility (tiếp cận)**, sẵn sàng đi vào pha tích hợp Logic thực tế và các API vào Frontend ở các Giai đoạn tiếp theo.
