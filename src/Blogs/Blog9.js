import React, { useEffect } from 'react'

export default function Blog9() {

    useEffect(() => {
        document.title = "Câu Lệnh Điều Kiện trong JavaScript."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>Câu Lệnh Điều Kiện trong JavaScript.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 30/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Câu Lệnh Điều Kiện
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Câu lệnh điều kiện trong lập trình giúp chương trình phản ứng và thay đổi hành vi dựa trên các tình
                                huống khác nhau. Chúng cho phép mã thực hiện các nhánh khác nhau tùy thuộc vào quyết định của người
                                dùng, kết quả tính toán trước đó, hoặc thông tin chương trình thu thập được. Điều này rất quan trọng
                                trong lập trình, vì nó giúp chương trình có thể linh hoạt và xử lý các tình huống đa dạng, thay vì
                                chỉ chạy theo một cách duy nhất.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Câu Lệnh if
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Câu lệnh if là câu lệnh điều khiển luồng cơ bản và đơn giản nhất trong JavaScript. Câu lệnh này kiểm
                                tra một điều kiện, và tùy thuộc vào kết quả của điều kiện (dạng Boolean), mã trong khối if sẽ được
                                thực thi hoặc bị bỏ qua.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    Ví dụ Cơ Bản:
                                </span>
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> isUserReady = <span className="console">confirm</span>("Are you ready?");{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(isUserReady);{"\n"}{"                                "}<span className="keyword">if</span> (isUserReady) {"{"}{"\n"}{"                                    "}<span className="console">alert</span>("User ready!");{"\n"}{"                                "}{"}"}{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong ví dụ này, chương trình sẽ hiển thị hộp thoại xác nhận với câu hỏi "Are you ready?". Nếu người
                                dùng nhấn OK, isUserReady sẽ nhận giá trị true và mã trong khối if sẽ được thực thi, hiển thị thông
                                báo "User ready!". Nếu người dùng chọn Cancel, không có gì xảy ra.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Các phép toán logic như &amp;&amp; (AND) và || (OR) thường được sử dụng để kết hợp nhiều điều kiện trong câu
                                lệnh if.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> userAge = <span className="number">23</span>;{"\n"}{"                                "}<span className="keyword">let</span> isFemale = <span className="boolean">false</span>;{"\n"}{"                                "}<span className="keyword">let</span> points = <span className="number">703</span>;{"\n"}{"                                "}<span className="keyword">let</span> cartValue = <span className="number">299</span>;{"\n"}{"                                "}<span className="keyword">let</span> shippingCost = <span className="number">9.99</span>;{"\n"}{"                                "}<span className="keyword">if</span> (userAge &gt; <span className="number">21</span>) {"{"}{"\n"}{"                                    "}<span className="keyword">if</span> (cartValue &gt;= <span className="number">300</span> || points &gt;= <span className="number">500</span>) {"{"}{"\n"}{"                                        "}shippingCost = <span className="number">0</span>;{"\n"}{"                                    "}{"}"}{"\n"}{"                                "}{"}"}{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(shippingCost);{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong ví dụ này, phí vận chuyển (shippingCost) sẽ bằng 0 nếu userAge lớn hơn 21 và một trong hai
                                điều kiện sau được thỏa mãn: giá trị giỏ hàng (cartValue) lớn hơn hoặc bằng 300, hoặc điểm tích lũy
                                (points) lớn hơn hoặc bằng 500.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Câu lệnh if ... else
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Câu lệnh if giúp kiểm tra điều kiện và thực thi mã khi điều kiện đúng. Tuy nhiên, nếu bạn muốn thực
                                thi một đoạn mã khác khi điều kiện không thỏa mãn, bạn có thể sử dụng câu lệnh else.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    Ví dụ Cơ Bản:
                                </span>
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> isUserReady = confirm(<span className="string">"Are you ready?"</span>);{"\n"}{"                                "}<span className="keyword">if</span> (isUserReady) {"{"}{"\n"}{"                                    "}<span className="console">console</span>.<span className="function">log</span>(<span className="string">"User ready!"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else</span> {"{"}{"\n"}{"                                    "}<span className="console">console</span>.<span className="function">log</span>(<span className="string">"User not ready!"</span>);{"\n"}{"                                "}{"}"}{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                4) Câu lệnh if ... else ... if
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Câu lệnh if và if ... else đều cung cấp sự linh hoạt lớn trong việc điều khiển luồng chương trình
                                dựa trên điều kiện. Tuy nhiên, trong một số trường hợp, chỉ cần hai nhánh điều kiện là không đủ để
                                giải quyết bài toán. Để xử lý tình huống này, JavaScript cung cấp cách giải quyết đơn giản thông qua
                                việc lồng câu lệnh if ... else.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Khi lồng câu lệnh, bạn có thể đặt một câu lệnh if hoặc if ... else bên trong phần else của câu lệnh
                                if ban đầu. Điều này cho phép bạn kiểm tra nhiều điều kiện khác nhau và xử lý chúng theo từng nhánh.
                                Việc lồng các câu lệnh if ... else giúp bạn có thể xử lý các tình huống phức tạp hơn, khi mà chỉ sử
                                dụng một câu lệnh if ... else đơn giản là không đủ.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    Ví dụ Cơ Bản:
                                </span>
                            </h5>
                            <div className="editor-container mb-5">
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> number = <span className="function">prompt</span>("Enter a number", <span className="number">0</span>);{"\n"}{"                                "}<span className="keyword">if</span> (number &lt; <span className="number">10</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&lt;10"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else if</span> (number &lt; <span className="number">30</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&lt;30"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else if</span> (number &lt; <span className="number">60</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&lt;60"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else if</span> (number &lt; <span className="number">90</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&lt;90"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else if</span> (number &lt; <span className="number">100</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&lt;100"</span>);{"\n"}{"                                "}{"}"} <span className="keyword">else if</span> (number == <span className="number">100</span>) {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="number">100</span>);{"\n"}{"                                "}{/* Sử dụng <span class="number"> cho số */}{"\n"}{"                                "}{"}"} <span className="keyword">else</span> {"{"}{"\n"}{"                                    "}<span className="function">alert</span>(<span className="string">"&gt;100"</span>);{"\n"}{"                                "}{"}"}{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                5) Toán tử điều kiện
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Toán tử điều kiện (ternary operator) cho phép thực hiện một trong hai hành động dựa trên giá trị của
                                điều kiện. Thay vì sử dụng cấu trúc if ... else, toán tử này giúp viết mã ngắn gọn hơn, dễ đọc hơn
                                và thường dùng để gán giá trị cho biến.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    Ví dụ Cơ Bản:
                                </span>
                            </h5>
                            <div className="editor-container mb-5">
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> price = <span className="number">100</span>;{"\n"}{"                                "}<span className="keyword">let</span> shippingCost = <span className="keyword">price</span> <span className="operator">&gt;</span> <span className="number">50</span> ? <span className="number">0</span> : <span className="number">5</span>;{"\n"}{"                                "}<span className="console">console</span>.<span className="function">log</span>(<span className="string">`price = ${"{"}price{"}"}, shipping = ${"{"}shippingCost{"}"}`</span>);{"\n"}{"                                "}<span className="comment">// -&gt; price = 100, shipping = 0</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-5">
                            6) Câu lệnh switch ... case
                        </h3>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            Câu lệnh switch ... case là một cách để thực thi mã điều kiện, nhưng ít được sử dụng hơn so với câu lệnh
                            if. Câu lệnh switch so sánh một biểu thức với các giá trị được định nghĩa trong các trường hợp (case).
                            Nếu giá trị của biểu thức khớp với giá trị của một case, mã trong khối đó sẽ được thực thi. Cấu trúc của
                            câu lệnh switch bao gồm:
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            <span style={{ color: 'red' }}>
                                <i className="fa-solid fa-check me-3" />
                                switch (biểu thức):
                            </span>
                            Biểu thức được đánh giá.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            <span style={{ color: 'red' }}>
                                <i className="fa-solid fa-check me-3" />
                                switch (biểu thức):
                            </span>
                            Biểu thức được đánh giá.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            <span style={{ color: 'red' }}>
                                <i className="fa-solid fa-check me-3" />
                                case giá trị:
                            </span>
                            Nếu biểu thức khớp với giá trị này, mã sau dấu hai chấm sẽ được thực thi.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            <span style={{ color: 'red' }}>
                                <i className="fa-solid fa-check me-3" />
                                default:
                            </span>
                            Trường hợp mặc định, được thực thi nếu không có case nào khớp.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            Các giá trị được so sánh bằng phép so sánh chặt chẽ (===), nghĩa là không chỉ giá trị mà còn kiểu dữ
                            liệu phải khớp.
                        </h5>
                        <h5 style={{ lineHeight: '1.8' }}>
                            <span className="ms-5" />
                            <span style={{ color: 'red' }}>
                                Ví dụ Cơ Bản:
                            </span>
                        </h5>
                        <div className="editor-container mb-5">
                            <div className="code-area">
                                <pre className="code-screen">{"            "}<code>{"\n"}{"                "}<span className="keyword">let</span> gate = <span className="function">prompt</span>(<span className="string">"Choose gate: a, b, or c"</span>);{"\n"}{"                "}<span className="keyword">let</span> win = <span className="boolean">false</span>;{"\n"}{"\n"}{"                "}<span className="keyword">switch</span> (gate) {"{"}{"\n"}{"                    "}<span className="case">case</span> <span className="string">"a"</span>:{"\n"}{"                        "}<span className="function">alert</span>(<span className="string">"Gate A: empty"</span>);{"\n"}{"                        "}<span className="keyword">break</span>;{"\n"}{"                    "}<span className="case">case</span> <span className="string">"b"</span>:{"\n"}{"                        "}<span className="function">alert</span>(<span className="string">"Gate B: main prize"</span>);{"\n"}{"                        "}win = <span className="boolean">true</span>;{"\n"}{"                        "}<span className="keyword">break</span>;{"\n"}{"                    "}<span className="case">case</span> <span className="string">"c"</span>:{"\n"}{"                        "}<span className="function">alert</span>(<span className="string">"Gate C: empty"</span>);{"\n"}{"                        "}<span className="keyword">break</span>;{"\n"}{"                    "}<span className="default">default</span>:{"\n"}{"                        "}<span className="function">alert</span>(<span className="string">"No gate "</span> + <span className="function">String</span>(gate));{"\n"}{"                "}{"}"}{"\n"}{"\n"}{"                "}<span className="keyword">if</span> (win) {"{"}{"\n"}{"                    "}<span className="function">alert</span>(<span className="string">"Winner!"</span>);{"\n"}{"                "}{"}"}{"\n"}{"            "}</code>{"\n"}{"        "}</pre>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
