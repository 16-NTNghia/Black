import React, { useEffect } from 'react'

export default function Blog3() {

    useEffect(() => {
        document.title = "Java hoạt động như thế nào?"; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://phamanhduc.com/wp-content/uploads/2024/04/how-java-works-1024x564.png" alt="java hoạt động như thế nào?" width="100%" />
                        </div>
                        <div className="d-flex col-6 align-items-center">
                            <h1 className>Java hoạt động như thế nào?</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 26/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Biên dịch Java.
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Trình biên dịch trong Java là một chương trình máy tính, đóng vai trò như
                                người phiên dịch, dịch mã nguồn viết bằng ngôn ngữ Java thành mã mà máy tính có thể hiểu và thực thi
                                được (ngôn ngữ máy). Nó đảm bảo rằng mã nguồn tuân thủ đúng cú pháp và hoạt động giống như một công
                                cụ
                                kiểm tra lỗi chính tả của lập trình viên.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Quá trình biên dịch Java diễn ra như sau:
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Bước 1: Tạo mã nguồn: Người lập trình viết mã nguồn trong tệp có phần mở
                                rộng .java.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Bước 2: Biên dịch mã nguồn: Trình biên dịch (compiler) trong JDK chuyển mã nguồn thành mã byte
                                (bytecode) nếu không phát hiện lỗi.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Bước 3: Chạy mã byte trên JVM: Mã byte được tạo ra trong tệp .class và có thể chạy trên bất kỳ thiết
                                bị nào cài đặt Máy ảo Java (JVM).
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://topdev.vn/blog/wp-content/uploads/2020/09/java-compiler.png" alt="java-compiler" />
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />Java là ngôn ngữ lập trình đa nền tảng nhờ khả năng chuyển đổi mã byte
                                thành mã máy trên nhiều thiết bị khác nhau, giúp thực hiện phương châm “Write once, run anywhere”
                                (Viết một lần, chạy mọi nơi). Điều này có nghĩa là chương trình viết bằng Java có thể chạy trên điện
                                thoại, máy tính hay bất kỳ thiết bị nào hỗ trợ JVM.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) JVM (Java Virtual Machine) là gì?
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />JVM (Java Virtual Machine) là một thành phần cốt lõi trong nền tảng Java,
                                đóng
                                vai trò môi trường thực thi cho các ứng dụng Java. Khi một chương trình Java được biên dịch, nó tạo
                                ra
                                mã bytecode – một dạng mã máy độc lập với hệ điều hành. JVM sẽ thông dịch bytecode này thành mã máy
                                cụ
                                thể để chương trình có thể chạy trên các hệ điều hành và phần cứng khác nhau.
                            </h5>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://lanit.com.vn/wp-content/uploads/2023/02/Java-Virtual-Machine-3.png" alt="Java-Virtual-Machine-3" />
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Hoạt động của JVM
                            </h3>
                            <div className="text-center mt-5 mb-5">
                                <img width="60%" className="rounded-5" src="https://t3h.com.vn/photos/1/Anh%20bai%20viet/cach-hoat-dong-cua-jvm.jpg" alt="cross-platform" />
                            </div>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                1. Quá trình khởi động JVM
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Khởi tạo JVM: </span>
                                JVM được khởi động bởi JDK hoặc JRE. Từ Java 11, JRE không còn được tích hợp trong JDK
                                và cần cài đặt riêng nếu cần. Trong giai đoạn khởi tạo, JVM sử dụng các file cấu hình để thiết lập
                                thông số như bộ nhớ heap, thu gom rác, và quản lý tài nguyên.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" /> Tải class khởi động: </span>
                                JVM sử dụng Class Loader để tải các class cơ bản (Bootstrap Classes) như
                                java.lang, java.util, và các class của ứng dụng.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Khởi tạo class ứng dụng: </span>
                                JVM gọi phương thức main() của class ứng dụng để bắt đầu thực thi.
                            </h5>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                2. Quá trình thực thi mã ứng dụng:
                            </h4>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Tải và liên kết các class: </span>
                                JVM sử dụng Class Loader để tìm và tải các file .class. Sau đó, các class được liên kết (linking) và
                                chuẩn bị sẵn sàng cho việc khởi tạo.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Khởi tạo class và đối tượng:</span>
                                JVM thực hiện khởi tạo các biến tĩnh, khối khởi tạo tĩnh và tạo đối tượng thông qua các constructor.
                                Các đối tượng được lưu trữ trong bộ nhớ heap.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" />Thực thi mã:</span>
                                JVM thực thi các lệnh bytecode bằng cách sử dụng bộ đếm chương trình (program counter) và ngăn xếp
                                (stack). Just-In-Time (JIT) Compiler có thể được sử dụng để tối ưu hóa hiệu suất.
                            </h5>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                3. Quản lý bộ nhớ và thu gom rác (Garbage Collection)
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /> JVM tự động quản lý bộ nhớ, giải phóng các đối tượng không còn được sử
                                dụng để tránh rò rỉ bộ nhớ. Thuật toán thu gom rác giúp đảm bảo hiệu suất và sự ổn định trong quá
                                trình thực thi ứng dụng.
                            </h5>
                            <h4 className="mt-4 ms-5" style={{ color: 'orangered' }}>
                                4. Kết thúc ứng dụng
                            </h4>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" /> Ứng dụng kết thúc khi:
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" /></span>
                                Phương thức main() hoặc các phương thức khác gọi System.exit().
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" /></span>
                                Tất cả các thread chính đã hoàn thành.
                            </h5>
                            <h5>
                                <span className="ms-5" /><span style={{ color: 'red' }}><i className="fa-solid fa-check me-3" /></span>
                                Gặp lỗi nghiêm trọng hoặc ngoại lệ không xử lý.
                            </h5>
                            <h5>
                                <span className="ms-5" /> Khi kết thúc, JVM giải phóng toàn bộ tài nguyên, bao gồm bộ nhớ heap,
                                stack, và các kết nối hệ
                                thống, đảm bảo không còn tài nguyên bị chiếm giữ sau khi ứng dụng dừng.
                            </h5>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
