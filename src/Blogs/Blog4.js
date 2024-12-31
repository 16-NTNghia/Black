import React, { useEffect } from 'react'

export default function Blog4() {

    useEffect(() => {
        document.title = "JavaScript: Ngôn Ngữ Lập Trình Linh Hoạt Và Tiềm Năng Dành Cho Mọi Lập Trình Viên."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>JavaScript: Ngôn Ngữ Lập Trình Linh Hoạt Và Tiềm Năng Dành Cho Mọi Lập Trình Viên.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 29/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Cách giao tiếp với máy tính.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Máy tính hiện diện khắp nơi và có thể thực hiện các tác vụ nhanh hơn con người, nhưng chúng không tự
                                hiểu yêu cầu của ta. Để giao tiếp với máy tính, chúng ta phải dùng ngôn ngữ lập trình, giúp chuyển
                                đổi yêu cầu của con người thành lệnh mà máy tính có thể thực thi. Ngôn ngữ lập trình giúp việc giao
                                tiếp trở nên dễ dàng và có nhiều loại ngôn ngữ khác nhau tùy vào mục đích và tính hiệu quả.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://www.netacad.com/content/jse1/1.0/courses/content/m1/en-US/assets/2b388250f3bfdedb8162ce94fe5a4a831c062c06.png" alt="image_1" />
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) JavaScript là ngôn ngữ biên dịch động.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                JavaScript là một ngôn ngữ biên dịch động điển hình. Khi chúng ta chạy mã viết bằng JavaScript trong
                                trình duyệt web, như khi tải trang hiện tại, công cụ biên dịch sẽ là động cơ JavaScript tích hợp
                                trong trình duyệt. Tuy nhiên, đây không phải là cách duy nhất để thực thi mã JavaScript.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Có thể bạn đã nghe đến node.js. Đây cũng là một công cụ biên dịch, nhưng được cài đặt độc lập với
                                trình duyệt dưới dạng môi trường trong hệ điều hành máy tính (có thể là macOS, Windows hoặc Linux).
                                Việc sử dụng node.js cho phép bạn viết các chương trình JavaScript có thể biến máy tính của bạn
                                thành một máy chủ.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Hầu hết các trình biên dịch JavaScript hiện đại sử dụng kỹ thuật Just In Time Compilation (JIT
                                Compilation), biên
                                dịch mã trong quá trình thực thi để tăng hiệu suất, nhưng người dùng gần như không nhận thấy sự thay
                                đổi này. Khi viết chương trình, điều quan trọng nhất là xác định chính xác vấn đề và tìm giải pháp
                                tối ưu, giúp chương trình rõ ràng và không mơ hồ, vì máy tính không thể tự đoán. Một ví dụ là lắp
                                ráp đồ nội thất, nơi các hướng dẫn cần phải rõ ràng và không nhầm lẫn để đảm bảo kết quả đúng đắn.
                                Điều này tương tự như việc viết chương trình, nơi người phát triển phải biết chính xác các bước thực
                                hiện và kết quả cần đạt được.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://media.geeksforgeeks.org/wp-content/uploads/20190410185504/Working-of-JIT-Compiler1.png" alt="Working-of-JIT-Compiler" />
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                JavaScript là một ngôn ngữ lập trình thông dịch, dễ hiểu và cao cấp, được tạo ra vào năm 1995 bởi
                                Brendan Eich tại Netscape. Ban đầu, nó được gọi là LiveScript và sau đó đổi thành JavaScript. Mục
                                đích chính của nó là để cho phép các trang web không chỉ hiển thị thông tin tĩnh mà còn thay đổi nội
                                dung, cấu trúc hoặc giao diện người dùng một cách linh hoạt mà không cần tải lại toàn bộ trang. Ví
                                dụ, nó giúp tạo ra các hiệu ứng động, xử lý các hành động của người dùng như nhấp chuột, điền form,
                                hoặc thay đổi nội dung của trang mà không cần phải tải lại trang web.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Lập trình phía client và server.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                JavaScript được sử dụng chủ yếu trong lập trình phía client, tức là mã JavaScript được tải và thực
                                thi trực tiếp trong trình duyệt người dùng, giúp các trang web trở nên động và tương tác. Sau này,
                                JavaScript không chỉ được sử dụng cho phía client mà còn được áp dụng cho lập trình phía server
                                (back-end), ứng dụng di động và thậm chí lập trình UAV (drone).
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Sự phát triển của JavaScript:
                                </span>
                                JavaScript hiện nay là ngôn ngữ duy nhất được hỗ trợ bởi tất cả các trình duyệt web chính và được sử
                                dụng rộng rãi trên toàn thế giới. Nó hỗ trợ nhiều framework mạnh mẽ như React, Angular, giúp xây
                                dựng các ứng dụng web phức tạp và mạng xã hội.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Nhược điểm của JavaScript:
                                </span>
                                Mặc dù JavaScript là một ngôn ngữ mạnh mẽ và linh hoạt, nhưng nó cũng có những hạn chế. Do là ngôn
                                ngữ thông dịch và không được biên dịch, mã nguồn dễ bị lộ ra và có thể bị sao chép mà không cần sự
                                cho phép. Ngoài ra, JavaScript không phù hợp cho các ứng dụng yêu cầu tính toán phức tạp hay hiệu
                                suất cao. Việc chạy mã trong trình duyệt cũng bị giới hạn bởi các yếu tố bảo mật, khiến JavaScript
                                không thể truy cập vào các tài nguyên và tệp cục bộ trên máy tính người dùng.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                4) Liệu đây có phải là ngôn ngữ lập trình hoàn hảo?
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                JavaScript có nhiều lợi thế so với các ngôn ngữ lập trình khác. Một trong những lợi thế lớn nhất là
                                cộng đồng người dùng rất năng động và hỗ trợ nhiệt tình. Điều này giúp việc tìm kiếm giải pháp cho
                                các vấn đề phổ biến trở nên dễ dàng, đồng thời các công cụ hỗ trợ JavaScript cũng liên tục được phát
                                triển.
                            </h5>
                            <h5>
                                <span className="ms-5" />
                                Một ưu điểm lớn khác là sự tồn tại của rất nhiều framework và thư viện sẵn có, cung cấp hầu hết các
                                chức năng phổ biến mà lập trình viên cần. Ngôn ngữ này cũng khá dễ học và cho phép lập trình viên
                                tập trung vào công việc thay vì phải đấu tranh với cú pháp (cách xây dựng các chỉ dẫn trong mã
                                nguồn).
                            </h5>
                            <h5>
                                <span className="ms-5" />
                                Thêm vào đó, JavaScript không yêu cầu phải mua công cụ đắt tiền để làm việc, vì hầu hết công cụ tốt
                                đã được tích hợp sẵn trong trình duyệt web. Các ông lớn như Google, Facebook và Mozilla cũng đang
                                tích cực hỗ trợ và phát triển các công cụ JavaScript.
                            </h5>
                            <h5>
                                <span className="ms-5" />
                                Tuy nhiên, những gì là ưu điểm đối với một số người lại có thể trở thành nhược điểm đối với người
                                khác. Một ví dụ là đặc tính kiểu dữ liệu động của JavaScript. Điều này có nghĩa là chúng ta có thể
                                lưu trữ bất kỳ loại dữ liệu nào trong một biến, chẳng hạn như một số nguyên, sau đó có thể thay thế
                                nó bằng một chuỗi ký tự mà không gặp phải lỗi. Mặc dù điều này rất tiện lợi, nhưng một số người cho
                                rằng nó có thể dẫn đến sai sót trong quá trình lập trình, vì vậy một ngôn ngữ mới gọi là TypeScript
                                đã được ra đời, áp dụng kiểu dữ liệu tĩnh.
                            </h5>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
