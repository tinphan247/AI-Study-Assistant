# Hướng dẫn chạy dự án AI Study Assistant

Dự án này bao gồm 2 phần chính: **Frontend** (Next.js) và **Backend** (Node.js/Express). Tuy nhiên, bạn cũng có thể chạy dự án thông qua **Docker** nếu muốn. Dưới đây là các cách để khởi chạy dự án:

## Cách 1: Chạy thủ công (Khuyên dùng trong lúc phát triển/code)

### Bước 1: Khởi động Backend
1. Mở một cửa sổ Terminal mới và di chuyển vào thư mục `backend`:
   ```bash
   cd backend
   ```
2. Cài đặt các thư viện (chỉ cần chạy lần đầu tiên):
   ```bash
   npm install
   ```
   *(Lưu ý: Lỗi file lỗi `package.json` mà máy bạn vừa gặp phải để chạy lệnh này đã được tôi hỗ trợ sửa lại thành công. Bạn hãy chạy lại thoải mái)*
3. Tạo file `.env` trong thư mục `backend` (nếu chưa có) và khai báo API Key của OpenAI ở trong đó:
   ```env
   PORT=5000
   OPENAI_API_KEY=sk-xxxx... 
   ```
4. Chạy backend lên:
   ```bash
   npm run dev
   ```
   Server sẽ lắng nghe tại [http://localhost:5000](http://localhost:5000).

### Bước 2: Khởi động Frontend
1. Mở thêm một cửa sổ Terminal thứ 2 và di chuyển vào thư mục `frontend`:
   ```bash
   cd frontend
   ```
2. Cài đặt các thư viện (chỉ cần chạy lần đầu):
   ```bash
   npm install
   ```
3. Chạy frontend lên:
   ```bash
   npm run dev
   ```
   Giao diện web sẽ được mở tại [http://localhost:3000](http://localhost:3000). Bạn có thể truy cập bằng trình duyệt để xem giao diện Dashboard.

---

## Cách 2: Chạy thông qua Docker (Nhanh và ổn định nhất)

Hệ thống đã được cấu hình sẵn cấu trúc `docker-compose.yml`. Bạn chỉ nên dùng cách này nếu bạn chỉ muốn chạy để xem kết quả mà không cần chỉnh sửa code.

1. Hãy chắc chắn bạn đã chạy sẵn phần mềm **Docker Desktop** trên Windows.
2. Từ thư mục gốc của project (nơi có file `docker-compose.yml`), mở terminal và chạy lệnh:
   ```bash
   docker-compose up -d --build
   ```
3. Docker sẽ tiến hành đóng gói và chạy cả frontend và backend.
4. Khi chạy xong, bạn truy cập web tại [http://localhost:3000](http://localhost:3000).

*(Để dừng chạy Docker, chỉ việc chạy lệnh `docker-compose down`)*
