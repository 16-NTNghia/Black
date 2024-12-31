import React, { useEffect } from 'react'

export default function Blog7() {

    useEffect(() => {
        document.title = "Khám Phá Biến Trong JavaScript Phần 2."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>Khám Phá Biến Trong JavaScript Phần 2.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 30/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Thay đổi giá trị của biến
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Biến (variable) là nơi lưu trữ dữ liệu có thể thay đổi. Việc thay đổi giá trị của biến được thực
                                hiện bằng cách gán một giá trị mới, giá trị cũ sẽ bị ghi đè. Ví dụ, biến <span style={{ color: 'red', fontWeight: 'bolder' }}>steps</span> ban đầu chứa số 100,
                                sau đó được thay đổi thành 120. Tiếp theo, ta cộng thêm 200 vào giá trị hiện tại của biến, và kết
                                quả biến có giá trị 320.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> steps = <span className="number">100</span>;{"\n"}{"                                "}<span className="console">console.log</span>(steps); <span className="comment">// -&gt; 100</span>{"\n"}{"                                "}steps = <span className="number">120</span>;{"\n"}{"                                "}<span className="console">console.log</span>(steps); <span className="comment">// -&gt; 120</span>{"\n"}{"                                "}steps = steps + <span className="number">200</span>;{"\n"}{"                                "}<span className="console">console.log</span>(steps); <span className="comment">// -&gt; 320</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong JavaScript, biến không có kiểu cố định (hay chính xác hơn là kiểu yếu và động). Điều này nghĩa
                                là JavaScript không kiểm soát loại giá trị mà ta lưu trong biến. Kiểu dữ liệu là gì? Kiểu dữ liệu
                                xác định tập hợp giá trị có cùng tính chất và các phép toán mà ta có thể thực hiện trên chúng. Các
                                loại kiểu dữ liệu phụ thuộc vào ngôn ngữ lập trình, và trong JavaScript, các kiểu chính bao gồm: số
                                (number) và chuỗi ký tự (string).
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                JavaScript cho phép dễ dàng thay đổi kiểu dữ liệu của biến. Ví dụ, biến greeting có thể được gán giá
                                trị với kiểu khác so với giá trị ban đầu. JavaScript còn hỗ trợ chuyển đổi kiểu dữ liệu ngầm
                                (implicit conversion). Khi cộng giá trị của biến <span style={{ color: 'red', fontWeight: 'bolder' }}>counter</span> vào biến <span style={{ color: 'red', fontWeight: 'bolder' }}>greeting</span>, trình thông dịch sẽ kiểm
                                tra kiểu dữ liệu của greeting và chuyển đổi giá trị của counter sao cho phù hợp. Kết quả là chuỗi
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>"100"</span>sẽ được thêm vào chuỗi <span style={{ color: 'red', fontWeight: 'bolder' }}>"Hello!"</span>, và biến <span style={{ color: 'red', fontWeight: 'bolder' }}>greeting</span> sẽ chứa giá trị <span style={{ color: 'red', fontWeight: 'bolder' }}>"Hello!100"</span>.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> greeting = <span className="string">"Hello!"</span>;{"\n"}{"                                "}<span className="keyword">let</span> counter = <span className="number">100</span>;{"\n"}{"                                "}greeting = greeting + counter;{"\n"}{"                                "}console.log(greeting); <span className="comment">// -&gt; Hello!100</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Hằng số (Constants)
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Từ khóa const được sử dụng để khai báo các "container" tương tự như biến, gọi là hằng số. Hằng số
                                dùng để lưu trữ các giá trị không thể thay đổi sau khi đã được gán lúc khởi tạo. Điều này có nghĩa
                                là hằng số phải được khai báo và khởi tạo cùng lúc. Ví dụ:
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">const</span> greeting = <span className="string">"Hello!"</span>; <span className="comment">// Hợp lệ</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Nhưng nếu chỉ khai báo mà không khởi tạo, sẽ gây lỗi:
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="comment">// -&gt; Lỗi: Uncaught SyntaxError:Missing initializer in const declaration</span>{"\n"}{"                                "}<span className="keyword">const</span> greeting;{"\n"}{"                                "}greeting = <span className="string">"Hello!"</span>;{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Ngoài ra, việc thay đổi giá trị của hằng số cũng không được phép:
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="comment">// -&gt; Lỗi: Uncaught TypeError: Assignment to constant variable.</span>{"\n"}{"                                "}<span className="keyword">const</span> greeting = <span className="string">"Hello!"</span>;{"\n"}{"                                "}greeting = <span className="string">"Hi!"</span>;{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Mục đích chính của hằng số là ngăn chặn việc thay đổi giá trị một cách tình cờ. Điều này rất quan
                                trọng khi làm việc với các giá trị cần giữ cố định, như đường dẫn tài nguyên, mã thông báo (token),
                                hoặc các dữ liệu không đổi trong suốt vòng đời của script.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Hằng số cũng có thể được sử dụng để lưu trữ kết quả phụ của các phép tính hoặc trong các trường hợp
                                mà giá trị sau khi được thu thập/tính toán sẽ không thay đổi nữa. Sử dụng const không chỉ giúp bảo
                                vệ giá trị khỏi việc thay đổi ngoài ý muốn mà còn cho phép JavaScript tối ưu hóa mã, có thể cải
                                thiện hiệu suất của chương trình.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Giới thiệu ngắn về hàm (Functions)
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Hàm là gì? Trong lập trình, có những đoạn mã thực hiện một nhiệm vụ cụ thể và được sử dụng nhiều
                                lần. Bạn có thể sao chép đoạn mã đó đến bất kỳ nơi nào bạn muốn sử dụng. Tuy nhiên, cách làm này
                                không hiệu quả vì:
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Kích thước chương trình sẽ tăng không cần thiết.
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                <span style={{ color: 'red' }}>
                                    <i className="fa-solid fa-check me-3" />
                                    Nếu cần thay đổi hay sửa lỗi trong đoạn mã, bạn phải chỉnh sửa ở tất cả các nơi đã sử dụng đoạn mã đó.
                                </span>
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Hàm là một đoạn mã được tách riêng và có tên, giống như việc đặt tên cho một biến. Khi cần sử dụng,
                                bạn chỉ cần gọi hàm theo tên (gọi là call the function).
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Ví dụ khai báo một hàm đơn giản có tên testFunction:
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực khai báo hàm */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">function</span> testFunction() {"{"}{"\n"}{"                                    "}<span className="function">console.log</span>(<span className="string">"Hello"</span>);{"\n"}{"                                    "}<span className="function">console.log</span>(<span className="string">"World"</span>);{"\n"}{"                                "}{"}"}{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                So sánh mã có dùng hàm và không dùng hàm
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực đoạn mã không dùng hàm */}
                                <div className="code-area mt-3">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="comment">// không dùng hàm:</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"let's begin:"</span>); <span className="comment">// -&gt; let's begin:</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"Hello"</span>);{"        "}<span className="comment">// -&gt; Hello</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"World"</span>);{"        "}<span className="comment">// -&gt; World</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"and again:"</span>);{"   "}<span className="comment">// -&gt; and again:</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"Hello"</span>);{"        "}<span className="comment">// -&gt; Hello</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"World"</span>);{"        "}<span className="comment">// -&gt; World</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <div className="editor-container mb-5">
                                {/* Khu vực đoạn mã dùng hàm */}
                                <div className="code-area mt-3">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="comment">// có dùng hàm:</span>{"\n"}{"                                "}<span className="keyword">function</span> printHelloWorld() {"{"}{"\n"}{"                                    "}<span className="function">console.log</span>(<span className="string">"Hello"</span>);{"\n"}{"                                    "}<span className="function">console.log</span>(<span className="string">"World"</span>);{"\n"}{"                                "}{"}"}{"\n"}{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"let's begin:"</span>);{"\n"}{"                                "}printHelloWorld(); <span className="comment">// -&gt; Hello, World</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"and again:"</span>);{"\n"}{"                                "}printHelloWorld(); <span className="comment">// -&gt; Hello, World</span>{"\n"}{"                                "}<span className="function">console.log</span>(<span className="string">"and once more:"</span>);{"\n"}{"                                "}printHelloWorld(); <span className="comment">// -&gt; Hello, World</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
