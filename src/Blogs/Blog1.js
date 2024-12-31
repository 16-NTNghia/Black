import React, { useEffect } from 'react'
import "../css/blogcontent.css"

export default function Blog1() {

    useEffect(() => {
        document.title = "Java là gì?"; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/media/blog/lap-trinh-java.jpg" alt="java" width="100%" />
                        </div>
                        <div className="d-flex col-6 align-items-center">
                            <h1 className>Java là gì?</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 26/12/2024</p>
                    <div className="post-content">
                        <h3>
                            1) Java là gì?
                        </h3>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />Java là ngôn ngữ lập trình bậc cao, được phát triển bởi Sun Microsystems vào
                            năm 1995, dựa trên cú pháp của C và C++.
                            Kể từ năm 2010, Java thuộc sở hữu của Oracle. Được thiết kế theo hướng đối tượng và bậc lớp,
                            Java nổi bật với khả năng "write once, run anywhere" (viết một lần, chạy mọi nơi),
                            giúp mã nguồn biên dịch có thể chạy trên nhiều nền tảng mà không cần phải biên dịch lại.
                        </h5>
                        <div className="text-center mt-5 mb-5">
                            <img className="rounded-5" src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/156801/Originals/java-la-gi%20(3).jpg" width="60%" alt="java là gì?" />
                        </div>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />Java được sử dụng rộng rãi trong phát triển phần mềm,
                            ứng dụng di động, web, game, và các hệ thống nhúng nhờ vào hiệu suất xử lý và khả năng đa nền tảng.
                            Cấu trúc lập trình của Java dựa trên OOP (Object-Oriented Programming), và nó chạy trên Java Virtual
                            Machine (JVM),
                            giúp các ứng dụng có thể hoạt động trên nhiều hệ điều hành mà không cần biên dịch lại.
                            Java hiện là một trong những ngôn ngữ lập trình phổ biến nhất, được ứng dụng trong nhiều lĩnh vực như di
                            động, máy tính, máy chủ, và game.
                        </h5>
                        <h3 className="mt-5">
                            2) Tại sao Java có thể chạy trên đa nền tảng?
                        </h3>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />Java có khả năng "cross-platform", tức là có thể chạy tốt trên nhiều môi
                            trường khác nhau,
                            nhờ vào tính độc lập với phần cứng và hệ điều hành. Điều này được thể hiện ở hai cấp độ: cấp độ mã nguồn
                            và cấp độ nhị phân.
                        </h5>
                        <div className="text-center mt-5 mb-5">
                            <img width="60%" className="rounded-5" src="https://media.licdn.com/dms/image/v2/D4E12AQHIQlb1J9VaDQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678980177632?e=2147483647&v=beta&t=RrFQgYhlRwmx5yelV-n9kkWip33Ks-aEWGaI5yh6vOE" alt="cross-platform" />
                        </div>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />Ở cấp độ mã nguồn, Java đảm bảo kiểu dữ liệu nhất quán trên tất cả các hệ điều
                            hành và phần cứng khác nhau.
                            Ngôn ngữ này cung cấp một bộ thư viện riêng giúp giải quyết vấn đề tương thích này,
                            khiến cho các chương trình viết bằng Java có thể biên dịch và chạy trên nhiều loại máy khác nhau mà
                            không gặp lỗi.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />Ở cấp độ nhị phân, một mã biên dịch Java có thể chạy trên nhiều nền tảng mà
                            không cần phải biên dịch lại mã nguồn,
                            miễn là có Java Virtual Machine (JVM) để thông dịch mã biên dịch đó. JVM giúp chương trình Java thực thi
                            trên các nền tảng khác nhau mà không gặp vấn đề tương thích.
                        </h5>
                        <h3 className="mt-5">
                            3) Tính năng đáng chú ý của Java
                        </h3>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tính bảo mật cao: </span>Java
                            được thiết kế để giảm thiểu các lỗ hổng bảo mật.
                            Nó có các tính năng như kiểm tra kiểu tĩnh và kiểm tra lỗi trên đường dẫn để đảm bảo rằng các ứng dụng
                            Java có thể chạy an toàn trên nhiều nền tảng khác nhau.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Hỗ trợ các thư viện và công cụ phát triển mạnh mẽ: </span>Java
                            cung cấp các thư viện tiêu chuẩn và công cụ phát triển như IDE
                            (Integrated Development Environment) để hỗ trợ các nhà phát triển.
                            Các công cụ này giúp tạo giao diện người dùng, xử lý dữ liệu, kết nối cơ sở dữ liệu và nhiều tính năng
                            khác, làm cho việc phát triển ứng dụng trở nên dễ dàng hơn.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tính di động: </span>Java
                            được sử dụng rộng rãi trong phát triển ứng dụng di động.
                            Nó hỗ trợ các thư viện phát triển ứng dụng di động, giúp đóng gói ứng dụng thành các file .jar hoặc
                            .apk, đồng thời cung cấp các tính năng như xử lý đa nhiệm,
                            kết nối mạng và tích hợp với các thiết bị phần cứng.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /> <span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tính độc lập với nền tảng: </span>Java
                            có thể chạy trên nhiều nền tảng khác nhau mà không cần phải sửa đổi mã
                            nguồn,giúp các ứng dụng Java dễ dàng triển khai trên nhiều hệ thống khác nhau.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /> <span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tính kế thừa và đa hình: </span>Là
                            một ngôn ngữ lập trình hướng đối tượng (OOP), Java hỗ trợ các tính năng như
                            kế thừa, đa hình và đóng gói.Điều này giúp mã nguồn dễ tái sử dụng, giảm thiểu sự trùng lặp và tăng tính
                            bảo trì của phần mềm.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tính mở rộng: </span>Java
                            cho phép các nhà phát triển mở rộng ngôn ngữ bằng cách tạo các thư viện
                            và API riêng,giúp ngôn ngữ này được áp dụng trong nhiều lĩnh vực khác nhau và phát triển theo các hướng
                            mới.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tương tự C++, hướng đối tượng hoàn toàn: </span>Java
                            sử dụng cú pháp của C và C++ nhưng bỏ qua các thao tác con trỏ và các
                            tính năng phức tạp như overload hay struct
                            và union để tăng tính bảo mật và dễ sử dụng.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Ngôn ngữ thông dịch: </span>Java
                            là một ngôn ngữ vừa biên dịch vừa thông dịch. Mã nguồn Java được biên
                            dịch thành mã byte code, sau đó JVM sẽ thông dịch mã này thành machine code để thực thi trên các nền
                            tảng khác nhau mà không cần biên dịch lại.
                        </h5>
                    </div>
                </article>
            </div>

        </div>
    )
}
