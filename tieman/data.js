let listData = [
    { id: 1, image: 'fileanh/a5.jfif', but: "mua ngay", name: "Bún bò", category: 'Một tô bún bò chuẩn vị Huế sẽ gồm sợi bún, thịt bò, tiết heo, chả cua và nước dùng.', description: "Được mọi du khách yêu thích", price: 25000, rating: 5, sizes: [5, 10] },
    { id: 2, image: 'fileanh/a6.jpg', but: "mua ngay", name: "Bún thịt nướng", category: 'Nguyên liệu làm bún thịt nướng khá đơn giản gồm thịt nạc, thịt ba chỉ, gan heo, rau sống, dưa leo.', description: "Sự đậm đà của gia vị", price: 20000, rating: 4, sizes: [5, 10] },
    { id: 3, image: 'fileanh/a7.jpg', but: "mua ngay", name: "Bánh canh cá lóc", category: 'Món bánh canh cá lóc phải đạt được hương vị thơm ngon, đúng chuẩn xứ Huế.', description: "Đặc trưng riêng biệt", price: 15000, rating: 5, sizes: [5, 10] },
    { id: 4, image: 'fileanh/a8.jfif', but: "mua ngay", name: "Bánh lọc", category: 'Món bánh này lại được làm từ những nguyên liệu rất cơ bản, dễ tìm như: bột năng, bột sắn, tôm, thịt, gia vị...', description: "Loại bột chỉ có ở Huế", price: 15000, rating: 5, sizes: [5, 10] },
    { id: 5, image: 'fileanh/a10.jpg', but: "mua ngay", name: "Bánh nậm", category: 'Những người phụ nữ đã dùng bột gạo, tôm, tép giã nhuyễn để làm nên chiếc bánh nậm.', description: "Sự kết hợp hoàn hảo", price: 15000, rating: 4, sizes: [5, 10] },
    { id: 6, image: 'fileanh/a9.jpg', but: "mua ngay", name: "Bánh bèo", category: 'Bánh bèo Huế bánh mỏng hơn, có bột tôm sấy, khi ăn kèm theo da heo chiên giòn.', description: "Sự đậm đà của gia vị", price: 20000, rating: 4, sizes: [5, 10] },
    { id: 7, image: 'fileanh/a11.jpg', but: "mua ngay", name: "Bánh ướt", category: 'Lá bánh ướt ở đây dẻo, dai, khi cuộn với phần nhân không bị vỡ. Miếng thịt ngoài giòn, trong mềm, được tẩm ướp đậm đà và nướng trên bếp than hoa.', description: "Được mọi du khách yêu thích", price: 15000, rating: 5, sizes: [5, 10] },
    { id: 8, image: 'fileanh/a12.jpg', but: "mua ngay", name: "Bánh ít", category: 'Bánh được làm từ bột nếp, nhân đậu xanh và dừa. bên ngoài bánh đều được gói bằng lá chuối xanh.', description: "Nước chấm tuyệt hảo", price: 15000, rating: 4, sizes: [5, 10] },
    { id: 9, image: 'fileanh/a13.jpg', but: "mua ngay", name: "Nem lụi", category: 'Nem lụi Huế được làm từ thịt heo giã nhuyễn, bì thái mỏng như miến, mỡ heo thái hạt lựu, rồi tất cả các nguyên liệu đem ướp cùng muối, tiêu đường, thính và trộn đều lên', description: "Chứa đầy đủ gia vị", price: 10000, rating: 5, sizes: [5, 10] },
    { id: 10, image: 'fileanh/a14.jpg', but: "mua ngay", name: "Bánh xèo", category: 'Nhân bánh cũng tương tự như bánh khoái, có thêm củ sắn và đại xanh chưa được bỏ vỏ.', description: "Nước chấm tuyệt hảo", price: 20000, rating: 5, sizes: [5, 10] },
    { id: 11, image: 'fileanh/a15.jpg', but: "mua ngay", name: "Bánh ép", category: 'Bánh ép Huế được ép thủ công nhiều lần bằng khuôn gang trên bếp than đỏ lửa.', description: "Loại bột chỉ có ở Huế", price: 5000, rating: 5, sizes: [5, 10] },
    { id: 12, image: 'fileanh/a16.jpg', but: "mua ngay", name: "Mè xửng", category: 'Mè xửng Huế nổi tiếng với vị ngọt ngào, béo bùi của mạch nha hòa quyện với đậu phộng và mè vừng.', description: "Chỉ có thể ở Huế", price: 15000, rating: 4, sizes: [5, 10] },
]


// function ListProduct() {
//     constructor(id, image, but, name, category, description, price, rating, size) {
//         this.id = id;
//         this.image = image;
//         this.name = name;
//         this.but = but;
//         this.category = category;
//         this.description = description;
//         this.rating = rating;
//         this.price = price;
//         this.size = size;
//         this.listCart=[];
//     }

//     this.listCart = []
//     this.addToCart = function (id) {
//         let product;
//         for (let i = 0; i < listData.length; i++) {

//             if (listData[i].id == id) {

//                 return listData[i]
//             }
//         } this.listCart.push(listData[i])

// let product = listData.map((product, index) => {
//     if (product.id == id) {
//         return product;
//     }
// })
// this.listCart.push(product);
//     }

// }


// Bắt đầu lấy phần muốn ánh xạ
let listProductItem = document.getElementById('list-products')
let html = ``
// function handleRate(rating) {
//     let htmlRating = ``
//     for (let i = 1; i <= rating; i++) {
//         htmlRating += `
//             <span>
//                 <img src="fileanh/star.png" alt="">
//             </span>
//         `
//     }
//     return htmlRating
// }
listData.map((product, index) => {
    return html += `
    <div class="item">
            <img src="${product.image}" class ="img" alt="">
            <div class="stars">
            <span>
            <img src="fileanh/star.png" alt="">
        </span>
        <span>
            <img src="fileanh/star.png" alt="">
        </span>
        <span>
            <img src="fileanh/star.png" alt="">
        </span>
        <span>
            <img src="fileanh/star.png" alt="">
        </span>
        <span>
            <img src="fileanh/star.png" alt="">
        </span>
            </div>
            <div class="name"><a href='detail.html?id=${product.id}'>${product.name}</a></div>
            <div class="desc">${product.description}</div>
            <div class="price">${product.price} VNĐ</div>
            <div class='but'><button  class="but-sale" onclick='book(${JSON.stringify(product)})'  style="border-radius: 7px;">mua ngay</button></div>
        </div>
    `
})
// gán nội dung của phần html thực hiện ở trên vào listProducItem
listProductItem.innerHTML = html;
// khỏi tạo biến và đưa nó về dạng mảng vì ở localStorage đang ở dạng string (sử dụng JSON.parse(localstorage.getitem('từ khóa muốn lưu')))
let listCart = JSON.parse(localStorage.getItem('listCart'))
// cần phải gán cho listCart về mảng vì khi parse về mảng listcart đang ở dạng null 
if (listCart == null) {
    listCart = []
}
// 
renderCart(listCart)
// sử dụng sự kiên onclick để đưa sản phẩm và phần cần tính tiền
function book(product) {
    // tạo 1 thẻ để xem sản phẩm đã ó trong giỏ hàng hay chưa
    let checksp = false
    // tạo vòng lặp chạy qua để duyệt qua mảng đã tạo để xem sp có trong giỏ hàng hay chưa
    for (let i = 0; i < listCart.length; i++) {
        // Sử dụng câu lệnh điều kiện để xét: nếu đã có sản phẩm thì ta +=1 cho quantity sau đó thay đổi tổng tiền và gán cho nó =true
        if (listCart[i].idProduct == product.id) {
            listCart[i].quantity += 1;
            listCart[i].total = listCart[i].price * listCart[i].quantity
            checksp = true
        }
    }
    // nếu sản phẩm chưa có trong listcart thì ta push nó vào
    if (!checksp) {
        listCart.push(
            { idProduct: product.id, name: product.name, image: product.image, category: product.category, price: product.price, quantity: 1, total: product.price }
        )
    }
    // lưu trữ phần nội dụng của listcart trên trang web bằng localstoage.setitem và chuyển nó về string(' phải chuyển về dạng string mới lưu được trên localstorage '). 
    localStorage.setItem('listCart', JSON.stringify(listCart))
    renderCart(listCart)

}
// tạo hàm renderCart chưa mảng  listCart lúc đầu ta tạo 
function renderCart(listCart) {
    // tạo biến = nơi cần ánh xạ đến
    let listSale = document.getElementById('list-saletbody');
    let event1 = ``;
    // tạo 1 biến để tính tổng ( lí do tạo ở đây vì ở đây mới bắt đầu ánh xạ sản phẩm cần mua vào giỏ hàng)
    let totalPayment = 0;
    listCart.map((product, index) => {
        totalPayment += product.total;
        return event1 +=
            // việc sử dụng "id =total-${product.idProduct}" như thế này vì các giá trị này sẽ luôn thay đổi, nếu lưu cứng 1 id thì nó sẽ chỉ nhận được giá trị đầu tiên
            // sử dung min max ở ô input quantity để xác định giá trị nhập được chỉ ở trong khoảng cho phép
            `
        <tr>
            <td class ="index">${index + 1}</td>
            <td class ="name">${product.name}</td>
            <td class ="img"><img class='image' src='${product.image}' alt='' style="border-radius: 22px; width: 75px;" /></td>
            <td>${product.category}</td>
            <td class = "ipQuantity"><input min='1' max='100' type="number" id="quantity-${product.idProduct}" onChange=change('${product.idProduct}') value="${product.quantity}" id="quantity" style="width: 70px;"></td>
            <td class ="but"><button  style="border-radius: 5px; width:60px" onclick = "eating(${product.idProduct})">Hủy</button></td>
            <td id ="price-${product.idProduct}">${product.price} VNĐ</td>
            <td id = "total-${product.idProduct}" style = "width:150px;">${product.total} VNĐ</td>
       </tr>
       
        `

    });
    // gán giá tri trong even1 vào listsale'chứa list-saletbody'
    listSale.innerHTML = event1;
    // gán totalPayment vào phần payment để hiển thị tổng tiền
    document.getElementById('payment').innerText = `${totalPayment} VNĐ`;
    // changeQuantity()

}
// tạo hàm để tính tổng giá tiền
function getTotalPayment() {
    // tạo biến để lấy string từ local về và chuyển sang dạng mảng để lấy giá trị tính ()
    let listCart = JSON.parse(localStorage.getItem('listCart'))
    // tạo thêm 1 biến tính tổng khi ấn tăng số lương lên ở ô input
    let totalPayment = 0;
    for (let i = 0; i < listCart.length; i++) {
        let product = listCart[i]
        totalPayment += product.total;
    } return totalPayment;
}
// tạo sự kiện ở ô input để khi tăng giảm số lượng thì thay đổi tổng tiền từng đơn hàng và toàn bộ sản phẩm
function change(id) {
    // tạo biến và lẫy  số lượng sản phẩm
    let quantityElement = +document.getElementById(`quantity-${id}`).value
    // tạo biến và lấy giá trị đơn giá mỗi sản phẩm(1)
    let price = +document.getElementById(`price-${id}`).innerHTML.split(' ')[0]
    // khởi tạo vong lặp 
    for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].idProduct == id) {
            listCart[i].quantity = quantityElement
            listCart[i].total = quantityElement * price
            // nếu số lương sản phẩm bị bé hơn 0 thì yêu cầu người dùng nhập lại
            if (listCart[i].quantity <= 0) {
                alert('vui lòng nhập lại số lượng')
                return;
            }

        }
    }
    // khi có số lượng sản phâm và tổng tiền của từng sản phầm thi set lên local storage để lưu trữ khi load lại không bị mất
    localStorage.setItem("listCart", JSON.stringify(listCart))
    // đặt tên cho biến gọi đến phần tổng giá tiền mỗi sản phẩm 
    let totalElement = document.getElementById(`total-${id}`)
    // lấy biến đã được gọi là giá tiền mỗi sản phẩm * số lượng sản phẩm
    let total = price * quantityElement
    totalElement.innerHTML = `${total} VNĐ`
    // gán biến  và gán bằng hàm gettotal để nhận giá trị và in ra tổng toàn bộ sp
    let totalPayment = getTotalPayment();
    document.getElementById('payment').innerText = `${totalPayment} VNĐ`;
}
// function changeQuantity() {
//     let priceElement = document.getElementById('total')
//     console.log(priceElement);
//     let price = +priceElement.innerHTML.split(' ')[0]
//     console.log(price);
//     let quantityElement = document.getElementById('quantity')
//     function rfsale() {
//         let quantity = +quantityElement.value
//         let priceTotal = price * quantity
//         priceElement.innerHTML = `${priceTotal} VNĐ`
//         console.log(listCart);
//     }
//     quantityElement.addEventListener('input', rfsale)
// }
// Gọi hàm này để xóa sản phẩm muốn xóa
function eating(id) {
    // gọi biến confirm để in ra bảng
    let confirmed = window.confirm('Bạn đã suy nghĩ kĩ chứ');
    // Vì confirmed luôn ở dạng true nên ko cần ghi
    if (confirmed) {
        // gọi mảng mới và dùng filter để lọc phần tử của mảng listCart
        let result = listCart.filter(function (product, index) {
            return product.idProduct != id
        })
        listCart = result
        // set lên lại localstorage để lữu trũ giá trị mỗi khi load trang
        window.localStorage.setItem('listCart', JSON.stringify(result))
        renderCart(result)
    }
}
// let totalCart = JSON.parse(localStorage.getItem('cart'))
// if (totalCart == null) {
//     totalCart = []
// }
// //
// renderCart(totalCart)
// totalCart.push(
//     { idCartProduct: product.idProduct, cartName: product.name, cartQuantity: 1, cartTotal: product.total, cartPrice: product.price }
// )
// localStorage.setItem('cart', JSON.stringify(cart))
// renderCart(totalCart)
// function pay(product) {
//     let cart1 = document.getElementById('item1');
//     let html1 = ``
//     totalCart.map((product, index) => {
//         return html1 += `
//         <table>
//     <tbody>
//         <tr>
//             <th class= 'index'>${index + 1}</th>
//             <td class ="cartName">${product.cartName}</td>
//             <td class = "idQuantity">${product.cartQuantity}</td>
//             <td class = "cartTotal">${product.cartTotal}</td>
//         </tr>
//     </tbody>
// </table>
//         `

//     })
//     cart1.innerHTML = html1
// } document.getElementById('item1').innerText = html;