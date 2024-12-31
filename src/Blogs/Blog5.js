import React, { useEffect } from 'react'

export default function Blog5() {

    useEffect(() => {
        document.title = "Chinh Phục Lập Trình JavaScript: Công Cụ, Môi Trường."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>Chinh Phục Lập Trình JavaScript: Công Cụ, Môi Trường.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 29/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Thiết lập môi trường lập trình JavaScript.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Để lập trình, bạn cần công cụ phù hợp. Bộ công cụ tối thiểu bao gồm:
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Trình soạn thảo mã nguồn.
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Trình biên dịch hoặc thông dịch ngôn ngữ lập trình.
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Ngoài ra, có thể sử dụng trình gỡ lỗi (debugger) để tạm dừng chương trình tại vị trí cụ thể và phân tích trạng thái hiện tại của nó.
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" />
                                Máy tính sử dụng để lập trình không cần cấu hình mạnh, chỉ cần đủ để thực hiện tác vụ văn phòng cơ
                                bản. Kích thước màn hình lớn sẽ giúp làm việc thoải mái hơn, và nhiều lập trình viên thường dùng
                                nhiều màn hình.
                            </h5>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    1. Môi trường phát triển trực tuyến
                                </span>
                            </h4>
                            <h5>
                                <span className="ms-5" />
                                Các công cụ trực tuyến, hay "code playground", cung cấp trình soạn thảo và môi trường chạy mã. Chúng
                                thường dùng để học tập, kiểm tra, hoặc chia sẻ mã. Một số công cụ phổ biến gồm:
                            </h5>
                            <div className="blog-link mb-4">
                                <a href="https://jsfiddle.net/">JSFiddle</a>
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://codepen.io/pen/">CodePen</a>
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://jsbin.com/?html,output">JsBin</a>
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://plnkr.co/">Plunker</a>
                            </div>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    2. Môi trường phát triển cục bộ
                                </span>
                            </h4>
                            <h5>
                                <span className="ms-5" />
                                Tuỳ theo dự án, có thể cần thêm:
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Trình quản lý thư viện (npm, yarn)
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Công cụ tự động hóa (Grunt, Webpack)
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Khung kiểm thử tự động (Mocha, Jasmine, Jest)
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Công cụ phân tích bảo mật (Snyk, RetireJS)
                                </span>
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Trình soạn thảo mã (Code Editor)
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Mã nguồn của hầu hết các ngôn ngữ lập trình được viết dưới dạng văn bản. Để viết mã, chúng ta cần
                                một trình soạn thảo văn bản. Tuy nhiên, trình soạn thảo này phải viết văn bản thuần túy (plain
                                text), không thể là trình soạn thảo văn bản định dạng như MS Word.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Mặc dù chỉ cần một trình Notepad đơn giản để viết mã, nhưng sử dụng một trình soạn thảo mã chuyên
                                dụng sẽ dễ dàng hơn rất nhiều. Trên thị trường có rất nhiều trình soạn thảo mã chuyên nghiệp, cả
                                miễn phí và trả phí. Một số thì phổ biến cho nhiều ngôn ngữ, trong khi một số khác lại dành riêng
                                cho từng ngôn ngữ cụ thể.
                            </h5>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    1. Visual Studio Code [Windows, macOS, Linux]
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trình soạn thảo mã mạnh mẽ, miễn phí cho cả mục đích cá nhân và thương mại. Nó nhanh chóng trở thành
                                một trong những công cụ yêu thích trong phát triển web. VS Code có các tính năng tích hợp sẵn như
                                trình gỡ lỗi JavaScript và các công cụ hỗ trợ tối ưu hóa dự án web. Ngoài ra, nó còn có khả năng tùy
                                chỉnh cao thông qua hệ thống tiện ích mở rộng, bao gồm nhiều tiện ích dành riêng cho ngôn ngữ
                                JavaScript.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://www.netacad.com/content/jse1/1.0/courses/content/m1/en-US/assets/d0dbbfa2bf28f0045c14c4fcb22a7d2a51ac2cd2.png" alt="Visual Studio Code" />
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                            </div>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    2. WebStorm [Windows, macOS, Linux]
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Một môi trường phát triển thương mại phổ biến, trong đó trình soạn thảo mã chỉ là một trong những
                                thành phần nhỏ hơn trong một bộ công cụ khổng lồ giúp cải thiện quá trình phát triển mã (ví dụ: hỗ
                                trợ thử nghiệm). Dành cho các dự án lớn, nó có thể tỏ ra quá nặng và phức tạp đối với các chương
                                trình nhỏ. Mặc dù được thiết kế để sử dụng thương mại, nhưng vẫn có thể có được giấy phép giáo dục
                                miễn phí.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://www.netacad.com/content/jse1/1.0/courses/content/m1/en-US/assets/4ed62d048c4382434b4c6c93f31f5fae12c5aee9.png" alt="WebStorm" />
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://www.jetbrains.com/webstorm/">WebStorm</a>
                            </div>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    3. Sublime Text [Windows, macOS, Linux]
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trình soạn thảo mã nhanh và dễ sử dụng với nhiều tính năng nâng cao, như chỉnh sửa nhiều dòng, tìm
                                kiếm nhanh và nhiều tính năng khác. Có phiên bản dùng thử, nhưng để sử dụng lâu dài, cần phải mua
                                giấy phép cho cả mục đích cá nhân và thương mại.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://www.netacad.com/content/jse1/1.0/courses/content/m1/en-US/assets/a958ce9d34e00b82f7cd4518d8e82a7197609b45.png" alt="Sublime Text" />
                            </div>
                            <div className="blog-link mb-4">
                                <a href="https://www.sublimetext.com/">Sublime Text</a>
                            </div>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    4.Notepad++ [Windows]
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trình soạn thảo mã và văn bản miễn phí và nhẹ. Chương trình nhỏ và nhanh, hỗ trợ hàng chục ngôn ngữ
                                lập trình và có thể mở rộng bằng plugin. Nó có thể cũ và xấu, nhưng vẫn sắc nét.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://www.netacad.com/content/jse1/1.0/courses/content/m1/en-US/assets/ad04f6f344f4da7ce0cfea5a522da371e2f2b8fc.png" alt="Notepad++" />
                            </div>
                            <div className="blog-link mb-4 mb-4">
                                <a href="https://notepad-plus-plus.org/">Notepad++</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Trình thông dịch (Interpreter) và trình gỡ lỗi (Debugger)
                            </h3>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    Trình thông dịch
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trình thông dịch đóng vai trò môi trường thực thi cho chương trình của chúng ta. Nó kiểm tra các lỗi
                                cú pháp (ví dụ: gõ sai tên hàm hoặc quên đóng ngoặc) và thực thi từng lệnh trong chương trình.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Lựa chọn trình thông dịch JavaScript phụ thuộc vào nền tảng mà bạn phát triển phần mềm:
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Server-side:
                                </span>
                                Sử dụng môi trường Node.js, cần cài đặt trực tiếp trên hệ điều hành.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Client-side:
                                </span>
                                Trình thông dịch là trình duyệt web đã được cài sẵn trên máy (ví dụ: Chrome, FireFox).
                            </h5>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    Trình gỡ lỗi
                                </span>
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Các chương trình máy tính thường rất phức tạp, có thể lên tới hàng nghìn hoặc hàng triệu dòng mã.
                                Với độ phức tạp này, việc tạo ra một chương trình không có lỗi là điều không thể. Đặc biệt, lỗi
                                logic (chương trình đúng về mặt cú pháp nhưng giải pháp lại sai) chỉ có thể phát hiện khi chương
                                trình đang chạy và trong một số tình huống đặc biệt.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Debugger là công cụ giúp:
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Làm chậm hoặc tạm dừng chương trình.
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Thực thi từng lệnh một cách tuần tự.
                                </span>
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Phân tích trạng thái của chương trình tại bất kỳ thời điểm nào.
                                </span>
                            </h5>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
