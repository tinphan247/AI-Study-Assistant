# Hướng Dẫn Test Case Backend

## Tổng Quan
Backend của AI Study Assistant cung cấp các API cho việc tóm tắt văn bản, trò chuyện với tài liệu, và tạo quiz. Các API sử dụng mock service để trả về dữ liệu giả lập.

## Cài Đặt và Chạy Server
1. Đảm bảo Node.js và npm đã được cài đặt.
2. Trong thư mục `backend`, chạy:
   ```
   npm install
   npm run dev
   ```
3. Server sẽ chạy trên `http://localhost:5000`.

## Công Cụ Test
- **cURL**: Để test qua command line.
- **Postman**: Để test với giao diện đồ họa.
- **Thunder Client** (extension VS Code).

## Test Cases

### 1. Health Check
**Endpoint**: `GET /health`  
**Mục đích**: Kiểm tra server có hoạt động không.  
**Expected Response**: `{"status": "OK"}` với status code 200.

**Test với cURL**:
```bash
curl -X GET http://localhost:5000/health
```

**Test Case**:
- Status code: 200
- Response body: `{"status": "OK"}`
- CORS header: `Access-Control-Allow-Origin: *`

### 2. Summarize Text
**Endpoint**: `POST /api/ai/summarize`  
**Mục đích**: Tóm tắt văn bản đầu vào.  
**Request Body**:
```json
{
  "text": "Đây là một đoạn văn bản mẫu để tóm tắt."
}
```

**Expected Response**: 
```json
{
  "data": "[Mock Summary] Here is a robust summary of the provided text: \"Đây là một đoạn văn bản mẫu để tóm tắt....\""
}
```

**Test với cURL**:
```bash
curl -X POST http://localhost:5000/api/ai/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Đây là một đoạn văn bản mẫu để tóm tắt."}'
```

**Test Cases**:
- **Valid Input**: Text không rỗng → Status 200, trả về summary.
- **Missing Text**: Không có "text" trong body → Status 400, error: "Text is required for summarization".
- **Empty Text**: "text": "" → Status 400, error: "Text is required for summarization".
- **Invalid JSON**: Body không phải JSON → Status 400 hoặc 500.

### 3. Chat with Document
**Endpoint**: `POST /api/ai/chat`  
**Mục đích**: Trò chuyện với tài liệu dựa trên context.  
**Request Body**:
```json
{
  "question": "Câu hỏi của bạn?",
  "context": "Nội dung tài liệu."
}
```

**Expected Response**:
```json
{
  "data": "[Mock Chat] You asked: \"Câu hỏi của bạn?\". Based on the context, here is the answer."
}
```

**Test với cURL**:
```bash
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "Câu hỏi của bạn?", "context": "Nội dung tài liệu."}'
```

**Test Cases**:
- **Valid Input**: Cả question và context → Status 200, trả về answer.
- **Missing Question**: Không có "question" → Status 400, error: "Question and context are required".
- **Missing Context**: Không có "context" → Status 400, error: "Question and context are required".
- **Empty Fields**: Question hoặc context rỗng → Status 400.

### 4. Generate Quiz
**Endpoint**: `POST /api/ai/quiz`  
**Mục đích**: Tạo quiz từ văn bản.  
**Request Body**:
```json
{
  "text": "Nội dung để tạo quiz."
}
```

**Expected Response**:
```json
{
  "data": [
    {
      "question": "What is the main topic of the text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "Option A"
    }
  ]
}
```

**Test với cURL**:
```bash
curl -X POST http://localhost:5000/api/ai/quiz \
  -H "Content-Type: application/json" \
  -d '{"text": "Nội dung để tạo quiz."}'
```

**Test Cases**:
- **Valid Input**: Text không rỗng → Status 200, trả về array quiz.
- **Missing Text**: Không có "text" → Status 400, error: "Text is required for quiz generation".
- **Empty Text**: "text": "" → Status 400.

## Error Handling
- Tất cả endpoint đều trả về JSON error với status 500 nếu có lỗi internal (ví dụ: lỗi trong service).
- CORS được bật cho tất cả requests.

## Ghi Chú
- Hiện tại sử dụng mock data, không kết nối thực với OpenAI.
- Để test với dữ liệu thực, cần cấu hình API key OpenAI trong file `.env`.

## Chạy Test Tự Động
Để thêm unit tests, có thể sử dụng Jest hoặc Mocha. Ví dụ:
1. Cài đặt: `npm install --save-dev jest @types/jest`
2. Tạo file test trong `__tests__/` folder.
3. Chạy: `npm test`</content>
<parameter name="filePath">c:\HCMUS\project\ai study assistant\AI-Study-Assistant-main\AI-Study-Assistant-main\backend\TESTING.md