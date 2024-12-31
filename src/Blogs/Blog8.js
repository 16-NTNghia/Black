import React, { useEffect } from 'react'

export default function Blog8() {

    useEffect(() => {
        document.title = "Khám Phá Kiểu Dữ Liệu và Toán Tử typeof Trong JavaScript."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>Khám Phá Kiểu Dữ Liệu và Toán Tử typeof Trong JavaScript.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 30/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Kiểu dữ liệu và chuyển đổi kiểu dữ liệu
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong lập trình, dữ liệu là thứ chương trình xử lý. JavaScript là ngôn ngữ lập trình có kiểu dữ liệu
                                yếu, cho phép thay đổi kiểu dữ liệu trong các biến. Dữ liệu có thể chia thành hai loại: nguyên thủy
                                và phức tạp.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Kiểu dữ liệu nguyên thủy
                                </span>
                                bao gồm các giá trị đơn giản như số và chuỗi. Giá trị của một biến kiểu nguyên thủy là duy nhất và
                                không thể tách rời. Ví dụ, một biến kiểu số có thể chứa một số nguyên hoặc số thực, và một biến kiểu
                                chuỗi chứa dãy ký tự.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Kiểu dữ liệu phức tạp
                                </span>
                                bao gồm các cấu trúc như mảng và đối tượng. Chúng có thể chứa nhiều phần tử, và mỗi phần tử có thể
                                là một giá trị nguyên thủy.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>Literals</span> là cách ghi lại các giá trị cụ thể (dữ
                                liệu) trong mã chương trình. Literals có mặt trong hầu hết tất cả các ngôn ngữ lập trình, bao gồm cả
                                JavaScript. Chúng ta đã sử dụng literals trong chương trước khi khởi tạo các biến.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> year = <span className="number">1990</span>;{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(year); <span className="comment">// -&gt; <span className="number">1990</span></span>{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="number">1991</span>); <span className="comment">// -&gt; <span className="number">1991</span></span>{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="string">"Alice"</span>); <span className="comment">// -&gt; <span className="string">Alice</span></span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong ví dụ này, chúng ta khai báo biến year và ngay lập tức khởi tạo nó với giá trị 1990. Số 1990,
                                được viết trong mã nguồn tại vị trí khởi tạo biến, là một literal đại diện cho một số. Giá trị 1990
                                được hiển thị trên bảng điều khiển bằng cách sử dụng biến year. Sau đó, chúng ta hiển thị trên bảng
                                điều khiển giá trị 1991 và "Alice", trong đó cả hai đều là literals (lần lượt đại diện cho số và
                                chuỗi). Trong JavaScript, gần như mỗi kiểu dữ liệu đều có literal riêng của nó.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Toán tử typeof trong JavaScript
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Toán tử typeof là một toán tử một đối số trong JavaScript, được sử dụng để xác định kiểu dữ liệu của
                                một biến hoặc giá trị. Nó trả về một chuỗi với giá trị cố định cho mỗi kiểu dữ liệu.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "undefined"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "object"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "boolean"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "number"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "bigint"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "string"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "symbol"
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    "function"
                                </span>
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> year = <span className="number">1990</span>;{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="keyword">typeof</span> year); <span className="comment">// -&gt; number</span>{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="keyword">typeof</span> <span className="number">1991</span>); <span className="comment">// -&gt; number</span>{"\n"}{"\n"}{"                                "}<span className="keyword">let</span> name = <span className="string">"Alice"</span>;{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="keyword">typeof</span> name); <span className="comment">// -&gt; string</span>{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="keyword">typeof</span> <span className="string">"Bob"</span>); <span className="comment">// -&gt; string</span>{"\n"}{"\n"}{"                                "}<span className="keyword">let</span> typeOfYear = <span className="keyword">typeof</span> year;{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(typeOfYear); <span className="comment">// -&gt; number</span>{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="keyword">typeof</span> typeOfYear); <span className="comment">// -&gt; string</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Một lần nữa chúng ta khai báo và khởi tạo biến <span style={{ color: 'red', fontWeight: 'bolder' }}>year</span> .
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Như bạn có thể thấy, <span style={{ color: 'red', fontWeight: 'bolder' }}>typeof</span> đối với cả giá trị theo nghĩa đen <span style={{ color: 'red', fontWeight: 'bolder' }}>1991</span> và biến chứa số (chúng ta khởi tạo nó bằng
                                giá trị theo nghĩa đen <span style={{ color: 'red', fontWeight: 'bolder' }}>1990</span>) sẽ trả về từ <span style={{ color: 'red', fontWeight: 'bolder' }}>"number"</span> .
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Chúng tôi thực hiện một thử nghiệm tương tự trên các chuỗi <span style={{ color: 'red', fontWeight: 'bolder' }}>"Alice"</span> và <span style={{ color: 'red', fontWeight: 'bolder' }}>"Bob"</span> bằng cách sử dụng biến name.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Ngoài ra, chúng tôi thực hiện một thí nghiệm nhỏ. Kết quả của <span style={{ color: 'red', fontWeight: 'bolder' }}>typeof</span> năm được lưu trữ trong biến có tên là
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>typeOfYear</span> .
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Như bạn có thể thấy, nó lưu trữ giá trị dưới dạng <span style={{ color: 'red', fontWeight: 'bolder' }}>"number"</span>. Nếu chúng ta kiểm tra kiểu của biến này, chúng ta sẽ nhận được <span style={{ color: 'red', fontWeight: 'bolder' }}>"string"</span>.
                            </h5>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
