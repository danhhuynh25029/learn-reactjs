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
* Sử dụng propType package bên ngoài
* Chỉ có duy nhất một thẻ cha trong ( )
* filter
```javascript
    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
    return age >= 18;
    }
```
```javascript
    result : 32,33,40
```
* find
```javascript
    const ages = [3, 10, 18, 20];

    function checkAge(age) {
    return age > 18;
    }

    function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAge);
    }
```
```javascript
    result : 20;
```
* reduce
```javascript
    const numbers = [175, 50, 25];
    document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

    function myFunc(total, num) {
        return total - num;
    }
```
```javascript
    resulte : 100;
```
* map
```javascript
    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction);

    document.getElementById("demo").innerHTML = newArr;

    function myFunction(num) {
    return num * 10;
    }
```
```javscript
    resulte : 650,440,120,40
```
* for ... in => key của danh sách
* for ... of => value của danh sách

## Folder structure

```
src
|__components (shared components between features)
|  |__loading
|     |__index.jsx
|     |__style.css
|__features
|  |__Todo
|     |__components (components of feature todo)
|     |__pages (pages of feature todo)
|     |__index.js (entry point of feature todo)
|__App.js
```
* cha giữ dữ liệu truyền cho thằng con.Nếu phức tạp quá thì tiếp tục chia nhỏ ra.

## State
* State được tạo ra và quản lý bởi component hiện tại
* State có thể update thay đổi ở component hiện tại.