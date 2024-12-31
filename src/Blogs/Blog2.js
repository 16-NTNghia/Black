import React, { useEffect } from 'react'

export default function Blog2() {

    useEffect(() => {
            document.title = "Lập trình hướng đối tượng."; // Đổi title thành "Home - My Website"
        }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div>
                        <h1 className>Lập trình hướng đối tượng.</h1>
                    </div>
                    <p className="post-date">Ngày đăng: 26/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Lập trình hướng đối tượng là gì?
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một kỹ thuật lập trình quan trọng,
                                cho
                                phép trừu tượng hóa các đối tượng trong thực tế thành các đối tượng trong code. OOP sử dụng các đối
                                tượng (objects) để xây dựng ứng dụng, trong đó đối tượng bao gồm dữ liệu (thuộc tính) và các phương
                                thức
                                (hành vi). Phương thức giúp các đối tượng có thể tương tác, truy xuất và chỉnh sửa dữ liệu của nhau.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img className="rounded-5" src="https://blog.haposoft.com/content/images/size/w2000/2022/02/oop-la-gi.jpg" width="60%" alt="oop-la-gi" />
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Chương trình OOP được thiết kế bằng cách chia nhỏ thành các đối tượng
                                tương
                                tác, tạo nên sự tổ chức và
                                dễ bảo trì. Hầu hết các ngôn ngữ lập trình hiện đại như Java, C#, PHP, và Ruby đều hỗ trợ OOP. Đặc
                                biệt,
                                các ngôn ngữ này thường theo mô hình lập trình theo lớp, nơi các đối tượng là thực thể của một lớp
                                (class) - một khái niệm dùng để định nghĩa kiểu dữ liệu và hành vi.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Khác biệt lớp và đối tượng.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Đối tượng</span>
                                là một thực thể cụ thể trong thế giới thực, được đặc trưng bởi thuộc tính và phương thức.
                                Thuộc tính là những đặc điểm hoặc thông tin của đối tượng, ví dụ như con người có mắt, mũi, tay,
                                chân.
                                Phương thức là các hành động hoặc thao tác mà đối tượng có thể thực hiện, chẳng hạn như con người có
                                thể
                                nói, đi, ăn, uống.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Lớp</span>
                                là một kiểu dữ liệu hoặc khuôn mẫu định nghĩa các thuộc tính và phương thức chung cho nhiều đối
                                tượng. Đây là sự trừu tượng hóa của các đối tượng có đặc tính tương tự nhau. Ví dụ, lớp "Con mèo"
                                bao
                                gồm các thông tin như màu lông, cân nặng và các hành động như kêu, chạy, ăn.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /> <span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" /> Sự khác biệt giữa lớp và đối tượng </span>
                                nằm ở chỗ lớp giống như một khuôn mẫu chung, trong khi đối tượng là
                                thực thể cụ thể được tạo ra từ khuôn mẫu đó. Chẳng hạn, lớp "Chó" định nghĩa các đặc điểm như 4
                                chân, 2
                                mắt, có đuôi, cùng với các hành động như sủa, đi, ăn. Một đối tượng cụ thể có thể là chú chó Phú
                                Quốc
                                bạn đang nuôi trong nhà, được xem như một hiện thân của lớp "Chó".
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img className="rounded-5" src="https://codemind365.wordpress.com/wp-content/uploads/2020/05/519e3-class-and-object-in-java-3.png" width="60%" alt="class-and-object-in-java" />
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Các nguyên lý cơ bản của OOP.
                            </h3>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                Tính đóng gói (encapsulation):
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Tính đóng gói là một tính chất quan trọng trong lập trình hướng đối tượng
                                (OOP), đảm bảo sự toàn vẹn của đối tượng bằng cách che giấu thông tin nội tại. Người dùng không thể
                                trực tiếp thay đổi trạng thái bên trong của đối tượng, mà phải thông qua các phương thức được định
                                nghĩa sẵn. Điều này giúp bảo vệ dữ liệu và kiểm soát cách thức dữ liệu được sử dụng hoặc thay đổi,
                                tùy thuộc hoàn toàn vào người viết mã.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img className="rounded-5" src="https://cppdeveloper.com/wp-content/uploads/2019/01/encapsulation_.png" width="60%" alt="java là gì?" />
                            </div>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                Tính kế thừa (Inheritance):
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Tính kế thừa cho phép một lớp (lớp con) thừa hưởng các đặc tính và hành vi
                                của một lớp khác (lớp cha). Điều này giúp tái sử dụng mã, mở rộng hoặc tùy chỉnh các tính năng sẵn
                                có mà không cần định nghĩa lại. Tuy nhiên, không phải tất cả các ngôn ngữ lập trình hướng đối tượng
                                đều hỗ trợ tính kế thừa, và quyền kế thừa chỉ được thực hiện khi lớp cha cho phép.
                            </h5>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                Tính đa hình (Polymorphism):
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /> Tính đa hình thể hiện khả năng của một phương thức có thể hoạt động khác
                                nhau tùy thuộc vào đối tượng nhận thông điệp. Điều này cho phép các lớp định nghĩa các hành vi khác
                                nhau dựa trên cùng một phương thức. Tính đa hình giúp lập trình viên triển khai các chức năng tương
                                tự một cách linh hoạt cho nhiều loại đối tượng khác nhau.
                            </h5>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                Tính trừu tượng (Abstraction):
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /> Tính trừu tượng cho phép tập trung vào những khía cạnh cốt lõi, bỏ qua
                                các chi tiết không cần thiết. Trong OOP, tính trừu tượng được thể hiện qua lớp trừu tượng hoặc giao
                                diện, giúp định nghĩa các hành vi cơ bản mà các lớp cụ thể cần triển khai. Điều này giúp giảm sự
                                phức tạp và tăng tính tổ chức trong việc xây dựng và liên kết giữa các đối tượng.
                            </h5>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
