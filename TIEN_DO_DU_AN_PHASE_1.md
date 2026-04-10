# Báo Cáo Tiến Độ Dự Án - AI Study Assistant

*Cập nhật lần cuối: Tháng 4 năm 2026*

Tài liệu này tóm tắt những tiến độ và các thành phần đã được hoàn thiện trong dự án "AI Study Assistant" tính đến thời điểm hiện tại. Dự án đã được tái cấu trúc từ một nguyên mẫu tĩnh (HTML/CSS) thành một ứng dụng web Full-stack hiện đại, hỗ trợ mở rộng.

---

## 1. Kiến Trúc & Core Infrastructure
- **Full-stack Monorepo**: Tổ chức mã nguồn rõ ràng thành hai thư mục riêng biệt: `frontend` và `backend`.
- **Dockerization**: Cả hai dịch vụ (frontend và backend) đều đã được cấu hình Containerization thông qua `Dockerfile` riêng biệt.
- **Docker Compose**: Đã thiết lập `docker-compose.yml` ở thư mục gốc giúp việc khởi chạy dự án cực kỳ dễ dàng (chỉ với một lệnh `docker-compose up -d --build`).
- **Tài liệu hướng dẫn**: Đã viết file `HUONG_DAN_CHAY.md` cung cấp các lệnh cần thiết để khởi chạy dự án.

## 2. Frontend (Next.js & Tailwind CSS)
Frontend đã được chuyển đổi thành công sang framework Next.js (App Router) kết hợp cùng Tailwind CSS để đảm bảo hiệu năng và UI hiện đại.

- **Thiết lập Core**:
  - Khởi tạo Next.js App Router bằng TypeScript.
  - Tích hợp Tailwind CSS và tạo cấu hình design system tùy chỉnh trong `globals.css` (màu sắc giao diện, glassmorphism UI, typography, animation).
- **Thành phần UI & Layout**:
  - **Sidebar**: Thanh điều hướng bên trái cố định (hỗ trợ hiển thị menu: Dashboard, Library, Courses, Settings...).
  - **Navbar**: Thanh topbar phục vụ việc điều hướng tổng quan, chứa tính năng tìm kiếm, thông báo, và profile người dùng.
  - **ActionCard**: Component tùy chỉnh, giao diện nổi bật, sử dụng để tạo các ô tính năng lớn.
- **Các trang (Pages) đã hoàn thiện**:
  - **Dashboard (`/dashboard`)**: Giao diện chính của ứng dụng. Bao gồm:
    - **Hero Section**: Hiển thị lời chào thân thiện đến người dùng.
    - **Grid Các Tính Năng (Action Cards)**: Upload, Summary, Quiz, và Contextual Chat (Sử dụng Glassmorphism UI đẹp mắt, có hiệu ứng gradient và animation khi hover).
    - **Floating AI Chat Input**: Khung chat AI nổi lập lòe (pulsing animated) ở phía cuối màn hình cho phép hỏi đáp mọi lúc mọi nơi.

## 3. Backend (Node.js & Express)
Kiến trúc Backend được thiết kế để mở rộng và cung cấp chuẩn giao tiếp RESTful API dựa trên mô hình MVC (Model - View - Controller).

- **Kiến trúc MVC**: Cấu trúc các thư mục chuẩn: `controllers`, `services`, `routes`, `middlewares`, và `utils`.
- **Server**: Cài đặt TypeScript với Express HTTP Server (`server.ts`).
- **AI Services**:
  - Đã tích hợp `ai.service.ts`: Xử lý giao tiếp trực tiếp với môi trường AI (OpenAI API), cho phép tạo ra các văn bản tổng hợp, trắc nghiệm, và trả lời câu hỏi.
- **Controllers & Routes**:
  - Đã thiết lập controller `aiController.ts` xử lý logic cho các luồng request khác nhau.
  - Định nghĩa endpoint để frontend tương tác trong `aiRoutes.ts`.

## 4. Công việc tiếp theo (Next Steps)
- Tích hợp kết nối API từ Frontend (Components/Pages) gọi tới Backend (Express AI Routes).
- Quản lý State truy xuất và lưu trữ qua MongoDB/PostgreSQL cho lịch sử chat, các khóa học và tài liệu của người dùng.
- Thêm cơ chế Authentication / JWT (đăng nhập/đăng ký).
- Hoàn thiện luồng Upload File xử lý file text/pdf thông qua AI (thêm thư viện lưu trữ file như AWS S3 hoặc cục bộ).
