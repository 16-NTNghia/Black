import React, { useEffect } from 'react'
import "../css/blog.css"

export default function BlogIndex() {

    useEffect(() => {
        document.title = "Blogs"; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container" style={{ marginTop: '10vh' }}>
                <section className="blog-posts">
                    <article className="post">
                        <h2 className="post-title">Java là gì</h2>
                        <p className="post-date">Ngày đăng: 26/12/2024</p>
                        <p className="post-summary">Java là ngôn ngữ lập trình bậc cao, được phát triển bởi Sun Microsystems vào năm
                            1995, dựa trên cú pháp của C và C++.
                            Kể từ năm 2010, Java thuộc sở hữu của Oracle.
                        </p>
                        <a href="/blogs/1" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Lập trình hướng đối tượng</h2>
                        <p className="post-date">Ngày đăng: 26/12/2024</p>
                        <p className="post-summary">
                            Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một kỹ thuật lập trình quan trọng, cho
                            phép trừu tượng hóa các đối tượng trong thực tế thành các đối tượng trong code.
                        </p>
                        <a href="/blogs/2" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Java hoạt động như thế nào?</h2>
                        <p className="post-date">Ngày đăng: 26/12/2024</p>
                        <p className="post-summary">
                            Trình biên dịch trong Java là một chương trình máy tính, đóng vai trò như người phiên dịch, dịch mã
                            nguồn viết bằng ngôn ngữ Java thành mã mà máy tính có thể hiểu và thực thi được (ngôn ngữ máy).
                        </p>
                        <a href="/blogs/3" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">JavaScript: Ngôn Ngữ Lập Trình Linh Hoạt Và Tiềm Năng Dành Cho Mọi Lập Trình
                            Viên.</h2>
                        <p className="post-date">Ngày đăng: 29/12/2024</p>
                        <p className="post-summary">
                            Máy tính hiện diện khắp nơi và có thể thực hiện các tác vụ nhanh hơn con người, nhưng chúng không tự
                            hiểu yêu cầu của ta.
                        </p>
                        <a href="/blogs/4" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Chinh Phục Lập Trình JavaScript: Công Cụ, Môi Trường.</h2>
                        <p className="post-date">Ngày đăng: 29/12/2024</p>
                        <p className="post-summary">
                            Để lập trình, bạn cần công cụ phù hợp. Bộ công cụ tối thiểu bao gồm:
                        </p>
                        <a href="/blogs/5" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Khám Phá Biến Trong JavaScript.</h2>
                        <p className="post-date">Ngày đăng: 30/12/2024</p>
                        <p className="post-summary">
                            Trong toán học, biến là một ký hiệu dùng để đại diện cho giá trị có thể thay đổi. Trong lập trình,
                            biến cũng có vai trò tương tự.
                        </p>
                        <a href="/blogs/6" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Khám Phá Biến Trong JavaScript Phần 2.</h2>
                        <p className="post-date">Ngày đăng: 30/12/2024</p>
                        <p className="post-summary">
                            Biến (variable) là nơi lưu trữ dữ liệu có thể thay đổi. Việc thay đổi giá trị của biến được thực
                            hiện bằng cách gán một giá trị mới, giá trị cũ sẽ bị ghi đè.
                        </p>
                        <a href="/blogs/7" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Khám Phá Kiểu Dữ Liệu và Toán Tử typeof Trong JavaScript.</h2>
                        <p className="post-date">Ngày đăng: 30/12/2024</p>
                        <p className="post-summary">
                            Trong lập trình, dữ liệu là thứ chương trình xử lý. JavaScript là ngôn ngữ lập trình có kiểu dữ liệu
                            yếu, cho phép thay đổi kiểu dữ liệu trong các biến.
                        </p>
                        <a href="/blogs/8" className="read-more">Đọc thêm...</a>
                    </article>
                    <article className="post">
                        <h2 className="post-title">Câu Lệnh Điều Kiện trong JavaScript.</h2>
                        <p className="post-date">Ngày đăng: 30/12/2024</p>
                        <p className="post-summary">
                            Câu lệnh điều kiện trong lập trình giúp chương trình phản ứng và thay đổi hành vi dựa trên các tình
                            huống khác nhau. Chúng cho phép mã thực hiện các nhánh khác nhau tùy thuộc vào quyết định của người
                            dùng, kết quả tính toán trước đó, hoặc thông tin chương trình thu thập được. Điều này rất quan trọng
                            trong lập trình, vì nó giúp chương trình có thể linh hoạt và xử lý các tình huống đa dạng, thay vì chỉ
                            chạy theo một cách duy nhất.
                        </p>
                        <a href="/blogs/9" className="read-more">Đọc thêm...</a>
                    </article>
                </section>
            </div>

        </div>
    )
}
