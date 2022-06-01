# learn-reactjs

## JSX - Javascript XML
* Cú pháp giống javascript 
* Biến đổi jsx -> javascript để trình duyệt có thể hiểu được
* thay thế className & htmlFor thay cho class và for trong javascript
* phải import React khi sử dụng JSX
## ReactDom.render
* chỉ được sử dụng 1 lần ở file index.js
## Component
* Chia UI thành các component nhỏ hơn để dễ dàng quản lý và tái sử dụng lại.
    * Class Component -> render trả về jsx
    * Functional Component -> function return jsx
* ### Container
    * stateful
    * Quản lý dữ liệu
    * Server lấy dữ liệu -> không biết render
    * Truyền dữ liệu xuống presentational
* ### Presentational
    * stateless
    * Render
    * Hiển thị dữ liệu từ Container

## Props và Composition
* Props dữ liệu từ component cha truyền xuống cho con. Props là read only không thể thay đổi ở component con.
* Composition sự đa dạng mỗi props khác nhau thì sẽ có giao diện khác nhau.